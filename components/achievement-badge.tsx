import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function AchievementBadge(data: any) {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="relative">
              {data.data.id === "playoffsResult" ? (
                <Image
                  src={`/icons/playoffs_${data.data.level}.png`}
                  alt="Badge"
                  height={30}
                  width={30}
                  className="mr-2"
                />
              ) : (
                <Image
                  src={`/icons/season_${data.data.level}.png`}
                  alt="Badge"
                  height={30}
                  width={30}
                  quality={100}
                  className="mr-2"
                />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-center">
              {data.data.id === "seasonResult"
                ? `Season ${data.data.data[0]}`
                : `Season ${data.data.data[0]} Playoffs`}
              <br />
              {data.data.id === "seasonResult"
                ? `Rank #${data.data.data[1]}`
                : `Rank #${data.data.level}`}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}
