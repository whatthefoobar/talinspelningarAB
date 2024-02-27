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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to handle form submission goes here
    console.log("Form submitted!");
  };

  return (
    <Box maxWidth="600px" mx="auto" mt={4}>
      <Paper sx={{ padding: "20px" }}>
        {" "}
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
              label="Phone Number"
              variant="outlined"
              autoComplete="tel"
            />
          </Box>
          <Box mt={2}>
            {/* <Typography variant="body1" gutterBottom>
            Attach Resume (doc or pdf)
          </Typography> */}
            {/* <input type="file" accept=".doc,.docx,.pdf" /> */}
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload your CV
              <VisuallyHiddenInput type="file" accept=".doc,.docx,.pdf" />
            </Button>
          </Box>
          <Box mt={2}>
            {/* <Typography variant="body1" gutterBottom>
            Attach Audio File
          </Typography> */}
            {/* <input type="file" accept="audio/*" /> */}
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload your audio file
              <VisuallyHiddenInput type="file" accept="audio/*" />
            </Button>
          </Box>
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default CareerPage;
