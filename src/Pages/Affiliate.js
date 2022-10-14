import React from "react";
import RefCode from "../Componets/RefCode";
import AffiliateHIW from "../Componets/AffiliateHIW";
import { Box } from "@mui/material";
import RefTable from "../Componets/RefTable";
import AffiliateNav from "../Componets/AffiliateNav";
import AffiliateFoot from "../Componets/AffiliateFoot";
import { AccProvider } from "../Context/OtherContext";
function Affiliate() {
  return (
    <AccProvider>
      <header>
        <AffiliateNav />
      </header>
      <Box
        sx={{
          height: "100%",
          background: "#FEFEFE",
          boxShadow: "0px 0px 4px rgba(29, 67, 83, 0.05)",
          width: "85%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <RefCode />

        <div
          style={{
            border: "1px solid rgba(53, 150, 2, 0.5)",
            width: "70%",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "5%",
            marginTop: "9%",
          }}
        ></div>
        <AffiliateHIW />
        <div
          style={{
            border: "1px solid rgba(53, 150, 2, 0.5)",
            width: "70%",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "9%",
            marginBottom: "9%",
          }}
        ></div>
        <RefTable />
        <br />
        <br />
        <br />
        <br />
        <AffiliateFoot />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </AccProvider>
  );
}

export default Affiliate;
