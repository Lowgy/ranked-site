"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Match,
  SingleEliminationBracket,
  createTheme,
} from "@lowgy/react-tournament-brackets"
import { CalendarCheck, Trophy } from "lucide-react"
import { Matches, Participant, Player, Results, Season } from "types/playoffs"

import getPlayoffData from "@/lib/actions/getPlayoffData"
import { nextMatchCheck } from "@/lib/utils"
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
import BracketMatches from "@/components/bracket-matches"
import UpcomingResultsSection from "@/components/upcoming-results-section"

import { playoffs } from "../data/playoffs"

const RankedTheme = createTheme({
  matchBackground: { wonColor: "#1d2232", lostColor: "#1d2232" },
  score: {
    background: { wonColor: "#22c55e" },
  },
})

export default function PlayoffsPage() {
  const [loading, setLoading] = useState<boolean>(true)
  const [playoffData, setPlayoffdata] = useState<Season>()
  const [seasons, setSeasons] = useState<number[]>([1, 2, 3])
  const [nextFlag, setNextFlag] = useState<number | null>(null)
  const [selectedSeason, setSelectedSeason] = useState<number>(3)
  const [matches, setMatches] = useState<Matches[]>([])
  const [players, setPlayers] = useState<Player[]>([])
  const [roundHeaders, setRoundHeaders] = useState<string[]>([])
  const [thirdPlace, setThirdPlace] = useState<Matches>()
  const [nextNonActiveMatch, setNextNonActiveMatch] = useState<number>(0)

  const fetchInitalData = async () => {
    // const data = await getPlayoffData()
    const nextSeasonCheck = playoffs[0].data.next
    setNextFlag(nextSeasonCheck)
    const data = playoffs[0].data.data
    setPlayoffdata(data)
    let removeThirdPlace: Matches[] = []
    let headers: string[] = []
    let players: Player[] = []
    for (let i = 0; i < data.players.length; i++) {
      players.push(data.players[i])
    }

    for (let i = 0; i < data.results.length; i++) {
      if (data.results[i].player !== null) {
        for (let j = 0; j < players.length; j++) {
          ;(data.results[i] as Results).playerData = players[j]
        }
      }
    }
    for (let i = 0; i < data.matches.length; i++) {
      if (
        data.matches[i].participants[0]?.player !== null &&
        data.matches[i].participants[1]?.player !== null
      ) {
        for (let j = 0; j < players.length; j++) {
          if (
            players[j].seedNumber === data.matches[i].participants[0]?.player
          ) {
            ;(data.matches[i].participants[0] as Participant).playerData =
              players[j]
          }
          if (
            players[j].seedNumber === data.matches[i].participants[1]?.player
          ) {
            ;(data.matches[i].participants[1] as Participant).playerData =
              players[j]
          }
        }
      }
      headers.push(data.matches[i].name)
      if (data.matches[i].name === "3rd Place") {
        setThirdPlace(data.matches[i])
        removeThirdPlace.push(data.matches[i])
      } else {
        removeThirdPlace.push(data.matches[i])
      }
    }

    let sortedHeaders = headers.filter((item, index) => {
      return headers.indexOf(item) === index
    })

    setMatches(removeThirdPlace)
    setPlayers(players)
    setRoundHeaders(sortedHeaders)
    setNextNonActiveMatch(nextMatchCheck(data.matches))

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const fetchNewData = async () => {
    //FIX THIS LATER
    // const data = await getPlayoffData()
    // const nextSeasonCheck = playoffs[0].data.next
    // setNextFlag(nextSeasonCheck)
    // const data = playoffs[0].data.data
    // setPlayoffdata(data)
    // let removeThirdPlace: Matches[] = []
    // let headers: string[] = []
    // let players: Player[] = []
    // for (let i = 0; i < data.players.length; i++) {
    //   players.push(data.players[i])
    // }
    // for (let i = 0; i < data.matches.length; i++) {
    //   if (data.matches[i].name !== "3rd Place") {
    //     removeThirdPlace.push(data.matches[i])
    //     headers.push(data.matches[i].name)
    //   } else {
    //     setThirdPlace(data.matches[i])
    //   }
    // }
    // setMatches(removeThirdPlace)
    // setPlayers(players)
    // setRoundHeaders(headers)
    // setNextNonActiveMatch(nextMatchCheck(data.matches))
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1000)
  }

  useEffect(() => {
    fetchInitalData()
  }, [])

  useEffect(() => {
    fetchNewData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSeason])

  const handleSeasonSelection = (selected: string) => {
    setSelectedSeason(parseInt(selected))
  }

  return (
    <section className="pb-8 pt-6 md:py-10">
      <div className="container text-center md:hidden">
        <h1 className="text-2xl">Ranked Playoffs - Season {selectedSeason}</h1>
        <Link
          href="https://docs.google.com/document/d/1tFiKHls6gRBDiEdAhzSYNi9ljy3IFF3dZ5c6XltkDmI/edit#heading=h.vbcr8n5tsf5w"
          target="_blank"
          className="mt-1 text-green-400 hover:underline"
        >
          What is it?
        </Link>
        <Tabs defaultValue="bracket">
          <TabsList className="mt-2 grid w-full grid-cols-2 md:hidden md:w-[300px]">
            <TabsTrigger value="bracket">
              <Trophy className="mr-1 h-4 w-4" />
              Bracket
            </TabsTrigger>
            <TabsTrigger value="match">
              <CalendarCheck className="mr-1 h-4 w-4" />
              Matches
            </TabsTrigger>
          </TabsList>
          <div className="mb-4 flex flex-col items-center">
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
          <TabsContent value="bracket">
            {roundHeaders.map((header) => (
              <div className="mt-4 flex flex-col items-center">
                <h1>{header}</h1>
                {matches.map(
                  (match) =>
                    match.name === header && (
                      <>
                        <div className="my-4 flex h-[70px] w-[300px] flex-col items-stretch justify-between font-medium text-bracketText">
                          <div className="flex flex-col justify-between bg-round">
                            <div className="flex justify-center">
                              <p className="min-h-5">
                                {match.startTime !== null
                                  ? `${new Date(
                                      match.startTime * 1000
                                    ).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    })}  @ ${new Date(
                                      match.startTime * 1000
                                    ).toLocaleTimeString([], {
                                      timeZoneName: "short",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}`
                                  : "TBD"}
                              </p>
                            </div>
                            <div
                              className={`border-t-1 border-b-1 flex h-full items-center border-x-2 border-round bg-bracket first:rounded-t-md first:border-x-2 first:border-t-2 last:rounded-b-md last:border-x-2 last:border-b-2 ${
                                match.participants[0]?.roundScore ===
                                match.maxRoundScore
                                  ? "text-white"
                                  : " "
                              }`}
                            >
                              <div className="flex h-full w-[10%] items-center justify-center bg-score px-4 py-0.5 text-bracketText">
                                {match.participants[0]?.player ||
                                match.participants[0]?.player === 0
                                  ? match.participants[0]?.player + 1
                                  : " "}
                              </div>
                              <div
                                className={`ml-[10px] mr-auto ${
                                  !match.participants[0]?.player &&
                                  match.participants[0]?.player !== 0 &&
                                  "p-[13px]"
                                }`}
                              >
                                {match.participants[0]?.player ||
                                match.participants[0]?.player === 0
                                  ? players[match.participants[0].player]
                                      .nickname
                                  : " "}
                              </div>
                              <div
                                className={`flex h-full w-1/5 items-center justify-center px-4 py-0.5 ${
                                  match.participants[0]?.roundScore ===
                                  match.maxRoundScore
                                    ? "bg-scoreWinner text-white"
                                    : "bg-score"
                                }`}
                              >
                                {match.participants[0]?.roundScore}
                              </div>
                            </div>
                            <div className="h-px border border-solid border-gray-300 opacity-0 transition duration-500 ease-in-out hover:opacity-100"></div>
                            <div
                              className={`border-t-1 border-b-1 flex h-full items-center border-x-2 border-round bg-bracket first:rounded-t-md first:border-x-2 first:border-t-2 last:rounded-b-md last:border-x-2 last:border-b-2 ${
                                match.participants[1]?.roundScore ===
                                match.maxRoundScore
                                  ? "text-white"
                                  : " "
                              }`}
                            >
                              <div className="flex h-full w-[10%] items-center justify-center bg-score px-4 py-0.5 text-bracketText">
                                {match.participants[1]?.player
                                  ? match.participants[1]?.player + 1
                                  : " "}
                              </div>
                              <div
                                className={`ml-[10px] mr-auto ${
                                  !match.participants[1]?.player && "p-[13px]"
                                }`}
                              >
                                {match.participants[1]?.player
                                  ? players[match.participants[1].player]
                                      .nickname
                                  : " "}
                              </div>
                              <div
                                className={`flex h-full w-1/5 items-center justify-center px-4 py-0.5 ${
                                  match.participants[1]?.roundScore ===
                                  match.maxRoundScore
                                    ? "bg-scoreWinner text-white"
                                    : "bg-score"
                                }`}
                              >
                                {match.participants[1]?.roundScore}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                )}
              </div>
            ))}
          </TabsContent>
          <TabsContent value="match">
            {" "}
            <div className="flex flex-row space-x-4">
              <BracketMatches
                matches={matches}
                nextNonActiveMatch={nextNonActiveMatch}
              />
            </div>
            <Separator className="my-4" />
            <div className="container mx-auto text-center">
              <UpcomingResultsSection
                playoffs={playoffData}
                nextSeasonFlag={nextFlag}
                selectedSeason={selectedSeason}
                nextNonActiveMatch={nextNonActiveMatch}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="container hidden items-center md:grid">
        <div className="flex flex-row items-center gap-4">
          <h1 className="text-2xl">
            Ranked Playoffs - Season {selectedSeason}
          </h1>
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
          <TabsContent value="bracket">
            {loading ? (
              <div className="my-64 flex justify-center">
                <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-green-400"></div>
              </div>
            ) : (
              <div className="relative">
                {matches.length !== 0 && (
                  <SingleEliminationBracket
                    matches={matches}
                    matchComponent={Match}
                    theme={RankedTheme}
                  />
                )}
                <div className="absolute right-0 top-[60%] mr-[4.65rem]">
                  {thirdPlace && (
                    <div className="flex h-[70px] w-[300px] flex-col items-stretch justify-between font-medium text-bracketText">
                      <div className="flex justify-between">
                        <p className="min-h-5 mb-1">
                          {thirdPlace.startTime !== null
                            ? `${new Date(
                                thirdPlace.startTime * 1000
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}  @ ${new Date(
                                thirdPlace.startTime * 1000
                              ).toLocaleTimeString([], {
                                timeZoneName: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}`
                            : ""}
                        </p>
                      </div>
                      <div className="flex flex-1 flex-col justify-between rounded-sm bg-round px-0.5 font-normal">
                        <div
                          className={`border-t-1 border-b-1 flex h-full items-center border-x-4 border-round bg-bracket first:rounded-t-md first:border-x-2 first:border-t-2 last:rounded-b-md last:border-x-2 last:border-b-2 ${
                            thirdPlace.participants[0]?.roundScore ===
                            thirdPlace.maxRoundScore
                              ? "text-white"
                              : ""
                          }`}
                        >
                          <div className="flex h-full w-[10%] items-center justify-center bg-score px-4 py-0.5">
                            {thirdPlace.participants[0]?.player
                              ? thirdPlace.participants[0].player + 1
                              : ""}
                          </div>
                          <div
                            className={`ml-[10px] mr-auto ${
                              !thirdPlace.participants[0]?.player && "p-[13px]"
                            }`}
                          >
                            {thirdPlace.participants[0]?.player
                              ? players[thirdPlace.participants[0].player]
                                  .nickname
                              : " "}
                          </div>
                          <div
                            className={`flex h-full w-1/5 items-center justify-center px-4 py-0.5 ${
                              thirdPlace.participants[0]?.roundScore ===
                              thirdPlace.maxRoundScore
                                ? "bg-scoreWinner text-white"
                                : "bg-score"
                            }`}
                          >
                            {thirdPlace.participants[0]?.roundScore || ""}
                          </div>
                        </div>
                        <div className="h-[8px] border border-solid border-gray-300 opacity-0 transition duration-500 ease-in-out hover:opacity-100"></div>
                        <div
                          className={`border-t-1 border-b-1 flex h-full items-center border-x-4 border-round bg-bracket first:rounded-t-md first:border-x-2 first:border-t-2 last:rounded-b-md last:border-x-2 last:border-b-2 ${
                            thirdPlace.participants[1]?.roundScore ===
                            thirdPlace.maxRoundScore
                              ? "text-white"
                              : ""
                          }`}
                        >
                          <div className="flex h-full w-[10%] items-center justify-center bg-score px-4 py-0.5">
                            {thirdPlace.participants[1]?.player
                              ? thirdPlace.participants[1].player + 1
                              : ""}
                          </div>
                          <div
                            className={`ml-[10px] mr-auto ${
                              !thirdPlace.participants[1]?.player && "p-[13px]"
                            }`}
                          >
                            {thirdPlace.participants[1]?.player
                              ? players[thirdPlace.participants[1].player]
                                  .nickname
                              : " "}
                          </div>
                          <div
                            className={`flex h-full w-1/5 items-center justify-center px-4 py-0.5 ${
                              thirdPlace.participants[1]?.roundScore ===
                              thirdPlace.maxRoundScore
                                ? "bg-scoreWinner text-white"
                                : "bg-score"
                            }`}
                          >
                            {thirdPlace.participants[1]?.roundScore !== null
                              ? thirdPlace.participants[1]?.roundScore
                              : " "}
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-[#707582]">3rd Place</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value="match">
            <div className="flex flex-row space-x-4">
              <BracketMatches
                matches={matches}
                nextNonActiveMatch={nextNonActiveMatch}
              />
            </div>
            <Separator className="my-4" />
            <div className="container mx-auto text-center">
              <UpcomingResultsSection
                playoffs={playoffData}
                nextSeasonFlag={nextFlag}
                selectedSeason={selectedSeason}
                nextNonActiveMatch={nextNonActiveMatch}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
