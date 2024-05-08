import { Typography } from "@mui/material";
import { INarrator } from "@/types";
import NarratorCard from "@/components/NarratorCard";

const narrators: INarrator[] = [
  {
    name: "Örjan",
    imageUrl: "/orjan.jpg",
    audioUrl: "https://talinspelningar.se/wp-content/uploads/2019/10/Örjan.mp3",
  },
  {
    name: "Camilla",
    imageUrl: "/camilla.jpg",
    audioUrl:
      "https://talinspelningar.se/wp-content/uploads/2019/10/Camilla.mp3",
  },
  {
    name: "Anna W",
    imageUrl: "/anna-w.jpg",
    audioUrl:
      "https://talinspelningar.se/wp-content/uploads/2019/10/anna-w.mp3",
  },
  {
    name: "Lars",
    imageUrl: "/lars.jpg",
    audioUrl: "https://talinspelningar.se/wp-content/uploads/2019/10/lars.mp3",
  },
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
