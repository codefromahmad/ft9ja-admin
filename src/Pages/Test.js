import { Button } from "@mui/material";
import React from "react";

function Test() {
  return (
    <div
      style={{
        border: " 1px solid rgba(0, 0, 0, 0.8)",
        width: "750px",
        height: "256px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div>
        <p style={{ width: "259px", fontSize: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <Button variant={"outlined"}>Download</Button>
      </div>
      <div
        style={{
          background: "#D9D9D9",
          width: "297px",
          height: "166px",
        }}
      ></div>
    </div>
  );
}

export default Test;
