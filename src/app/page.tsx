import { Button, Grid, Typography } from "@mui/material";
import styles from "./HomePage.module.css"; // Import CSS module for styling
// import home from "../../public/home.jpg";

const HomePage = () => {
  return (
    <Grid
      container
      className={styles.homePageContainer} // Use className to apply styles from CSS module
    >
      <Grid item xs={12} md={6} className={styles.content}>
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
    </Grid>
  );
};

export default HomePage;
