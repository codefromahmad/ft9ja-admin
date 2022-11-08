import React from "react";
import { Box, Button, Checkbox, CircularProgress } from "@mui/material";
import ClassicCarousel from "../Componets/ClassicCarousel";
import { checkboxClasses } from "@mui/material/Checkbox";
import axios from "../axios";
function Classic() {
  const [size, setSize] = React.useState("");
  const [broker, setBroker] = React.useState("");
  const [payout, setPayout] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const token = localStorage.getItem("access_token");
  const makeAccount = () => {
    console.log(size, broker, payout);
    setLoading(true);
    axios
      .post("/getnewacc/", {
        acc_size: size,
        broker: broker,
        payout: payout,
        typeofaccount: "zuma",
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    if (size && broker && payout && clicked) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [broker, clicked, payout, size]);

  return (
    <Box>
      {/* {token ? (
        <div style={{ float: "right" }}>
          <a href="/dashboards">Dashboard</a>
        </div>
      ) : (
        <div style={{ float: "right" }}>
          <a href="/login">Login</a>
        </div>
      )} */}
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
        <Box className="Landingheader">
          <h1>A Big Title</h1>
          <p className="landp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            varius eu diam et a venenatis quis. Gravida quis risus quam platea
          </p>
          <Button
            className="landbtn"
            sx={{
              background: "#359602",
              " &:hover": {
                backgroundColor: "#359602",
              },
              textTransform: "none",
            }}
            variant="contained"
          >
            Let’s start
          </Button>
        </Box>
        <br />
        <br />
        <ClassicCarousel />
        <br />
        <Box>
          <Box
            sx={{
              width: "100%",
              height: "191px",
              borderTop: "1px solid #E5E5E5",
              borderBottom: "1px solid #E5E5E5",
            }}
            className="sections"
          >
            <Box sx={{ marginLeft: "7%" }}>
              <p className="classicp">(1) Choose Account Size</p>
              <br />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "58%",
                }}
                className="classicbtns"
              >
                <Button
                  onClick={() => {
                    console.log("clicked");
                    setSize("3000");
                  }}
                  variant="contained"
                  sx={{
                    background: size === "3000" ? "#359602" : "#3596021a",
                    color: size === "3000" ? "#fff" : "#000",
                  }}
                >
                  $3000
                </Button>
                <Button
                  onClick={() => {
                    console.log("clicked");
                    setSize("5000");
                  }}
                  variant="contained"
                  sx={{
                    background: size === "5000" ? "#359602" : "#3596021a",
                    color: size === "5000" ? "#fff" : "#000",
                  }}
                >
                  $5000
                </Button>
                <Button
                  onClick={() => {
                    console.log("clicked");
                    setSize("25000");
                  }}
                  variant="contained"
                  sx={{
                    background: size === "25000" ? "#359602" : "#3596021a",
                    color: size === "25000" ? "#fff" : "#000",
                  }}
                >
                  $25,000
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "191px",
              borderTop: "1px solid #E5E5E5",
              borderBottom: "1px solid #E5E5E5",
            }}
            className="sections"
          >
            <Box sx={{ marginLeft: "7%" }}>
              <p className="classicp">(2) Choose a Broker</p>
              <br />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "58%",
                }}
                className="classicbtns"
              >
                <Button
                  onClick={() => {
                    console.log("clicked");
                    setBroker("IC Markets");
                  }}
                  variant="contained"
                  sx={{
                    background:
                      broker === "IC Markets" ? "#359602" : "#3596021a",
                    color: broker === "IC Markets" ? "#fff" : "#000",
                  }}
                >
                  IC Markets
                </Button>
                <Button
                  onClick={() => {
                    console.log("clicked");
                    setBroker("Deriv");
                  }}
                  variant="contained"
                  sx={{
                    background: broker === "Deriv" ? "#359602" : "#3596021a",
                    color: broker === "Deriv" ? "#fff" : "#000",
                  }}
                >
                  Deriv
                </Button>
                <Button
                  onClick={() => {
                    console.log("clicked");
                    setBroker("FXTM");
                  }}
                  variant="contained"
                  sx={{
                    background: broker === "FXTM" ? "#359602" : "#3596021a",
                    color: broker === "FXTM" ? "#fff" : "#000",
                  }}
                >
                  FXTM
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "191px",
              borderTop: "1px solid #E5E5E5",
              borderBottom: "1px solid #E5E5E5",
            }}
            className="sections"
          >
            <Box sx={{ marginLeft: "7%" }}>
              <p className="classicp">(3) Payout Frequent</p>
              <br />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "58%",
                }}
                className="classicbtns"
              >
                <Button
                  onClick={() => {
                    console.log("clicked");
                    setPayout("Monthly");
                  }}
                  sx={{
                    background: payout === "Monthly" ? "#359602" : "#3596021a",
                    color: payout === "Monthly" ? "#fff" : "#000",
                  }}
                  variant="contained"
                >
                  Monthly
                </Button>
                <Button
                  onClick={() => {
                    console.log("clicked");
                    setPayout("Weekly");
                  }}
                  sx={{
                    background: payout === "Weekly" ? "#359602" : "#3596021a",
                    color: payout === "Weekly" ? "#fff" : "#000",
                  }}
                  variant="contained"
                >
                  Weekly
                </Button>
                <Button
                  style={{
                    visibility: "hidden",
                  }}
                  variant="contained"
                >
                  Weekly
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className="agreement">
            {" "}
            <Checkbox
              className="checkbox"
              sx={{
                [`&, &.${checkboxClasses.checked}`]: {
                  color: "#359602",
                },
              }}
              onChange={(e) => {
                setClicked(e.target.checked);
              }}
            />{" "}
            I have read and agreed with the rules and terms
          </Box>
          <br />
          <br />
          <br />
          <Box
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            <Button
              onClick={makeAccount}
              disabled={show}
              className="agreementbtn"
              sx={{
                " &:hover": {
                  backgroundColor: "#359602",
                },
                marginBottom: "10%",
              }}
              variant="contained"
              endIcon={
                loading && (
                  <CircularProgress
                    size={12}
                    sx={{
                      zIndex: 1,
                      color: "white",
                    }}
                  />
                )
              }
            >
              Proceed to Payment
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Classic;