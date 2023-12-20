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
    value: 34.87,
  },
  {
    year: "2020",
    value: 48.63,
  },
  {
    year: "2021",
    value: 6.85,
  },
  {
    year: "2022",
    value: -37.96,
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
        <Tooltip formatter={(value) => [`${value}%`]} />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="value" fill="#175a92">
          <LabelList
            dataKey="value"
            position="top"
            formatter={(value: number) => `${value}%`}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
