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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const cvFile = (
      event.currentTarget.querySelector('[name="cv"]') as HTMLInputElement
    )?.files?.[0];
    const audioFile = (
      event.currentTarget.querySelector('[name="audio"]') as HTMLInputElement
    )?.files?.[0];

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("CV File:", cvFile);
    console.log("Audio File:", audioFile);

    // Logic to handle form submission goes here
    console.log("Form submitted!");
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
              Upload your CV
              <VisuallyHiddenInput
                type="file"
                name="cv"
                accept=".doc,.docx,.pdf"
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
              Upload your audio file
              <VisuallyHiddenInput type="file" name="audio" accept="audio/*" />
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#b48e92" }}
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
