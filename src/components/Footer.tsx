import React from "react";
import styles from "./footer.module.css";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4} className={styles.column}>
          <Typography variant="h6">Logo</Typography>
          {/* Place your logo here */}
        </Grid>
        <Grid item xs={12} sm={4} className={styles.column}>
          <Typography variant="h6">Contact Info</Typography>
          {/* Place your contact info here */}
        </Grid>
        <Grid item xs={12} sm={4} className={styles.column}>
          <Typography variant="h6">Services</Typography>
          {/* Place your services here */}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
