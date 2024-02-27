import React, { useState, useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import narrator1Image from "../assets/images/orjan.jpg";
import narrator2Image from "../assets/images/camilla.jpg";

interface Narrator {
  name: string;
  imageUrl: string;
  audioUrl: string;
}

const narrators: Narrator[] = [
  {
    name: "Narrator 1",
    imageUrl: narrator1Image,
    audioUrl: "https://talinspelningar.se/wp-content/uploads/2019/10/Örjan.mp3",
  },
  {
    name: "Narrator 2",
    imageUrl: narrator2Image,
    audioUrl:
      "https://talinspelningar.se/wp-content/uploads/2019/10/Camilla.mp3",
  },
  {
    name: "Narrator 1",
    imageUrl: narrator1Image,
    audioUrl: "https://talinspelningar.se/wp-content/uploads/2019/10/Örjan.mp3",
  },
  {
    name: "Narrator 2",
    imageUrl: narrator2Image,
    audioUrl:
      "https://talinspelningar.se/wp-content/uploads/2019/10/Camilla.mp3",
  },
  {
    name: "Narrator 1",
    imageUrl: narrator1Image,
    audioUrl: "https://talinspelningar.se/wp-content/uploads/2019/10/Örjan.mp3",
  },
  {
    name: "Narrator 1",
    imageUrl: narrator1Image,
    audioUrl: "https://talinspelningar.se/wp-content/uploads/2019/10/Örjan.mp3",
  },

  // Add more narrators as needed
];

const NarratorsPage = () => {
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(narrators.length).fill(false)
  );
  const audioRefs = useRef<HTMLAudioElement[]>(
    narrators.map(() => new Audio())
  );

  const handleTogglePlayback = (index: number) => {
    const newIsPlaying = [...isPlaying];
    const audio = audioRefs.current[index];

    if (newIsPlaying[index]) {
      audio.pause();
    } else {
      audio.play();
    }

    newIsPlaying[index] = !newIsPlaying[index];
    setIsPlaying(newIsPlaying);
  };

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
          <Card
            key={index}
            sx={{
              width: "100%",
              maxWidth: "360px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image={narrator.imageUrl}
              alt="Narrator Image"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {narrator.name}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pb: 1,
                }}
              >
                <IconButton
                  aria-label={isPlaying[index] ? "pause" : "play"}
                  onClick={() => handleTogglePlayback(index)}
                >
                  {isPlaying[index] ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
              </Box>
            </Box>
            <audio
              ref={(ref) => (audioRefs.current[index] = ref)}
              src={narrator.audioUrl}
            />
          </Card>
        ))}
      </div>
    </>
  );
};

export default NarratorsPage;
