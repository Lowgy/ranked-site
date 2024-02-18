import { timeSince } from "@/lib/utils"

import AchievementBadge from "./achievement-badge"
import EloChart from "./elo-chart"
import { Separator } from "./ui/separator"

type Badge = {
  id: string
  date: number
  level: number
  data: any
}

export default function GeneralTab(data: any) {
  return (
    <>
      <div className="hidden md:block">
        <h1>
          Account created: {timeSince(data.userData.data.timestamp.firstOnline)}
        </h1>
        <h1>
          Last played: {timeSince(data.userData.data.timestamp.lastRanked)}
        </h1>
      </div>
      <EloChart data={data.matches} />
      <br className="hidden md:block" />
      <div className="my-4 block md:hidden">
        <h1>
          Account created: {timeSince(data.userData.data.timestamp.firstOnline)}
        </h1>
        <h1>
          Last played: {timeSince(data.userData.data.timestamp.lastRanked)}
        </h1>
      </div>
      {data.userData.data.achievements.display.length !== 0 && (
        <>
          <Separator />
          <div className="mx-auto mt-4">
            <h1 className="text-2xl">Achievements</h1>
            <div className="mt-2 flex flex-row justify-center">
              {data.userData.data.achievements.display.map(
                (badge: Badge) =>
                  (badge.id === "seasonResult" ||
                    badge.id === "playoffsResult") && (
                    <AchievementBadge key={badge.id} data={badge} />
                  )
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
