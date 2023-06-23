import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Runner, eloColumns, timeColumns } from "./columns"
import { DataTable } from "./data-table"

async function getEloLeaderboard() {
  const response = await fetch("https://mcsrranked.com/api/leaderboard", {
    cache: "no-cache",
  })
  const data = await response.json()
  return data.data.users as Runner[]
}

async function getTimeLeaderboard() {
  const response = await fetch(
    "https://mcsrranked.com/api/record-leaderboard",
    { cache: "no-cache" }
  )
  const data = await response.json()
  let runners = []
  for (let i = 0; i < data.data.length; i++) {
    let runner = { uuid: "", nickname: "", final_time_rank: 0, final_time: 0 }
    runner.uuid = data.data[i].user.uuid
    runner.nickname = data.data[i].user.nickname
    runner.final_time_rank = data.data[i].final_time_rank
    runner.final_time = data.data[i].final_time
    runners.push(runner)
  }
  return runners as Runner[]
}

export default async function LeaderboardPage() {
  const eloData = await getEloLeaderboard()
  const timeData = await getTimeLeaderboard()

  return (
    <section className="container grid items-center pb-8 pt-6 md:py-10">
      <h1 className="text-2xl">Leaderboard</h1>
      <Tabs defaultValue="elo">
        <div className="relative">
          <TabsList className="absolute right-0 top-12 grid w-[300px] grid-cols-2">
            <TabsTrigger value="elo">Elo</TabsTrigger>
            <TabsTrigger value="time">Time</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="elo">
          <span className="text-gray-500">
            Current top 150 ranked player this season.
          </span>
          <DataTable columns={eloColumns} data={eloData} />
        </TabsContent>
        <TabsContent value="time">
          <span className="text-gray-500">Top run times for this season</span>
          <DataTable columns={timeColumns} data={timeData} />
        </TabsContent>
      </Tabs>
    </section>
  )
}
