"use client";
import { Narrator } from "@/types";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const NarratorCard = ({
  narrator,
  index,
}: {
  narrator: Narrator;
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
        maxWidth: "360px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "340px" }}>
        <Image
          src={narrator.imageUrl}
          alt="Narrator Image"
          priority
          width={360}
          height={340}
        />
      </div>
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
