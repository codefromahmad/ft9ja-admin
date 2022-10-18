import React from "react";
import { Box, TextField, FormControl } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import axios from "../axios";
function ProfileAccountDetails() {
  const [acc, setAcc] = React.useState([]);
  React.useEffect(() => {
    axios.get("/getaccdetails/").then((res) => {
      setAcc(res.data);
    });
  }, []);
  return (
    <Box
      sx={{
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          fontSize: "calc(0.9rem + 0.9vw) !important",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          minHeight: "55px",
          backgroundColor: "white",
          borderRadius: "5px 5px 0px 0px",
          lineHeight: "60px",
          fontWeight: 494,
        }}
      >
        Account Details
      </Box>
      <Carousel
        height={542}
        sx={{
          backgroundColor: "white",
        }}
        autoPlay={false}
        swipeable={false}
        draggable={false}
        // indicators={false}
        navButtonsAlwaysVisible={false}
        navButtonsProps={{
          style: {
            backgroundColor: "rgba(33, 97, 0, 0.2)",
          },
        }}
        keyBoardControl={true}
        animation="slide"
      >
        {acc.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                marginTop: "5%",
                width: "45%",
                marginLeft: "auto",
                marginRight: "auto",
                boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
            >
              <Box className="AccHead">Account {index + 1}</Box>
              <FormControl
                sx={{
                  width: "-webkit-fill-available",
                  padding: "0% 7% 0% 7%",
                  marginTop: "5%",
                  fontSize: "calc(0.5rem + 0.5vw) !important",
                  // marginLeft: "auto",
                  // marginRight: "auto",
                  // height: "auto",
                  // border: "1px solid ",
                }}
                variant="standard"
              >
                <label>Platform </label>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={item.acc.platform}
                  sx={{
                    "& .MuiInputBase-input": {
                      // border: "1px solid #ced4da",

                      background: "#FFFFFF",

                      border: "0.5px solid rgba(0, 0, 0, 0.2)",
                      boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                      borderRadius: "5px",
                      height: "13px",
                      fontSize: "calc(0.5rem + 0.5vw) !important",
                    },
                  }}
                />
                <br />
                <label>Login </label>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={item.acc.number}
                  sx={{
                    "& .MuiInputBase-input": {
                      // border: "1px solid #ced4da",

                      background: "#FFFFFF",
                      border: "0.5px solid rgba(0, 0, 0, 0.2)",
                      boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                      borderRadius: "5px",
                      height: "13px",
                      fontSize: "calc(0.5rem + 0.5vw) !important",
                    },
                  }}
                />
                <br />
                <label>Server </label>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={item.acc.broker}
                  sx={{
                    "& .MuiInputBase-input": {
                      // border: "1px solid #ced4da",

                      background: "#FFFFFF",
                      border: "0.5px solid rgba(0, 0, 0, 0.2)",
                      boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                      borderRadius: "5px",
                      height: "13px",
                      fontSize: "calc(0.5rem + 0.5vw) !important",
                    },
                  }}
                />
                <br />
                <label>Account size </label>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={item.acc.acc_size}
                  sx={{
                    "& .MuiInputBase-input": {
                      // border: "1px solid #ced4da",

                      background: "#FFFFFF",
                      border: "0.5px solid rgba(0, 0, 0, 0.2)",
                      boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                      borderRadius: "5px",
                      height: "13px",
                      fontSize: "calc(0.5rem + 0.5vw) !important",
                    },
                  }}
                />
                <br />
                <br />
              </FormControl>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default ProfileAccountDetails;
