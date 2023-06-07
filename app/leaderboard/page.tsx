import { Runner, columns } from "./columns"
import { DataTable } from "./data-table"

async function getLeaderboard() {
  const response = await fetch("https://mcsrranked.com/api/leaderboard")
  const data = await response.json()
  return data.data.users as Runner[]
}

export default async function LeaderboardPage() {
  const data = await getLeaderboard()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-2xl">Leaderboard</h1>
      <DataTable columns={columns} data={data} />
    </section>
  )
}
