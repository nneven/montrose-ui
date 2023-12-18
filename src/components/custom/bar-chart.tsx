"use client";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Information Technology",
    value: 56.28,
  },
  {
    name: "Communication",
    value: 19.62,
  },
  {
    name: "Industrials",
    value: 15.44,
  },
  {
    name: "Consumer Discretionary",
    value: 7.28,
  },
  {
    name: "Health Care",
    value: 0.9,
  },
  {
    name: "Financials",
    value: 0.77,
  },
];

export function SimpleBarChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical" // Set layout to vertical for horizontal bars
        data={data}
        margin={{
          right: 30,
          left: 70,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={(value) => `${value}%`} />
        <YAxis dataKey="name" type="category" />
        <Tooltip formatter={(value) => `${value}%`} />
        {/* <Legend /> */}
        <Bar dataKey="value" fill="#175a92" />
      </BarChart>
    </ResponsiveContainer>
  );
}
