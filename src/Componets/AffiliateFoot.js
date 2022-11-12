import { Button } from "@mui/material";
import React from "react";

function AffiliateFoot() {
  return (
    <div
      style={{
        border: " 1px solid rgba(0, 0, 0, 0.8)",
        borderRadius: "10px",
        width: "70%",
        height: "256px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0px 25px",
      }}
      className="AffiliateFoot"
    >
      <div>
        <p
          className="AffiliateFootp"
          style={{ width: "100%", fontSize: "16px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <Button
          sx={{
            width: "50%",
            background: "#359602",
            color: "white",
            height: "45px",
            borderRadius: "5px",
            "&:hover": {
              background: "#359602",
            },
          }}
          variant={"outlined"}
        >
          Download
        </Button>
      </div>
      <div
        style={{
          background: "#D9D9D9",
          width: "40%",
          height: "70%",
        }}
        className="AffiliateFootblank"
      ></div>
    </div>
  );
}

export default AffiliateFoot;