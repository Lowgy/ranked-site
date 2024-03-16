import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Runner, eloColumns, phasePointsColumns, timeColumns } from "./columns"
import { DataTable } from "./data-table"

async function getEloLeaderboard() {
  const response = await fetch("https://mcsrranked.com/api/leaderboard", {
    cache: "no-cache",
  })
  const data = await response.json()
  return data.data.users as Runner[]
}

async function getPhasePointsLeaderboard() {
  const response = await fetch("https://mcsrranked.com/api/phase-leaderboard", {
    cache: "no-cache",
  })
  const data = await response.json()
  return data.data.users as Runner[]
}

async function getTimeLeaderboard() {
  const response = await fetch(
    "https://mcsrranked.com/api/record-leaderboard?distinct",
    { cache: "no-cache" }
  )
  const data = await response.json()
  let runners = []
  for (let i = 0; i < data.data.length; i++) {
    let runner = { uuid: "", nickname: "", rank: 0, time: 0, season: 0 }
    runner.uuid = data.data[i].user.uuid
    runner.nickname = data.data[i].user.nickname
    runner.rank = data.data[i].rank
    runner.time = data.data[i].time
    runner.season = data.data[i].season
    runners.push(runner)
  }
  return runners as Runner[]
}

export default async function LeaderboardPage() {
  const eloData = await getEloLeaderboard()
  const timeData = await getTimeLeaderboard()
  const phasePointsData = await getPhasePointsLeaderboard()

  return (
    <section className="container grid items-center pb-8 pt-6 md:py-10">
      <h1 className="text-2xl">Leaderboard</h1>
      <Tabs defaultValue="elo">
        <div className="relative">
          <TabsList className="absolute right-0 top-12 hidden w-[200px] grid-cols-3 md:grid md:w-[300px]">
            <TabsTrigger value="elo">Elo</TabsTrigger>
            <TabsTrigger value="time">Time</TabsTrigger>
            <TabsTrigger value="phasePoints">Phase</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="elo">
          <span className="text-gray-500 ">
            Current top 150 ranked player this season.
          </span>
          <TabsList className="mt-2 grid w-full grid-cols-3 md:hidden md:w-[300px]">
            <TabsTrigger value="elo">Elo</TabsTrigger>
            <TabsTrigger value="time">Time</TabsTrigger>
            <TabsTrigger value="phasePoints">Phase</TabsTrigger>
          </TabsList>
          <DataTable columns={eloColumns} data={eloData} />
        </TabsContent>
        <TabsContent value="time">
          <span className="text-gray-500">Top run times for MCSRanked</span>
          <TabsList className="mt-2 grid w-full grid-cols-3 md:hidden md:w-[300px]">
            <TabsTrigger value="elo">Elo</TabsTrigger>
            <TabsTrigger value="time">Time</TabsTrigger>
            <TabsTrigger value="phasePoints">Phase</TabsTrigger>
          </TabsList>
          <DataTable columns={timeColumns} data={timeData} />
        </TabsContent>
        <TabsContent value="phasePoints">
          <span className="text-gray-500">
            Top 100 players with the most phase points this season.
          </span>
          <TabsList className="mt-2 grid w-full grid-cols-3 md:hidden md:w-[300px]">
            <TabsTrigger value="elo">Elo</TabsTrigger>
            <TabsTrigger value="time">Time</TabsTrigger>
            <TabsTrigger value="phasePoints">Phase</TabsTrigger>
          </TabsList>
          <DataTable columns={phasePointsColumns} data={phasePointsData} />
        </TabsContent>
      </Tabs>
    </section>
  )
}
