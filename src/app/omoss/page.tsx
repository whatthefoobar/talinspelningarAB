import Services from "@/components/Services";
import { Box, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Box
      style={{
        width: "100%",
        maxWidth: 1100,
        margin: "auto",
        padding: "0 24px",
        marginBottom: "32px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "16px" }}
      >
        30 ÅRS ERFARENHET
      </Typography>
      <Typography
        style={{
          fontSize: "1.2rem",
          marginBottom: "16px",
          textAlign: "left",
          textIndent: "30px",
        }}
      >
        Vi har en stor stab av professionella uppläsare inom olika kategorier.
        Många med mångårig erfarenhet. Våra studios är specialutrustade för just
        uppläsning, vilket gör inspelningsarbetet effektivt och
        kostnadsbesparande.
      </Typography>
      <Typography
        style={{
          fontSize: "1.2rem",
          marginBottom: "16px",
          textAlign: "left",
          textIndent: "30px",
        }}
      >
        Vi har mer än 30 års erfarenhet av inspelning av böcker, de senaste 10
        åren har vi spelat in 1.000-1.500 titlar per år. Talins pelningar har
        hög kompetens inom respektive fackområde och modermålsinläsare i alla
        större språk och även de flesta språk för nyanlända.
      </Typography>
      <Services />
    </Box>
  );
};

export default AboutPage;
