import React from "react";
import { Box, CssBaseline } from "@mui/material";
import AccountBtn from "../Componets/AccountBtn";
import MainNav from "../Componets/MainNav";
import AccountDetails from "../Componets/AccountDetails";
import FeedSection from "../Componets/FeedSection";
import Accounts from "../Componets/Accounts";
import { AccProvider } from "../Context/OtherContext";
function ZumaDashboard() {
  return (
    <AccProvider>
      <div>
        <header>
          <MainNav />
        </header>
        <br />
        <CssBaseline />
        <AccountBtn />
        <br />
        <Box>
          <Box
            sx={{ display: "flex", flexWrap: "nowrap", width: "100%" }}
            className="dashmain addPadding"
          >
            <Accounts />
            <AccountDetails />
          </Box>
          <br />
          <FeedSection />
        </Box>
      </div>
    </AccProvider>
  );
}

export default ZumaDashboard;