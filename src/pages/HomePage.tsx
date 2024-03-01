import { Button, Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Grid
      container
      style={{
        marginTop: "10vh",
        textAlign: "center",
        fontSize: "2rem",
        padding: "0 20px",
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="h5" component="p" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          sem vitae eros pharetra viverra. Nam vitae luctus ligula.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: "2vh",
            marginBottom: "40px",
            backgroundColor: "#b48e92",
          }}
        >
          Get Started
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Replace the placeholder below with your image */}
        <img
          src="https://images.pexels.com/photos/4476366/pexels-photo-4476366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Placeholder"
          style={{
            maxWidth: "100%", // Make the image responsive
            height: "auto",
            maxHeight: "500px", // Set a maximum height if needed
          }}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
