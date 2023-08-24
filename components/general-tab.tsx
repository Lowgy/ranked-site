import { timeSince } from "@/lib/utils"

import AchievementBadge from "./achievement-badge"
import EloChart from "./elo-chart"
import { Separator } from "./ui/separator"

type Badge = {
  achieve_type: number
  tag_name: string
}

export default function GeneralTab(data: any) {
  return (
    <>
      <div className="hidden md:block">
        <h1>Account created: {timeSince(data.userData.data.created_time)}</h1>
        <h1>Last played: {timeSince(data.userData.data.latest_time)}</h1>
      </div>
      <EloChart data={data.matches} />
      <br className="hidden md:block" />
      <div className="my-4 block md:hidden">
        <h1>Account created: {timeSince(data.userData.data.created_time)}</h1>
        <h1>Last played: {timeSince(data.userData.data.latest_time)}</h1>
      </div>
      <Separator />
      <div className="mx-auto mt-4">
        <h1 className="text-2xl">Achievements</h1>
        <div className="mt-2 flex flex-row justify-center">
          {data.userData.data.achievements.map((badge: Badge) => (
            <AchievementBadge data={badge} />
          ))}
        </div>
      </div>
    </>
  )
}
