import company1 from "../assets/images/mtm-logo.png;
// import company2 from "../../assets/images/spsm-logo.png";
// import company3 from "../../assets/images/arbetsformedlingen-logo.png";
// import company4 from "../../assets/images/social-e1642080029691.png";
// import company5 from "../../assets/images/eskilstuna-kommun-logo.png";
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
            <img src={company1} alt="mtm logo" style={companyLogoStyle} />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6} style={companyColStyle}>
            <img src={company2} alt="mtm logo" style={companyLogoStyle} />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6} style={companyColStyle}>
            <img src={company3} alt="mtm logo" style={companyLogoStyle} />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6} style={companyColStyle}>
            <img src={company4} alt="mtm logo" style={companyLogoStyle} />
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6} style={companyColStyle}>
            <img src={company5} alt="mtm logo" style={companyLogoStyle} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Companies;
