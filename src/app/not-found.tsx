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
      <Typography variant="h4">404 - Page Not Found</Typography>
      <Typography variant="body1">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <Typography variant="body1">
        Go back to{" "}
        <Link href="/" color="primary" style={{ textDecoration: "none" }}>
          <span style={{ textDecoration: "underline" }}>Homepage</span>
        </Link>
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
