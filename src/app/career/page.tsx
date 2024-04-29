"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Paper from "@mui/material/Paper";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CareerPage = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [cvFile, setCVFile] = React.useState<File>();
  const [audioFile, setAudioFile] = React.useState<File>();
  const [formError, setFormError] = React.useState<boolean>(false); // not used yet
  const [submitDisabled, setSubmitDisabled] = React.useState<boolean>(true);

  const handleCVFileChange = (e: React.FormEvent) => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setCVFile(files[0]);
      validateForm(files[0], audioFile);
    }
  };

  const handleAudioFileChange = (e: React.FormEvent) => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setAudioFile(files[0]);
      validateForm(cvFile, files[0]);
    }
  };

  const validateForm = (cv: File | undefined, audio: File | undefined) => {
    if (cv && audio) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      email.length === 0 ||
      cvFile === undefined ||
      audioFile === undefined
    ) {
      setFormError(true);
      return;
    }

    // // Reset form error when all fields are filled
    // setFormError(false);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone || ""); // handle empty phone
    if (cvFile) {
      formData.append("cv", cvFile);
    }
    if (audioFile) {
      formData.append("audio", audioFile);
    }

    // Log form data to console
    for (const pair of formData.entries()) {
      console.log("form data:", pair[0], pair[1]);
    }

    // Send formData to backend using fetch or any other method here

    // if (cvFile) {
    //   formData.append("cvFile", cvFile);
    // }

    // if (audioFile) {
    //   formData.append("audioFile", audioFile);
    // }

    // for (const pair of formData.entries()) {
    //   if (pair[0] === "cvFile" && pair[1] instanceof File) {
    //     console.log("CV File Name:", pair[1].name);
    //   } else if (pair[0] === "audioFile" && pair[1] instanceof File) {
    //     console.log("Audio File Name:", pair[1].name);
    //   } else {
    //     console.log(pair[0] + ", " + pair[1]);
    //   }
    // }

    // try {
    //   const response = await fetch("/api/submitForm", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     console.log("form data submitted:", formData);

    //     console.log("Form submitted successfully");
    //   } else {
    //     console.error("Failed to submit form:", response.statusText);
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  return (
    <Box maxWidth="600px" mx="auto" mt={4}>
      <Paper sx={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Career Opportunities
        </Typography>
        <Typography variant="body1" gutterBottom>
          Interested in joining our team? Please fill out the form below to
          apply for available positions.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField
              required
              fullWidth
              id="name"
              name="name"
              label="Your Name"
              variant="outlined"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={formError && !name}
            />
          </Box>
          <Box mt={2}>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Your Email"
              type="email"
              variant="outlined"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={formError && !email}
            />
          </Box>
          <Box mt={2}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone Number"
              variant="outlined"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <Box mt={2}>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ backgroundColor: "transparent", color: "#565554" }}
            >
              {cvFile !== undefined ? cvFile.name : "Upload your CV"}

              <VisuallyHiddenInput
                type="file"
                name="cv"
                accept=".doc,.docx,.pdf"
                onChange={handleCVFileChange}
              />
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ backgroundColor: "transparent", color: "#565554" }}
            >
              {audioFile !== undefined
                ? audioFile.name
                : "Upload your audio file"}

              <VisuallyHiddenInput
                type="file"
                name="audio"
                accept="audio/*"
                onChange={handleAudioFileChange}
              />
            </Button>
          </Box>
          <Box mt={2}>
            {/* {formError && (
              <Box mt={2} color="red">
                Please fill in all fields.
              </Box>
            )} */}
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#f28500" }}
              disabled={submitDisabled}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default CareerPage;
