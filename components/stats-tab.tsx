import { addRank, eloColor, timeFormat } from "@/lib/utils"

export default function StatsTab(data: any) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Total Games</h3>
        <p className="">{data.userData.data.total_played}</p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Wins (Season)</h3>
        <p className="">{data.userData.data.records[2].win}</p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Losses (Season)</h3>
        <p className="">{data.userData.data.records[2].lose}</p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Win Rate (Season)</h3>
        <p className="">
          {(
            (data.userData.data.records[2].win /
              (data.userData.data.records[2].win +
                data.userData.data.records[2].lose +
                data.userData.data.records[2].draw)) *
            100
          ).toFixed(2)}{" "}
          %
        </p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Best Win Streak</h3>
        <p className="">{data.userData.data.highest_winstreak}</p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Current Win Streak</h3>
        <p className="">{data.userData.data.current_winstreak}</p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Best Elo</h3>
        <p className={`${eloColor(data.userData.data.best_elo_rate)}`}>
          {data.userData.data.best_elo_rate} -{" "}
          {addRank(data.userData.data.best_elo_rate)}
        </p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Best Time</h3>
        <p className="">{timeFormat(data.userData.data.best_record_time)}</p>
      </div>
    </div>
  )
}
