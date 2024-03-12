import Image from "next/image";
import { Container, Grid } from "@mui/material";

const Companies = () => {
  const companyLogoStyle = {
    maxWidth: "150px",
    maxHeight: "50px",
    marginBottom: "20px",
  };

  const companyColStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <section className="companies">
      <Container>
        <Grid container justify="center">
          <Grid item lg={2} md={3} sm={4} xs={6} style={companyColStyle}>
            {/* <img src={company1} alt="mtm logo" style={companyLogoStyle} /> */}
            <Image src="/mtm-logo.png" fill={true} alt="mtm logo" />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6} style={companyColStyle}>
            {/* <img src={company2} alt="mtm logo" style={companyLogoStyle} /> */}
            <Image src="/mtm-logo.png" fill={true} alt="mtm logo" />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6} style={companyColStyle}>
            {/* <img src={company3} alt="mtm logo" style={companyLogoStyle} /> */}
            <Image src="/mtm-logo.png" fill={true} alt="mtm logo" />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6} style={companyColStyle}>
            {/* <img src={company4} alt="mtm logo" style={companyLogoStyle} /> */}
            <Image src="/mtm-logo.png" fill={true} alt="mtm logo" />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6} style={companyColStyle}>
            {/* <img src={company5} alt="mtm logo" style={companyLogoStyle} /> */}
            <Image src="/mtm-logo.png" fill={true} alt="mtm logo" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Companies;
