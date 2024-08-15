import React from "react";
import styles from "./footer.module.css";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4} className={`${styles.column} ${styles.logo}`}>
          <Image
            src="/logo-bird-lilac@2x.png"
            alt="Logo Image"
            width={60}
            height={120}
          />
          <Typography variant="h6">Talinspelningar</Typography>
          {/* Place your logo here */}
        </Grid>
        <Grid item xs={12} sm={4} className={styles.column}>
          <Typography variant="h6">Kontakt</Typography>
          <Typography variant="body1">Ronnie Bäck, VD</Typography>
          <Typography variant="body1">08 – 27 14 19</Typography>
          <Typography variant="body1">solna@talinspelningar.se</Typography>
          <Typography variant="h6">Adress</Typography>
          <Typography variant="body1">
            Västra vägen 11 A 169 61 Solna
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={styles.column}>
          <Typography variant="h6">Kundservice</Typography>
          <Typography variant="body1" component={Link} href="/integritetspolicy">
          Integritetspolicy
          </Typography>
          {/* add link here to: https://talinspelningar.se/integritetspolicy/ */}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
