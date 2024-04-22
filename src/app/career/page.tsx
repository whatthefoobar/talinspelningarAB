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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name && !email && !phone && !cvFile && !audioFile) return;

    const formData = new FormData(event.currentTarget);

    formData.set("name", name);
    formData.set("email", email);
    formData.set("phone", phone);

    if (cvFile) {
      formData.set("cvFile", cvFile);
    }

    if (audioFile) {
      formData.set("audioFile", audioFile);
    }

    console.log("formData:", formData);

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("form data submitted:", formData);

        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCVFileChange = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setCVFile(files[0]);
    }
  };

  const handleAudioFileChange = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setAudioFile(files[0]);
    }
  };

  // React.useEffect(() => {
  //   console.log("cvFile:", cvFile);
  //   console.log("audioFile:", audioFile);
  // }, [cvFile, audioFile]);

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
              {/* {"Upload your CV"} */}
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
              {/* {"Upload your audio file"} */}
              <VisuallyHiddenInput
                type="file"
                name="audio"
                accept="audio/*"
                onChange={handleAudioFileChange}
              />
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#f28500" }}
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
