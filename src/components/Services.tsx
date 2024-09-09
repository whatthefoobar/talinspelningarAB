import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { BiSolidBookBookmark } from "react-icons/bi";
import { LuFileAudio } from "react-icons/lu";
import { IoSchoolOutline } from "react-icons/io5";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { IconType } from "react-icons";

interface IServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: IServiceCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          textAlign: "center",
        }}
      >
        <Box style={{ fontSize: "2rem", marginBottom: "8px" }}>
          <Icon />
        </Box>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Services = () => {
  return (
    <>
      <Typography
        variant="h2"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginTop: "24px",
          marginBottom: "30px",
        }}
      >
        VI GÖR FÖLJANDE:
      </Typography>
      <Grid container spacing={2}>
        <ServiceCard
          icon={BiSolidBookBookmark}
          title="Böcker/tidningar"
          description="Talböcker, med eller utan textsynkronisering,
 Ljudböcker,Taltidningar"
        />
        <ServiceCard
          icon={LuFileAudio}
          title="Audio"
          description="Poddar, inklusive redigering, ljudslingor till färdig podd,Radioprogram,Radioteater"
        />
        <ServiceCard
          icon={IoSchoolOutline}
          title="Utbildningsmaterial"
          description="Informationsbroschyrer,
              Museiguider,
              E-learningmaterial/Interaktiva websidor,
              Manualer"
        />
        <ServiceCard
          icon={AiTwotoneCustomerService}
          title="Övriga"
          description="Syntolkning, Reklam,Ljud till appar"
        />
      </Grid>
    </>
  );
};

export default Services;
