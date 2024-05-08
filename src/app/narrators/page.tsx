import { Typography } from "@mui/material";

import { Narrator } from "@/types";
import NarratorCard from "@/components/NarratorCard";

const narrators: Narrator[] = [
  {
    name: "Narrator 1",
    imageUrl: "/orjan.jpg", // Adjust paths as needed
    audioUrl: "https://talinspelningar.se/wp-content/uploads/2019/10/Örjan.mp3",
  },
  {
    name: "Narrator 2",
    imageUrl: "/camilla.jpg",
    audioUrl:
      "https://talinspelningar.se/wp-content/uploads/2019/10/Camilla.mp3",
  },
  // Add more narrators as needed
];

const NarratorsPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Our narrators
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {narrators.map((narrator, index) => (
          <NarratorCard key={index} narrator={narrator} index={index} />
        ))}
      </div>
    </>
  );
};

export default NarratorsPage;
