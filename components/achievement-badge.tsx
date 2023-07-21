import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function extractWordByIndex(inputString: string, index: number) {
  let words = inputString
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .split(/\s+/) // Split the string by whitespace characters
  return words[index] || "" // Return the word at the given index or an empty string if the index is out of bounds
}

function extractSeasonNumber(inputString: string) {
  if (typeof inputString !== "string") {
    throw new Error("Input must be a string.")
  }

  let capitalize = inputString.replace(/\b\w/g, (match) => match.toUpperCase())
  return capitalize.slice(0, 8)
}

function extractSeasonPlacement(inputString: string) {
  if (typeof inputString !== "string") {
    throw new Error("Input must be a string.")
  }
  let test = extractWordByIndex(inputString, 2)
  return test.slice(0, 3) + " " + test.slice(3)
}

export default function AchievementBadge(data: any) {
  let formattedSentence = data.data.tag_name.replace(/_/g, " ")
  let season = extractSeasonNumber(formattedSentence)
  let placement = extractSeasonPlacement(formattedSentence).slice(4)
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="relative">
              <Image
                src={
                  placement === "1"
                    ? "/sword.png"
                    : placement === "2"
                    ? "/goldsword.png"
                    : placement === "3"
                    ? "/ironsword.png"
                    : placement === "5"
                    ? "/diamond.png"
                    : placement === "10"
                    ? "/emerald.png"
                    : placement === "50"
                    ? "/redstone.png"
                    : placement === "100"
                    ? "/lapis.png"
                    : "/coal.png"
                }
                alt="Badge"
                height={100}
                width={100}
                className="mr-2"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-center">
              {season}
              <br />
              {placement === "1" || placement === "2" || placement === "3"
                ? `#${placement}`
                : `Top ${placement}`}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}
