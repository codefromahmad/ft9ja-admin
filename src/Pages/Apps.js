import React from "react";
import { Box, CssBaseline } from "@mui/material";
import AppsNav from "../Componets/AppsNav";

import { AccProvider } from "../Context/OtherContext";
import PipCal from "../Componets/PipCal";
import TalentBonus from "../Componets/TalentBonus";
import ProfitSplit from "../Componets/ProfitSplit";
import DrawdownCalc from "../Componets/DrawdownCalc";
import CompoundCal from "../Componets/CompoundCal";
import MainNav from "../Componets/MainNav";
import { useMediaQuery } from "@mui/material";

function Apps() {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <AccProvider>
      <div>
        <header>
          <MainNav />
        </header>
        <br />
        <CssBaseline />
        <PipCal />
        <br />
        <TalentBonus />
        <br />
        <ProfitSplit />
        <br />
        <DrawdownCalc />
        <br />
        <CompoundCal />
      </div>
    </AccProvider>
  );
}

export default Apps;