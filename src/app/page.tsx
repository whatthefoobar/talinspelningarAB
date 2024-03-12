import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const HomePage = () => {
  return (
    // <Typography variant="h1">Test</Typography>
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
            backgroundColor: "#f28500",
          }}
        >
          Get Started
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Image
          src="/home.jpg"
          alt="Placeholder"
          layout="responsive"
          width={1260}
          height={750}
          className="max-w-full h-auto max-h-[500px]" // Tailwind CSS class for responsive image
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
