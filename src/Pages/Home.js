import React from "react";
import { Box, Button } from "@mui/material";
import LandingCarousel from "../Componets/LandingCarousel";
import LandingTable from "../Componets/LandingTable";
function Home() {
  const token = localStorage.getItem("access_token");
  return (
    <Box>
      <Box className="Landing">
        <Box sx={{
          paddingY:2,
          paddingLeft:1,
        }}>
          {token ? (
            <Button
              className="Btn"
              sx={{
                position: "absolute",
                float: "right",
                fontSize: 18,
                textTransform: "none",
                background: "#359602",
                " &:hover": {
                  backgroundColor: "#359602",
                },
              }}
              variant="contained"
              href="/dashboards"
            >
              Dashboard
            </Button>
          ) : (
            <Button
              className="Btn"
              sx={{
                float: "right",
                fontSize: 18,
                textTransform: "none",
                background: "#359602",
                " &:hover": {
                  backgroundColor: "#359602",
                },
              }}
              variant="contained"
              href="/login"
            >
              Login
            </Button>
          )}
        </Box>
        <Box
          sx={{
            fontSize: 20,
          }}
          className="Landingheader"
        >
          <h1>A Big Title</h1>
          <p className="landp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            varius eu diam et a venenatis quis. Gravida quis risus quam platea
          </p>
          <Button
            className="landbtn"
            sx={{
              fontSize: 20,
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
