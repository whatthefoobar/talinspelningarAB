import { Container, Typography, Box } from "@mui/material";

const IntegritetsPolicyPage = () => {
  return (
    //<Box sx={{ margin: "30px" }}>
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Integritetspolicy
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Vilka vi är
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          Vår webbplatsadress är:{" "}
          <a href="http://talinspelningar.se">http://talinspelningar.se</a>.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Vilka personuppgifter vi samlar in och varför vi samlar in dem
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Kommentarer
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          När besökare lämnar kommentarer på webbplatsen samlar vi in de
          uppgifter som visas i kommentarsformuläret samt besökarens ip-adress
          och user agent-sträng som hjälp för detektering av skräpmeddelanden.
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          En anonymiserad sträng som skapats utifrån din e-postadress (även
          kallat hash-värde) kan komma att sändas till tjänsten Gravatar för att
          avgöra om du finns registrerad där. Integritetspolicyn för tjänsten
          Gravatar finns på{" "}
          <a href="https://automattic.com/privacy/">
            https://automattic.com/privacy/
          </a>
          . När din kommentar har godkänts kommer din profilbild att visas
          publikt tillsammans med din kommentar.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Media
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          Om du laddar upp bilder till webbplatsen bör du undvika att ladda upp
          bilder där EXIF-data inkluderar data från GPS-lokalisering. Besökare
          till webbplatsen kan ladda ned och ta fram alla
          positioneringsuppgifter från bilder på webbplatsen.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Kontaktformulär
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Cookie-filer
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          Om du lämnar en kommentar på vår webbplats kan du välja att spara ditt
          namn, din e-postadress och webbplatsadress i cookie-filer. Detta är
          för din bekvämlighet för att du inte ska behöva fylla i dessa
          uppgifter igen nästa gång du skriver en kommentar. Dessa cookie-filer
          gäller i ett år.
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          Om du har ett konto och loggar in på denna webbplats kommer vi att
          skapa en tillfällig cookie-fil för att kontrollera om din webbläsare
          accepterar cookie-filer. Denna cookie-fil innehåller ingen personligt
          identifierbar information och försvinner när du stänger din
          webbläsare.
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          När du loggar in kommer vi dessutom att skapa flera cookie-filer för
          att spara information om din inloggning och dina val för utformning av
          skärmlayouten. Cookie-filer för inloggning gäller i två dagar och
          cookie-filer för layoutval gäller i ett år. Om du kryssar i ”Kom ihåg
          mig” kommer din cookie att finnas kvar i två veckor. Om du loggar ut
          från ditt konto kommer cookie-filerna för inloggning att tas bort.
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          Om du redigerar eller publicerar en artikel kommer en extra cookie-fil
          att sparas i din webbläsare. Denna cookie-fil innehåller inga
          personuppgifter utan anger endast inläggs-ID för den artikel du just
          redigerade. Den gäller under 1 dygn.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Inbäddad innehåll från andra webbplatser
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          Artiklar på denna webbplats kan innehålla inbäddat innehåll
          (exempelvis videoklipp, bilder, artiklar o.s.v.). Inbäddat innehåll
          från andra webbplatser beter sig precis på samma sätt som om besökaren
          har besökt den andra webbplatsen.
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          Dessa webbplatser kan samla in uppgifter om dig, använda cookie-filer,
          bädda in ytterligare spårning från tredje part och övervaka din
          interaktion med sagda inbäddade innehåll, inklusive spårning av din
          interaktion med detta inbäddade innehåll om du har ett konto och är
          inloggad på webbplatsen i fråga.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Analys
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Vilka vi delar dina data med
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Hur länge vi behåller era uppgifter
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          Om du skriver en kommentar kommer kommentaren och dess metadata att
          sparas utan tidsgräns. Anledningen till detta är att vi behöver kunna
          hitta och godkänna uppföljningskommentarer automatiskt och inte lägga
          dem i kö för granskning.
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          För användare som registrerar sig på er webbplats (om sådana finns)
          sparar vi även de personuppgifter de anger i sin användarprofil. Alla
          användare kan se, redigera eller radera sina personuppgifter när som
          helst (med undantaget att de inte kan ändra sitt användarnamn). Även
          webbplatsens administratörer kan se och redigera denna information.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Vilka rättigheter du har över dina data
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          Om du har ett konto eller har skrivit några kommentarer på denna
          webbplats kan du begära en exportfil med de personuppgifter vi har om
          dig, inklusive alla uppgifter du har gett oss. Du kan också begära att
          vi tar bort alla personuppgifter vi har om dig. Detta omfattar inte
          eventuella uppgifter som vi är tvungna att spara av administrativa,
          legala eller säkerhetsändamål.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Vart vi skickar dina uppgifter
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify", textIndent: "30px" }}>
          Kommentarer från besökare kanske kontrolleras via en automatiserad
          tjänst för detektering av skräppost.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Din kontaktinformation
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Ytterligare information
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Hur vi skyddar din information
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Vilka procedurer vi har för dataläckor
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Från vilka utomstående parter vi tar emot data
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Vilket automatiserat beslutsfattande och/eller profilskapande vi gör
          med våra användaruppgifter
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Branschkrav om delgivning av information
        </Typography>
      </Box>
    </Container>
    //</Box>
  );
};

export default IntegritetsPolicyPage;
