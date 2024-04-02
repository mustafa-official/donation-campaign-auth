import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useDataLoad from "../Hooks/useDataLoad";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const { data: mainData } = useDataLoad();
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ];
  console.log(mainData);
  const COLORS = ["#0088FE", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Helmet>
        <title>Campaign | Statistics</title>
      </Helmet>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
