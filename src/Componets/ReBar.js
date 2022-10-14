import React from "react";
import axios from "../axios";
import { AccContext } from "../Context/OtherContext";
import {
  BarChart,
  Bar,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
function ReBar() {
  const [info, setInfo] = React.useState([]);
  const { values, values2 } = React.useContext(AccContext);
  const [showlogin, setShowlogin] = values;
  const [setShowType] = values2;
  React.useEffect(
    () => {
      axios
        .post("/getdrawdownloss/", { number: showlogin })
        .then((res) => {
          console.log([res.data]);
          setInfo([res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // }
    [showlogin]
  );

  const BalanceCustomizedLabel = (props) => {
    console.log(props);
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
    console.log(props);
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
    <ResponsiveContainer width="90%" height={224}>
      <BarChart
        data={info}
        margin={{ bottom: 25 }}
        barCategoryGap={70}
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

export default ReBar;
