"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Match,
  SingleEliminationBracket,
  createTheme,
} from "@g-loot/react-tournament-brackets"
import { CalendarCheck, Trophy } from "lucide-react"
import Carousel from "react-multi-carousel"
import { TwitchEmbed } from "react-twitch-embed"
import { useWindowSize } from "usehooks-ts"

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

import "react-multi-carousel/lib/styles.css"

const matches = [
  {
    id: 1,
    name: "",
    nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "4", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Silverr", // Unique identifier of any kind
        resultText: "4", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Silverr",
      },
      {
        id: "Doogile",
        resultText: "3",
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Doogile",
      },
    ],
  },
  {
    id: 2,
    name: "",
    nextMatchId: 1, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Silverr", // Unique identifier of any kind
        resultText: "3", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Silverr",
      },
      {
        id: "Oxidiot",
        resultText: "0",
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Oxidiot",
      },
    ],
  },
  {
    id: 3,
    name: "",
    nextMatchId: 1, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Doogile", // Unique identifier of any kind
        resultText: "3", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Doogile",
      },
      {
        id: "Dandannyboy",
        resultText: "2",
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Dandannyboy",
      },
    ],
  },
  {
    id: 4,
    name: "",
    nextMatchId: 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Silverr", // Unique identifier of any kind
        resultText: "3", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Silverr",
      },
      {
        id: "Reignex",
        resultText: "1",
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Reignex",
      },
    ],
  },
  {
    id: 5,
    name: "",
    nextMatchId: 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Oxidiot", // Unique identifier of any kind
        resultText: "3", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Oxidiot",
      },
      {
        id: "MoleyG",
        resultText: "0",
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "MoleyG",
      },
    ],
  },
  {
    id: 6,
    name: "",
    nextMatchId: 3, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Doogile", // Unique identifier of any kind
        resultText: "3", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Doogile",
      },
      {
        id: "Ancoboy",
        resultText: "2",
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Ancoboy",
      },
    ],
  },
  {
    id: 7,
    name: "",
    nextMatchId: 3, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "2", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Cro", // Unique identifier of any kind
        resultText: "2", // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Cro",
      },
      {
        id: "Dandannyboy",
        resultText: "3",
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Dandannyboy",
      },
    ],
  },
  {
    id: 8,
    name: "",
    nextMatchId: 4, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Silverr", // Unique identifier of any kind
        resultText: "2", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Silverr",
      },
      {
        id: "AutomattPL",
        resultText: "1",
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "AutomattPL",
      },
    ],
  },
  {
    id: 9,
    name: "",
    nextMatchId: 4, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Reignex", // Unique identifier of any kind
        resultText: "2", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Reignex",
      },
      {
        id: "Pulsar",
        resultText: "1",
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Pulsar",
      },
    ],
  },
  {
    id: 10,
    name: "",
    nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Oxidiot", // Unique identifier of any kind
        resultText: "2", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Oxidiot",
      },
      {
        id: "Ranik",
        resultText: "1",
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Ranik",
      },
    ],
  },
  {
    id: 11,
    name: "",
    nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Priffin", // Unique identifier of any kind
        resultText: "0", // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Priffin",
      },
      {
        id: "MoleyG",
        resultText: "2",
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "MoleyG",
      },
    ],
  },
  {
    id: 12,
    name: "",
    nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "7rowl", // Unique identifier of any kind
        resultText: "1", // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "7rowl",
      },
      {
        id: "Doogile",
        resultText: "2",
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Doogile",
      },
    ],
  },
  {
    id: 13,
    name: "",
    nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Lowkey", // Unique identifier of any kind
        resultText: "1", // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Lowkey",
      },
      {
        id: "Ancoboy",
        resultText: "2",
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Ancoboy",
      },
    ],
  },
  {
    id: 14,
    name: "",
    nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Orachi", // Unique identifier of any kind
        resultText: "0", // Any string works
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Orachi",
      },
      {
        id: "Cro",
        resultText: "2",
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Cro",
      },
    ],
  },
  {
    id: 15,
    name: "",
    nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    tournamentRoundText: "1", // Text for Round Header
    startTime: "",
    state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    participants: [
      {
        id: "Dandannyboy", // Unique identifier of any kind
        resultText: "2", // Any string works
        isWinner: true,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        name: "Dandannyboy",
      },
      {
        id: "Dylqn",
        resultText: "0",
        isWinner: false,
        status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        name: "Dylqn",
      },
    ],
  },
]

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
  const { width, height } = useWindowSize()
  const finalWidth = Math.max(width - 50, 500)
  const finalHeight = Math.max(height - 100, 500)
  return (
    <section className="container grid items-center pb-8 pt-6 md:py-10">
      <div className="flex flex-row items-center gap-4">
        <h1 className="text-2xl">Ranked Playoffs - Season 2</h1>
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
            <Select>
              <SelectTrigger className="mt-1 w-[300px]">
                <SelectValue placeholder="Current Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="currentSeason">Current Season</SelectItem>
                  <SelectItem value="season1">Season 1</SelectItem>
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
          <SingleEliminationBracket
            matches={matches}
            matchComponent={Match}
            theme={RankedTheme}
          />
        </TabsContent>
        <TabsContent value="match">
          <div className="flex flex-row space-x-4">
            <Card className="w-1/2 rounded-lg border-2 border-green-400">
              <CardTitle className="mt-10 text-center">
                Round 1 - Match 1
              </CardTitle>
              <CardContent>
                <div className="flex justify-between space-x-4 p-4 text-center">
                  <div>
                    <Image
                      src="https://mc-heads.net/body/c12b5b293e1b48079baecae7b9edba2a"
                      alt="Players skin"
                      width={120}
                      height={720}
                    />
                    <div className="mt-3">
                      <h1>LogyHD</h1>
                      <h1>Season Elo</h1>
                      <h1>Season Personal Best</h1>
                    </div>
                  </div>
                  <h1 className="flex justify-center">VS</h1>
                  <div>
                    <Image
                      src="https://mc-heads.net/body/fa1bec35058546c98f9279f8be7cf9bc/left"
                      alt="Players skin"
                      width={120}
                      height={720}
                    />
                    <div className="mt-3">
                      <h1>MoleyG</h1>
                      <h1>Season Elo</h1>
                      <h1>Season Personal Best</h1>
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
          </div>
          <Separator className="my-4" />
          {/* TODO: FILTER MATCHES BASED ON START TIME TO SHOW THE EXACT NEXT MATCH */}
          <div className="container mx-auto text-center">
            <h1 className="mb-2 text-left">Upcoming Matches</h1>
            <Carousel
              responsive={responsive}
              keyBoardControl={true}
              infinite={false}
              arrows={true}
            >
              <div className="rounded-lg border border-white pb-4 shadow-lg">
                <h1 className="pt-4">Round 1 - Match 2</h1>
                <p>Start Time</p>
                <Separator className="my-2" />
                <div className="flex flex-row items-center justify-center gap-4">
                  <h1>MoleyG</h1>
                  <Image
                    src={`https://mc-heads.net/head/fa1bec35058546c98f9279f8be7cf9bc`}
                    height={64}
                    width={64}
                    alt="Player"
                  />
                  <h1>vs</h1>
                  <Image
                    src={`https://mc-heads.net/head/c12b5b293e1b48079baecae7b9edba2a/left`}
                    height={64}
                    width={64}
                    alt="Player"
                  />
                  <h1>LogyHD</h1>
                </div>
              </div>
              <div className="rounded-lg border border-white pb-4 shadow-lg">
                <h1 className="pt-4">Round 1 - Match 2</h1>
                <p>Start Time</p>
                <Separator className="my-2" />
                <div className="flex flex-row items-center justify-center gap-4">
                  <h1>MoleyG</h1>
                  <Image
                    src={`https://mc-heads.net/head/fa1bec35058546c98f9279f8be7cf9bc`}
                    height={64}
                    width={64}
                    alt="Player"
                  />
                  <h1>vs</h1>
                  <Image
                    src={`https://mc-heads.net/head/c12b5b293e1b48079baecae7b9edba2a/left`}
                    height={64}
                    width={64}
                    alt="Player"
                  />
                  <h1>LogyHD</h1>
                </div>
              </div>
              <div className="rounded-lg border border-white pb-4 shadow-lg">
                <h1 className="pt-4">Round 1 - Match 2</h1>
                <p>Start Time</p>
                <Separator className="my-2" />
                <div className="flex flex-row items-center justify-center gap-4">
                  <h1>MoleyG</h1>
                  <Image
                    src={`https://mc-heads.net/head/fa1bec35058546c98f9279f8be7cf9bc`}
                    height={64}
                    width={64}
                    alt="Player"
                  />
                  <h1>vs</h1>
                  <Image
                    src={`https://mc-heads.net/head/c12b5b293e1b48079baecae7b9edba2a/left`}
                    height={64}
                    width={64}
                    alt="Player"
                  />
                  <h1>LogyHD</h1>
                </div>
              </div>
              <div className="rounded-lg border border-white pb-4 shadow-lg">
                <h1 className="pt-4">Round 1 - Match 2</h1>
                <p>Start Time</p>
                <Separator className="my-2" />
                <div className="flex flex-row items-center justify-center gap-4">
                  <h1>MoleyG</h1>
                  <Image
                    src={`https://mc-heads.net/head/fa1bec35058546c98f9279f8be7cf9bc`}
                    height={64}
                    width={64}
                    alt="Player"
                  />
                  <h1>vs</h1>
                  <Image
                    src={`https://mc-heads.net/head/c12b5b293e1b48079baecae7b9edba2a/left`}
                    height={64}
                    width={64}
                    alt="Player"
                  />
                  <h1>LogyHD</h1>
                </div>
              </div>
            </Carousel>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
