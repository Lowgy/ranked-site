"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Match,
  SingleEliminationBracket,
  createTheme,
} from "@g-loot/react-tournament-brackets"
import { motion } from "framer-motion"
import { CalendarCheck, Trophy } from "lucide-react"
import Carousel from "react-multi-carousel"
import { TwitchEmbed } from "react-twitch-embed"
import { Matches } from "types/playoffs"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { playoffs } from "../data/playoffs"
import "react-multi-carousel/lib/styles.css"
import { addRank, eloColor, nextMatchCheck, timeFormat } from "@/lib/utils"

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

const RankedTheme = createTheme({
  matchBackground: { wonColor: "#1d2232", lostColor: "#1d2232" },
  score: {
    background: { wonColor: "#22c55e" },
  },
})

export default function PlayoffsPage() {
  const [seasons, setSeasons] = useState<number[]>([])
  const [selectedSeason, setSelectedSeason] = useState<number>(2)
  const [matches, setMatches] = useState<Matches[]>([])
  const [nextNonActiveMatch, setNextNonActiveMatch] = useState("")

  const handleSeasonSelection = (selected: string) => {
    setSelectedSeason(parseInt(selected))
  }

  const order = [3, 1, 2]

  useEffect(() => {
    for (let i = 0; i < playoffs.length; i++) {
      if (playoffs[i].currentSeason) {
        setMatches(playoffs[i].matches)
        setNextNonActiveMatch(nextMatchCheck(playoffs[i].matches))
      }
    }
    const seasonDropdown = playoffs.map((match) => match.seasonId)
    setSeasons(seasonDropdown)
  }, [])

  useEffect(() => {
    for (let i = 0; i < playoffs.length; i++) {
      if (playoffs[i].seasonId === selectedSeason) {
        setMatches(playoffs[i].matches)
        setNextNonActiveMatch(nextMatchCheck(playoffs[i].matches))
      }
    }
  }, [selectedSeason])

  return (
    <section className="container grid items-center pb-8 pt-6 md:py-10">
      <div className="flex flex-row items-center gap-4">
        <h1 className="text-2xl">Ranked Playoffs - Season {selectedSeason}</h1>
        <Link
          href="https://docs.google.com/document/d/1tFiKHls6gRBDiEdAhzSYNi9ljy3IFF3dZ5c6XltkDmI/edit#heading=h.vbcr8n5tsf5w"
          target="_blank"
          className="mt-1 text-green-400 hover:underline"
        >
          What is it?
        </Link>
      </div>
      <Tabs defaultValue="bracket">
        <div className="relative">
          <TabsList className="absolute -top-10 right-0 z-10 hidden w-[200px] grid-cols-2 md:grid md:w-[300px]">
            <TabsTrigger value="bracket">
              <Trophy className="mr-1 h-4 w-4" />
              Bracket
            </TabsTrigger>
            <TabsTrigger value="match">
              <CalendarCheck className="mr-1 h-4 w-4" />
              Matches
            </TabsTrigger>
          </TabsList>
          <div className="flex justify-end">
            <Select onValueChange={handleSeasonSelection}>
              <SelectTrigger className="mt-1 w-[300px]">
                <SelectValue placeholder="Current Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {seasons.map((value) => (
                    <SelectItem value={value.toString()}>
                      Season {value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <TabsList className="mt-2 grid w-full grid-cols-2 md:hidden md:w-[300px]">
          <TabsTrigger value="bracket">Bracket</TabsTrigger>
          <TabsTrigger value="match">Matches</TabsTrigger>
        </TabsList>
        <TabsContent value="bracket">
          {matches.length !== 0 && (
            <SingleEliminationBracket
              matches={matches}
              matchComponent={Match}
              theme={RankedTheme}
            />
          )}
        </TabsContent>
        <TabsContent value="match">
          <div className="flex flex-row space-x-4">
            {matches.map((match) =>
              match.state === "ACTIVE" ? (
                <>
                  <Card className="w-1/2 rounded-lg border-2 border-green-400">
                    <CardTitle className="mt-10 text-center">
                      Round 1 - Match 1
                    </CardTitle>
                    <CardContent>
                      <div className="flex justify-between space-x-4 p-4 text-center">
                        <div>
                          <Image
                            src={`https://mc-heads.net/body/${match.participants[0].name}`}
                            alt="Players skin"
                            width={120}
                            height={720}
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
                            <h1>
                              {timeFormat(match.participants[0].personal_best)}
                            </h1>
                          </div>
                        </div>
                        <h1 className="my-auto flex justify-center text-4xl font-semibold">
                          VS
                        </h1>
                        <div>
                          <Image
                            src={`https://mc-heads.net/body/${match.participants[1].name}/left`}
                            alt="Players skin"
                            width={120}
                            height={720}
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
                            <h1>
                              {timeFormat(match.participants[1].personal_best)}
                            </h1>
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
                match.startTime === nextNonActiveMatch ? (
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
                          <Image
                            src={`https://mc-heads.net/body/${match.participants[0].name}`}
                            alt="Players skin"
                            width={120}
                            height={720}
                          />
                          <div className="mt-3">
                            <h1>{match.participants[0].name}</h1>
                            <h1 className={`${eloColor(2000)}`}>
                              {`2000 - ${addRank(2000)}`}
                            </h1>
                            <h1>
                              {timeFormat(match.participants[0].personal_best)}
                            </h1>
                          </div>
                        </div>
                        <h1 className="flex justify-center">VS</h1>
                        <div>
                          <Image
                            src={`https://mc-heads.net/body/${match.participants[1].name}/left`}
                            alt="Players skin"
                            width={120}
                            height={720}
                          />
                          <div className="mt-3">
                            <h1>{match.participants[1].name}</h1>
                            <h1 className={`${eloColor(2000)}`}>
                              {`2000 - ${addRank(2000)}`}
                            </h1>
                            <h1>
                              {timeFormat(match.participants[1].personal_best)}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                " "
              )
            )}
          </div>
          <Separator className="my-4" />
          <div className="container mx-auto text-center">
            {playoffs
              .filter(
                (playoff) =>
                  playoff.seasonId === selectedSeason && !playoff.currentSeason
              )
              .map((playoff) => (
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
                  {playoff.results
                    .filter((item) => order.includes(item.place))
                    .sort(
                      (a, b) => order.indexOf(a.place) - order.indexOf(b.place)
                    )
                    .map((result) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          placeContent: "center",
                        }}
                      >
                        <motion.div
                          style={{
                            alignSelf: "center",
                            marginBottom: ".25rem",
                          }}
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: {
                              opacity: 1,
                              transition: {
                                delay: 1 + (2 - result.place + 2),
                                duration: 0.75,
                              },
                            },
                            hidden: { opacity: 0 },
                          }}
                        >
                          <Image
                            src={`https://mc-heads.net/head/${result.name}`}
                            height={64}
                            width={64}
                            alt="Player"
                            style={{
                              overflow: "hidden",
                              borderRadius: 9999,
                            }}
                          />
                        </motion.div>

                        <motion.div
                          style={{
                            width: "4rem",
                            placeContent: "center",
                            display: "flex",
                            borderTopLeftRadius: ".5rem",
                            borderTopRightRadius: ".5rem",
                            marginBottom: -1,
                          }}
                          className={
                            result.place === 3
                              ? "bg-amber-800"
                              : result.place === 2
                              ? "bg-gray-300"
                              : "bg-yellow-300"
                          }
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: {
                              height: 200 * (2 - result.place / 2),
                              opacity: 1,
                              transition: {
                                delay: 1 + 2 - result.place,
                                duration: 2,
                                ease: "backInOut",
                              },
                            },
                            hidden: { opacity: 0, height: 0 },
                          }}
                        >
                          <span className="self-end text-white">
                            {result.place}
                          </span>
                        </motion.div>
                      </div>
                    ))}
                </div>
              ))}
            {playoffs
              .filter(
                (playoff) =>
                  playoff.seasonId === selectedSeason && playoff.currentSeason
              )
              .map(() => (
                <>
                  <h1 className="mb-2 text-left">Upcoming Matches</h1>
                  <Carousel
                    responsive={responsive}
                    keyBoardControl={true}
                    infinite={false}
                    arrows={true}
                  >
                    {matches
                      .filter(
                        (match) =>
                          match.startTime !== nextNonActiveMatch &&
                          match.nextMatchId !== null &&
                          match.state === "SCHEDULED"
                      )
                      .map((match) => (
                        <div className="rounded-lg border border-white pb-4 shadow-lg">
                          <h1 className="pt-4">
                            Round {match.tournamentRoundText}
                          </h1>
                          <p>
                            {`${new Date(
                              parseInt(match.startTime) * 1000
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })} @ ${new Date(
                              parseInt(match.startTime) * 1000
                            ).toLocaleTimeString([], {
                              timeZoneName: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            })} `}
                          </p>
                          <Separator className="my-2" />
                          <div className="flex flex-row items-center justify-center gap-4">
                            <h1>{match.participants[0].name}</h1>
                            <Image
                              src={`https://mc-heads.net/head/${match.participants[0].name}`}
                              height={64}
                              width={64}
                              alt="Player"
                            />
                            <h1>vs</h1>
                            <Image
                              src={`https://mc-heads.net/head/${match.participants[1].name}/left`}
                              height={64}
                              width={64}
                              alt="Player"
                            />
                            <h1>{match.participants[1].name}</h1>
                          </div>
                        </div>
                      ))}
                  </Carousel>
                </>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
