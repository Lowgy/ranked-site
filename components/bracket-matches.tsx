/* eslint-disable @next/next/no-img-element */
import { TwitchEmbed } from "react-twitch-embed"
import { Matches } from "types/playoffs"

import { addRank, eloColor, timeFormat } from "@/lib/utils"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

interface BracketMatchesProps {
  matches: Matches[]
  nextNonActiveMatch: string
}

export default function BracketMatches(props: BracketMatchesProps) {
  return (
    <>
      {props.matches.map((match) =>
        match.state === "ACTIVE" ? (
          <>
            <Card className="w-1/2 rounded-lg border-2 border-green-400">
              <CardTitle className="mt-10 text-center">
                Round 1 - Match 1
              </CardTitle>
              <CardContent>
                <div className="flex justify-between space-x-4 p-4 text-center">
                  <div>
                    <img
                      src={`https://mc-heads.net/body/${match.participants[0].id}`}
                      alt="Players skin"
                      width={120}
                      height={720}
                      loading="lazy"
                    />
                    <div className="mt-3">
                      <h1>{match.participants[0].name}</h1>
                      <h1
                        className={`${eloColor(
                          match.participants[0]?.season_elo
                        )}`}
                      >
                        {match.participants[0]?.season_elo}
                      </h1>
                      <h1>{timeFormat(match.participants[0].personal_best)}</h1>
                    </div>
                  </div>
                  <h1 className="my-auto flex justify-center text-4xl font-semibold">
                    VS
                  </h1>
                  <div>
                    <img
                      src={`https://mc-heads.net/body/${match.participants[1].id}/left`}
                      alt="Players skin"
                      width={120}
                      height={720}
                      loading="lazy"
                    />
                    <div className="mt-3">
                      <h1>{match.participants[1].name}</h1>
                      <h1
                        className={`${eloColor(
                          match.participants[1]?.season_elo
                        )}`}
                      >
                        {match.participants[1]?.season_elo}
                      </h1>
                      <h1>{timeFormat(match.participants[1].personal_best)}</h1>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <TwitchEmbed
              channel="Feinberg"
              autoplay
              withChat={false}
              darkMode
              hideControls
              className="mt-2"
            />
          </>
        ) : match.state !== "ACTIVE" &&
          match.state !== "DONE" &&
          match.startTime === props.nextNonActiveMatch &&
          match.participants.length !== 0 ? (
          <>
            {" "}
            <Card className="w-full rounded-lg border-2 border-green-400">
              <CardTitle className="mt-10 text-center">
                {`UP NEXT @ ${new Date(
                  parseInt(match.startTime) * 1000
                ).toLocaleTimeString([], {
                  timeZoneName: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
                <br />
                {`Round - ${match.tournamentRoundText} `}
              </CardTitle>
              <CardContent>
                <div className="flex justify-between space-x-4 p-4 text-center">
                  <div>
                    <img
                      src={`https://mc-heads.net/body/${match.participants[0]?.id}`}
                      alt="Players skin"
                      width={120}
                      height={720}
                      loading="lazy"
                    />
                    <div className="mt-3">
                      <h1>{match.participants[0]?.name}</h1>
                      <h1 className={`${eloColor(match.participants[0]?.season_elo)}`}>
                        {`${match.participants[0]?.season_elo} - ${addRank(match.participants[0]?.season_elo || 0)}`}
                      </h1>
                      <h1>
                        {timeFormat(match.participants[0]?.personal_best)}
                      </h1>
                    </div>
                  </div>
                  <h1 className="my-auto flex justify-center text-4xl font-semibold">
                    VS
                  </h1>
                  <div>
                    <img
                      src={`https://mc-heads.net/body/${match.participants[1]?.id}/left`}
                      alt="Players skin"
                      width={120}
                      height={720}
                      loading="lazy"
                    />
                    <div className="mt-3">
                      <h1>{match.participants[1]?.name}</h1>
                      <h1 className={`${eloColor(match.participants[1]?.season_elo)}`}>
                        {`${match.participants[1]?.season_elo} - ${addRank(match.participants[1]?.season_elo || 0)}`}
                      </h1>
                      <h1>
                        {timeFormat(match.participants[1]?.personal_best)}
                      </h1>
                    </div>
                  </div>
                </div>
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
