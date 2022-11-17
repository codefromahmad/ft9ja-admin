import React from "react";
import { Box, Button } from "@mui/material";
import LandingCarousel from "../Componets/LandingCarousel";
import LandingTable from "../Componets/LandingTable";
function Home() {
  const token = localStorage.getItem("access_token");
  return (
    <Box>
      <Box className="Landing">
        <Box
          sx={{
            paddingY: 2,
            paddingLeft: 1,
          }}
        >
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
          <h1>Trade up to $50,000</h1>
          <p className="landp">
            Get the Account Size required to become a successful Trader
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
            Thousands of Traders love trading with FT9ja Prop Firm. Here are
            some of their stories.
          </h6>
          <div id="table" className="">
            <LandingTable />
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
