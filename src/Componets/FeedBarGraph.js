import React from "react";
import axios from "../axios";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { AccContext } from "../Context/OtherContext";
import { GraphContext } from "../Context/GraphContext";
import {
  BarChart,
  Bar,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

function FeedBarGraph() {
  // const [info, setInfo] = React.useState([]);
  // const [showlogin] = React.useContext(AccContext);
  let values = React.useContext(GraphContext);
  let info = values.map((item) => {
    return {
      profit: item.profit,
      drawdown: item.drawdown,
    };
  });
  const BalanceCustomizedLabel = (props) => {
    const { x, y, width, height } = props;
    return (
      <text
        x={x + width / 2}
        y={y + height + 15}
        fill="black"
        textAnchor="middle"
      >
        Profit
      </text>
    );
  };

  const DrawdownCustomizedLabel = (props) => {
    const { x, y, width, height } = props;
    return (
      <text
        x={x + width / 2}
        y={y + height + 15}
        fill="black"
        textAnchor="middle"
      >
        DrawDown
      </text>
    );
  };
  return (
    <ResponsiveContainer width="100%" height={224}>
      <BarChart
        data={[info[info.length - 1]]}
        // margin={{ bottom: 2, right: 10 }}
        // width={600}
        margin={{ bottom: 25 }}
        barCategoryGap={90}
        barGap={50}
      >
        <Tooltip
          cursor={false}
          formatter={(value, name, props) => {
            return [`${value}%`, name];
          }}
        />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="profit" fill="#359602">
          <LabelList content={<BalanceCustomizedLabel />} position="bottom" />
        </Bar>
        <Bar dataKey="drawdown" fill="#E63B3B">
          <LabelList content={<DrawdownCustomizedLabel />} position="bottom" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default FeedBarGraph;
