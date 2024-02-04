import { addRank, eloColor, timeFormat } from "@/lib/utils"

export default function StatsTab(data: any) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Total Games</h3>
        <p className="">
          {data.userData.data.statistics.total.playedMatches.ranked}
        </p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Wins (Season)</h3>
        <p className="">{data.userData.data.statistics.season.wins.ranked}</p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Losses (Season)</h3>
        <p className="">{data.userData.data.statistics.season.loses.ranked}</p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Win Rate (Season)</h3>
        <p className="">
          {data.userData.data.statistics.season.wins.ranked !== 0 &&
          data.userData.data.statistics.season.loses.ranked !== 0
            ? `${(
                (data.userData.data.statistics.season.wins.ranked /
                  (data.userData.data.statistics.season.wins.ranked +
                    data.userData.data.statistics.season.loses.ranked)) *
                100
              ).toFixed(2)} %`
            : "N/A"}
        </p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Best Win Streak</h3>
        <p className="">
          {data.userData.data.statistics.total.highestWinStreak.ranked}
        </p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Current Win Streak</h3>
        <p className="">
          {data.userData.data.statistics.season.currentWinStreak.ranked}
        </p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Best Elo</h3>
        <p
          className={
            data.userData.data.seasonResult.highest
              ? `${eloColor(data.userData.data.seasonResult.highest)}`
              : ""
          }
        >
          {data.userData.data.seasonResult.highest ? (
            <>
              {" "}
              {data.userData.data.seasonResult.highest} -{" "}
              {addRank(data.userData.data.seasonResult.highest)}
            </>
          ) : (
            "N/A"
          )}
        </p>
      </div>
      <div className="rounded-lg border-2 border-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">Best Time</h3>
        <p className="">
          {timeFormat(data.userData.data.statistics.total.bestTime.ranked)}
        </p>
      </div>
    </div>
  )
}
