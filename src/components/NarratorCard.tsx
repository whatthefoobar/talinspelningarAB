"use client";
import { INarrator } from "@/types";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const NarratorCard = ({
  narrator,
  index,
}: {
  narrator: INarrator;
  index: number;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTogglePlayback = () => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Card
      key={index}
      sx={{
        width: "100%",
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "300px" }}>
        <Image
          src={narrator.imageUrl}
          alt="Narrator Image"
          priority
          width={320}
          height={300}
        />
      </Box>
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
          <Typography component="div" variant="h6">
            Provljud
          </Typography>
          <IconButton
            aria-label={isPlaying ? "pause" : "play"}
            onClick={handleTogglePlayback}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </Box>
      </Box>
      <audio ref={audioRef} src={narrator.audioUrl} />
    </Card>
  );
};

export default NarratorCard;
