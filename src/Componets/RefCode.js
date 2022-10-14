import React from "react";
import { Box } from "@mui/material";
import axios from "../axios";
import Refcodein from "../Componets/Refcodein";
import {
  BarChart,
  Bar,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
function RefCode() {
  const [gdata, setGdata] = React.useState({});

  React.useEffect(() => {
    axios
      .get(`/refgraph/`)
      .then((res) => {
        console.log(res.data);
        setGdata(res.data);
        // if (res.data === false) {
        //   setdisable(true);
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const BalanceCustomizedLabel = (props) => {
    const { x, y, width, height } = props;
    return (
      <text x={x + width / 2} y={y} fill="black" textAnchor="middle">
        Banked Payout
      </text>
    );
  };

  const DrawdownCustomizedLabel = (props) => {
    const { x, y, width, height } = props;
    return (
      <text x={x + width / 2} y={y} fill="black" textAnchor="middle">
        Potential Payout
      </text>
    );
  };
  return (
    <div className="PayoutSection">
      <div
        style={{
          marginLeft: "10%",
        }}
      >
        <h3>Referral Code</h3>
        <Refcodein />
      </div>
      <Box
        style={{
          marginTop: "7%",
          height: "50%",
        }}
        className="PayoutBoxlink"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "15%",
          }}
        >
          <ResponsiveContainer width="50%" height={124}>
            <BarChart
              data={[gdata]}
              margin={{ bottom: 15, top: 15 }}
              barCategoryGap={10}
              barGap={70}
            >
              {/* <XAxis dataKey="name" />
            <YAxis /> */}
              <Tooltip
                cursor={false}
                formatter={(value, name, props) => {
                  return [`$${value}`, name];
                }}
              />
              <ReferenceLine y={0} stroke="#000" />
              {/* <Legend /> */}
              <Bar dataKey="banked" fill="#359602">
                <LabelList
                  content={<BalanceCustomizedLabel />}
                  position="top"
                />
              </Bar>
              <Bar dataKey="potential" fill="#216100">
                <LabelList
                  content={<DrawdownCustomizedLabel />}
                  position="top"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <Box>
            <p
              style={{
                width: "65%",
                lineHeight: "23px",
                fontSize: "calc(0.8vw + 1.1vmin)",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus sed
              lacus, tellus sed lacinia sem sagittis, justo, varius. Nisi
              suspendisse molestie dui ultrices bibendum duis donec.
            </p>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default RefCode;
