/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { TwitchEmbed } from "react-twitch-embed"
import { Matches } from "types/playoffs"

import { addRank, eloColor, timeFormat } from "@/lib/utils"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

interface BracketMatchesProps {
  matches: Matches[]
  nextNonActiveMatch: number
}

export default function BracketMatches(props: BracketMatchesProps) {
  return (
    <>
      {props.matches.map((match) =>
        match.state === "ACTIVE" ? (
          <div className="flex flex-col md:w-auto md:flex-row md:gap-x-4">
            <Card className="rounded-lg border-2 border-green-400 md:w-1/2">
              <CardTitle className="mt-10 text-center">
                {match.name} - LIVE🔴
              </CardTitle>
              <CardContent>
                <div className="flex justify-between space-x-4 p-4 text-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={`https://mc-heads.net/body/${match.participants[0].playerData?.uuid}`}
                      alt="Players skin"
                      width={100}
                      loading="lazy"
                      className="hidden md:block"
                    />
                    <img
                      src={`https://mc-heads.net/avatar/${match.participants[0].playerData?.uuid}/75`}
                      alt="Players skin"
                      loading="lazy"
                      className="block md:hidden"
                    />
                    <div className="mt-3">
                      <h1>{match.participants[0].playerData?.nickname}</h1>
                      <h1
                        className={`${eloColor(
                          match.participants[0].playerData?.seasonEloRate
                        )}`}
                      >
                        {`${
                          match.participants[0].playerData?.seasonEloRate
                        } - ${addRank(
                          match.participants[0].playerData?.seasonEloRate
                        )}`}
                      </h1>
                      <h1>
                        {timeFormat(
                          match.participants[0].playerData?.personalBest
                        )}
                      </h1>
                    </div>
                  </div>
                  <h1 className="my-auto flex justify-center text-2xl font-semibold md:text-4xl">
                    VS
                  </h1>
                  <div>
                    <img
                      src={`https://mc-heads.net/body/${match.participants[1].playerData?.uuid}/left`}
                      alt="Players skin"
                      width={100}
                      loading="lazy"
                      className="hidden md:block"
                    />
                    <img
                      src={`https://mc-heads.net/avatar/${match.participants[1].playerData?.uuid}/75`}
                      alt="Players skin"
                      loading="lazy"
                      className="block md:hidden"
                    />
                    <div className="mt-3">
                      <h1>{match.participants[1].playerData?.nickname}</h1>
                      <h1
                        className={`${eloColor(
                          match.participants[1].playerData?.seasonEloRate
                        )}`}
                      >
                        {`${
                          match.participants[1].playerData?.seasonEloRate
                        } - ${addRank(
                          match.participants[1].playerData?.seasonEloRate
                        )}`}
                      </h1>
                      <h1>
                        {timeFormat(
                          match.participants[1].playerData?.personalBest
                        )}
                      </h1>
                    </div>
                  </div>
                </div>
                <Link
                  href="http://twitch.tv/feinberg"
                  target="_blank"
                  className="hover:green-500 text-green-400 hover:underline md:hidden"
                >
                  Watch Live
                </Link>
              </CardContent>
            </Card>
            <TwitchEmbed
              channel="Feinberg"
              autoplay
              withChat={false}
              darkMode
              hideControls
              className="mt-2 hidden md:block"
            />
          </div>
        ) : match.state !== "ACTIVE" &&
          match.state !== "DONE" &&
          match.startTime === props.nextNonActiveMatch &&
          match.participants.length !== 0 ? (
          <>
            {" "}
            <Card className="w-full rounded-lg border-2 border-green-400">
              <CardTitle className="mt-10 text-center">
                {`UP NEXT @ ${new Date(
                  match.startTime * 1000
                ).toLocaleTimeString([], {
                  timeZoneName: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
                <br />
                {match.name}
              </CardTitle>
              <CardContent>
                <div className="flex justify-between space-x-4 p-4 text-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={`https://mc-heads.net/body/${match.participants[0].playerData?.uuid}`}
                      alt="Players skin"
                      width={100}
                      loading="lazy"
                      className="hidden md:block"
                    />
                    <img
                      src={`https://mc-heads.net/avatar/${match.participants[0].playerData?.uuid}/75`}
                      alt="Players skin"
                      loading="lazy"
                      className="block md:hidden"
                    />
                    <div className="mt-3">
                      <h1>{match.participants[0].playerData?.nickname}</h1>
                      <h1
                        className={`${eloColor(
                          match.participants[0].playerData?.seasonEloRate
                        )}`}
                      >
                        {`${
                          match.participants[0].playerData?.seasonEloRate
                        } - ${addRank(
                          match.participants[0].playerData?.seasonEloRate
                        )}`}
                      </h1>
                      <h1>
                        {timeFormat(
                          match.participants[0].playerData?.personalBest
                        )}
                      </h1>
                      <h1>{timeFormat(match.participants[0].personal_best)}</h1>
                    </div>
                  </div>
                  <h1 className="my-auto flex justify-center text-2xl font-semibold md:text-4xl">
                    VS
                  </h1>
                  <div>
                    <img
                      src={`https://mc-heads.net/body/${match.participants[1].playerData?.uuid}/left`}
                      alt="Players skin"
                      width={100}
                      loading="lazy"
                      className="hidden md:block"
                    />
                    <img
                      src={`https://mc-heads.net/avatar/${match.participants[1].playerData?.uuid}/75`}
                      alt="Players skin"
                      loading="lazy"
                      className="block md:hidden"
                    />
                    <div className="mt-3">
                      <h1>{match.participants[1].playerData?.nickname}</h1>
                      <h1
                        className={`${eloColor(
                          match.participants[1].playerData?.seasonEloRate
                        )}`}
                      >
                        {`${
                          match.participants[1].playerData?.seasonEloRate
                        } - ${addRank(
                          match.participants[1].playerData?.seasonEloRate
                        )}`}
                      </h1>
                      <h1>
                        {timeFormat(
                          match.participants[1].playerData?.personalBest
                        )}
                      </h1>
                      <h1>{timeFormat(match.participants[1].playerData?.personalBest)}</h1>
                    </div>
                  </div>
                </div>
                <Link
                  href="http://twitch.tv/feinberg"
                  target="_blank"
                  className="hover:green-500 text-green-400 hover:underline md:hidden"
                >
                  Watch Live
                </Link>
              </CardContent>
            </Card>
          </>
        ) : (
          ""
        )
      )}
    </>
  )
}
