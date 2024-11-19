import React from "react";
import { Button, TextField } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <TextField label="Username" variant="outlined" />
      <Button variant="contained">Search</Button>
    </>
  );
}
