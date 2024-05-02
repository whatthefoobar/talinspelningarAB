import { Button, Grid, Typography } from "@mui/material";
import styles from "./page.module.css";
// import home from "../../public/home.jpg";
import company1 from "../../public/mtm-logo.png";
import company2 from "../../public/spsm-logo.png";
import company3 from "../../public/arbetsformedlingen-logo.png";
import company4 from "../../public/social-e1642080029691.png";
import company5 from "../../public/eskilstuna-kommun-logo.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <Grid
        container
        className={styles.homePageContainer} // Use className to apply styles from CSS module
      >
        <Grid item xs={12} md={6} className={styles.content}>
          <Typography variant="h2" component="h1" gutterBottom>
            Välkommen till Talinspelningar
          </Typography>
          <Typography variant="h5" component="p" paragraph>
            Vi hjälper människor ta del av kunskap och litteratur via tal.
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

      <div className={styles.logoContainer}>
        <Image src={company1} alt="Company 1 Logo" width={150} height={75} />
        <Image src={company2} alt="Company 2 Logo" width={150} height={75} />
        <Image src={company3} alt="Company 3 Logo" width={210} height={75} />
        <Image src={company4} alt="Company 4 Logo" width={150} height={75} />
        <Image src={company5} alt="Company 5 Logo" width={150} height={75} />
      </div>
    </div>
  );
};

export default HomePage;
