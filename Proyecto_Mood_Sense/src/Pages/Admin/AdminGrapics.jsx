import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Sun", value: 120 },
  { day: "Mon", value: 150 },
  { day: "Tue", value: 176 },
  { day: "Wed", value: 200 },
  { day: "Thu", value: 180 },
  { day: "Fri", value: 150 },
  { day: "Sat", value: 130 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-2 rounded-md shadow-md">
        <p>${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const EmotionChart = () => {
  return (
    <div className="p-6">
      <h2 className="text-lg font-bold">Total De Emociones</h2>
      <p className="text-sm text-gray-500">
        6 <span className="text-yellow-500">16% 🔼</span>
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8b5cf6"
            strokeWidth={3}
            dot={{ r: 6, fill: "#8b5cf6", strokeWidth: 2, stroke: "#fff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmotionChart;
