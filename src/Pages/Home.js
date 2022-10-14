import React from "react";
import { Box, Button } from "@mui/material";
import LandingCarousel from "../Componets/LandingCarousel";
import LandingTable from "../Componets/LandingTable";
function Home() {
  const token = localStorage.getItem("access_token");
  return (
    <Box>
      {token ? (
        <div style={{ float: "right" }}>
          <a href="/dashboards">Dashboard</a>
        </div>
      ) : (
        <div style={{ float: "right" }}>
          <a href="/login">Login</a>
        </div>
      )}
      <Box className="Landing">
        <Box className="Landingheader">
          <h1>A Big Title</h1>
          <p className="landp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            varius eu diam et a venenatis quis. Gravida quis risus quam platea
          </p>
          <Button
            className="landbtn"
            sx={{
              textTransform: "none",
              background: "#359602",
              " &:hover": {
                backgroundColor: "#359602",
              },
            }}
            variant="contained"
            href="#table"
          >
            Let’s start
          </Button>
        </Box>
        <br />
        <br />
        <LandingCarousel />
        <br />
        <Box className="Landingheader">
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            tellus cras arcu in. Nec enim mus suscipit vestibulum.
          </h6>
          <div id="table">
            <LandingTable />
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
