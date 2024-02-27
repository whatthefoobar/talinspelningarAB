import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to handle form submission goes here
    console.log("Form submitted!");
  };

  return (
    <Box maxWidth="600px" mx="auto" mt={4}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Have a question or feedback? Feel free to reach out to us using the form
        below.
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
            required
            fullWidth
            id="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
          />
        </Box>
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactPage;
