import { Button, Typography } from "@mui/material";
import React from "react";

function SecondChance() {
  return (
    <div style={{ marginBottom: "88px", marginTop: "60px" }}>
      <Typography sx={{ marginTop: "9%", lineHeight: "3.5" }}>
        A paragraph of text with an unassigned link.
        <br />A second row of text with a web link
      </Typography>

      <Button
        variant="outlined"
        sx={{
          marginTop: "5%",
          width: "10%",
          border: "none",
          backgroundColor: "#359602",
          color: "white",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#359602",
          },
        }}
      >
        Button
      </Button>
    </div>
  );
}

export default SecondChance;
