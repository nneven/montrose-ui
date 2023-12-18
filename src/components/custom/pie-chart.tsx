"use client";

import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "United States", value: 53.76 },
  { name: "China", value: 12.35 },
  { name: "Japan", value: 9.64 },
  { name: "Taiwan", value: 7.86 },
  { name: "France", value: 2.97 },
  { name: "Other", value: 13.42 },
];

const COLORS = [
  "#19196f",
  "#153d81",
  "#175a92",
  "#0a9db0",
  "#0ebcc3",
  "#00e6d7",
];

export function SimplePieChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          outerRadius={120}
          fill="#8884d8"
          label={({ name }) => name}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
      </PieChart>
    </ResponsiveContainer>
  );
}
