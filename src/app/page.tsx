import { Box, Button, Typography } from "@mui/material";
import styles from "./page.module.css";
import company1 from "../../public/mtm-logo.png";
import company2 from "../../public/spsm-logo.png";
import company3 from "../../public/arbetsformedlingen-logo.png";
import company4 from "../../public/social-e1642080029691.png";
import company5 from "../../public/eskilstuna-kommun-logo.png";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <Box className={styles.homePageContainer}>
      <Box className={styles.content}>
        <Typography variant="h3" component="h1" gutterBottom>
          Välkommen till Talinspelningar
        </Typography>
        <Typography variant="h5" component="p" paragraph>
          Vi hjälper människor ta del av kunskap och litteratur via tal.
        </Typography>
        <Link href="/inlasare" passHref>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: "2vh",
              marginBottom: "40px",
              backgroundColor: "#f28500",
            }}
          >
            Våra inläsare
          </Button>
        </Link>
      </Box>

      <Box className={styles.logoContainer}>
        <Image src={company1} alt="Company 1 Logo" width={150} height={60} />
        <Image src={company2} alt="Company 2 Logo" width={150} height={60} />
        <Image src={company3} alt="Company 3 Logo" width={210} height={40} />
        <Image src={company4} alt="Company 4 Logo" width={150} height={60} />
        <Image src={company5} alt="Company 5 Logo" width={150} height={60} />
      </Box>
    </Box>
  );
};

export default HomePage;
