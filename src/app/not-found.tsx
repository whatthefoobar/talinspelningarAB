import { Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        gap: "10px",
      }}
    >
      <Typography variant="h4">404 - Sidan hittades inte</Typography>
      <Typography variant="body1">
        Sidan du letar efter kan ha tagits bort, fått sitt namn ändrat eller är tillfälligt otillgänglig.
      </Typography>
      <Typography variant="body1">
        Gå tillbaka till{" "}
        <Link href="/" color="primary" style={{ textDecoration: "none" }}>
          <span style={{ textDecoration: "underline" }}>hemsidan</span>
        </Link>
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
