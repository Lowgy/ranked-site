"use client"

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export default function EloChart(data: any) {
  return (
    <ResponsiveContainer width="100%" height={500} className="mt-4">
      <LineChart
        data={data.data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
        className="rounded-lg bg-gray-800 shadow-lg"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="game" />
        <YAxis dataKey="elo" domain={["dataMin", "dataMax"]} />
        <Tooltip labelFormatter={() => ""} />
        <Legend />
        <Line
          type="monotone"
          dataKey="elo"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
