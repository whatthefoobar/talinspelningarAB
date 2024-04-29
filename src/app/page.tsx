import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
// import home from "../../public/home.jpg";

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
      <Grid item xs={12} md={6} style={{ border: "2px solid pink" }}>
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
      <Grid
        item
        xs={12}
        md={6}
        style={{ border: "2px solid red", width: "500px" }}
      >
        <Image
          src="/home.jpg"
          // src={home}
          alt="Placeholder"
          width={760}
          height={506}
          style={{ width: "100%", height: "auto", border: "2px solid green" }}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
