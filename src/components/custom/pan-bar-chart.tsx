"use client";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    year: "2019",
    return: 34.87,
    benchmark: 35.67,
  },
  {
    year: "2020",
    return: 48.63,
    benchmark: 49.15,
  },
  {
    year: "2021",
    return: 6.85,
    benchmark: 7.55,
  },
  {
    year: "2022",
    return: -37.96,
    benchmark: -37.93,
  },
];

export function PanBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          left: -20,
          top: 20,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="year" />
        <YAxis type="number" />
        <Tooltip formatter={(value) => `${value}%`} />
        <ReferenceLine y={0} stroke="#000" />
        <Legend />
        <Bar dataKey="return" fill="#175a92">
          <LabelList
            dataKey="return"
            position="bottom"
            formatter={(value: number) => `${value}%`}
            fontSize={8}
          />
        </Bar>
        <Bar dataKey="benchmark" fill="#00e6d7">
          <LabelList
            dataKey="benchmark"
            position="bottom"
            formatter={(value: number) => `${value}%`}
            fontSize={8}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
