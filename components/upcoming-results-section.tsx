/* eslint-disable @next/next/no-img-element */
import Carousel from "react-multi-carousel"

import { Season } from "@/types/playoffs"

import { Separator } from "./ui/separator"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const order = [3, 1, 2]

interface UpcomingResultsProps {
  playoffs: Season | undefined
  nextSeasonFlag: number | null
  selectedSeason: number
  nextNonActiveMatch: number
}

export default function UpcomingResultsSection(props: UpcomingResultsProps) {
  console.log(props.nextNonActiveMatch)
  return (
    <>
      {props.playoffs !== undefined &&
        (props.playoffs.season === props.selectedSeason &&
        props.nextSeasonFlag !== null ? (
          <>
            <h1 className="text-xl font-semibold">Results</h1>
            <div
              style={{
                display: "grid",
                gridAutoFlow: "column dense",
                gap: ".5rem",
                marginTop: "12rem",
                justifyContent: "center",
                justifyItems: "center",
                alignContent: "flex-end",
                alignItems: "flex-end",
                borderBottom: "1px solid #e5e7eb",
                height: 250,
              }}
            >
              {props.playoffs.results
                .filter((item) => order.includes(item.place))
                .sort((a, b) => order.indexOf(a.place) - order.indexOf(b.place))
                .map((result) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      placeContent: "center",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "center",
                        marginBottom: ".25rem",
                      }}
                    >
                      <img
                        src={`https://mc-heads.net/head/${result.playerData?.uuid}`}
                        height={64}
                        width={64}
                        alt="Player"
                        style={{
                          overflow: "hidden",
                          borderRadius: 9999,
                        }}
                        loading="lazy"
                      />
                    </div>

                    <div
                      style={{
                        width: "4rem",
                        placeContent: "center",
                        display: "flex",
                        borderTopLeftRadius: ".5rem",
                        borderTopRightRadius: ".5rem",
                        marginBottom: -1,
                        height: 200 * (2 - result.place / 2),
                      }}
                      className={
                        result.place === 3
                          ? "bg-amber-800"
                          : result.place === 2
                          ? "bg-gray-300"
                          : "bg-yellow-300"
                      }
                    >
                      <span className="self-end text-white">
                        {result.place}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex flex-col items-center">
              {props.playoffs.results.map((result) => (
                <div key={result.player} className="w-full md:w-1/2">
                  <div className="my-3 flex cursor-pointer items-center rounded-lg border border-gray-300 bg-green-600 p-3 shadow hover:border-green-500 hover:bg-green-400">
                    <div className="w-10 text-lg">#{result.place}</div>
                    <img
                      src={`https://mc-heads.net/head/${result.playerData?.uuid}`}
                      height={64}
                      width={64}
                      alt="Player"
                      className="mr-3 h-11 w-11 overflow-hidden rounded-full shadow-sm"
                      loading="lazy"
                    />
                    <div className="grow">
                      <p className="font-semibold leading-none text-gray-900">
                        {result.playerData?.nickname || "No name"}
                      </p>
                      <p>{result.prize ? `$${result.prize}` : ""}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : props.playoffs.season === props.selectedSeason &&
          props.nextSeasonFlag === null ? (
          props.playoffs.matches[15].participants.length !== 0 ? (
            <>
              <h1 className="mb-2 text-center md:text-left">
                Upcoming Matches
              </h1>
              <Carousel
                responsive={responsive}
                keyBoardControl={true}
                infinite={false}
                arrows={true}
              >
                {props.playoffs.matches
                  .filter(
                    (match) =>
                      match.startTime !== props.nextNonActiveMatch &&
                      match.nextMatchId !== null &&
                      match.state === "SCHEDULED"
                  )
                  .map((match) => (
                    <div className="rounded-lg border border-white pb-4 shadow-lg">
                      <h1 className="pt-4">Round {match.name}</h1>
                      <p>
                        {match.startTime !== null &&
                          `${new Date(
                            match.startTime * 1000
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })} @ ${new Date(
                            match.startTime * 1000
                          ).toLocaleTimeString([], {
                            timeZoneName: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })} `}
                      </p>
                      <Separator className="my-2" />
                      <div className="flex flex-row items-center justify-center gap-4">
                        <h1>{match.participants[0].playerData?.nickname}</h1>
                        <img
                          src={`https://mc-heads.net/head/${match.participants[0].playerData?.uuid}`}
                          width={64}
                          alt="Player"
                          loading="lazy"
                          className="hidden md:block"
                        />
                        <h1 className="my-auto flex justify-center text-2xl font-semibold md:text-4xl">
                          VS
                        </h1>
                        <img
                          src={`https://mc-heads.net/head/${match.participants[1].playerData?.uuid}/left`}
                          width={64}
                          alt="Player"
                          loading="lazy"
                          className="hidden md:block"
                        />
                        <h1>{match.participants[1].playerData?.nickname}</h1>
                      </div>
                    </div>
                  ))}
              </Carousel>
            </>
          ) : (
            <h1>
              Qualifiers still in progress! Stay tuned for schedule once
              Qualifiers have been completed!
            </h1>
          )
        ) : (
          <></>
        ))}
    </>
  )
}
