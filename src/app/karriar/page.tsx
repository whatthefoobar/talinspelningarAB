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
  const [formError, setFormError] = React.useState<boolean>(false);
  const [submitDisabled, setSubmitDisabled] = React.useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone || ""); // handle empty phone
    if (cvFile !== undefined && cvFile !== null) {
      formData.append("cv", cvFile);
    }
    if (audioFile !== undefined && audioFile !== null) {
      formData.append("audio", audioFile);
    }

    setIsSubmitting(true); // Start submitting state

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true); // Set form submission state to true
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false); // End submitting state
    }
  };

  if (isSubmitted) {
    return (
      <Box maxWidth="600px" mx="auto" mt={4} mb={4} sx={{ zIndex: "999" }}>
        <Paper sx={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Tack för ditt meddelande.
          </Typography>
          <Typography variant="body1">Vi återkommer snart.</Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box maxWidth="600px" mx="auto" mt={4} mb={4} sx={{ zIndex: "999" }}>
      <Paper sx={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Karriärmöjligheter
        </Typography>
        <Typography variant="body1" gutterBottom>
          Intresserad av att bli en del av vårt team? Vänligen fyll i formuläret
          nedan för att ansöka om tillgängliga tjänster.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField
              required
              fullWidth
              id="name"
              name="name"
              label="Ditt namn"
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
              label="Din email"
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
              label="Telefonnummer"
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
              {cvFile !== undefined ? cvFile.name : "Ladda upp ditt CV"}

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
                : "Ladda upp din provljudfil"}

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
              style={{
                backgroundColor: submitDisabled ? "#d2ac7d" : "#f28500",
              }}
              disabled={submitDisabled || isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? "Skickar..." : "Skicka"}{" "}
              {/* Change button text while submitting */}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default CareerPage;
