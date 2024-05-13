"use client";
import { useState } from "react";
import { Typography, Button } from "@mui/material";
import NarratorCard from "@/components/NarratorCard";
import { narrators } from "@/util/narrators";

const PAGE_SIZE = 8; // Number of items to load per page

const NarratorsPage = () => {
  const [loadedCount, setLoadedCount] = useState(PAGE_SIZE);

  const loadMore = () => {
    // Load the remainder of the narrators
    setLoadedCount(narrators.length);
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
        {narrators.slice(0, loadedCount).map((narrator, index) => (
          <NarratorCard key={index} narrator={narrator} index={index} />
        ))}
      </div>
      {loadedCount < narrators.length && (
        <Button
          variant="contained"
          color="primary"
          onClick={loadMore}
          sx={{ marginBottom: "20px", backgroundColor: "#f28500" }}
        >
          Load more
        </Button>
      )}
    </>
  );
};

export default NarratorsPage;
