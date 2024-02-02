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

interface EloChartProps {
  data?: EloData[]
}

type EloData = {
  elo: number
}

export default function EloChart(data: EloChartProps) {
  console.log(data.data?.length)
  return (
    <>
      {data.data?.length === 0 ? (
        <div className="mt-4 flex h-[500] w-full items-center justify-center p-24">
          <h1 className="font-bold">No recent Elo data to display!</h1>
        </div>
      ) : (
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
      )}
    </>
  )
}
