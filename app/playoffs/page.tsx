"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Match,
  SingleEliminationBracket,
  createTheme,
} from "@lowgy/react-tournament-brackets"
import { CalendarCheck, Trophy } from "lucide-react"
import { Matches } from "types/playoffs"

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
  const [seasons, setSeasons] = useState<number[]>([])
  const [selectedSeason, setSelectedSeason] = useState<number>(2)
  const [matches, setMatches] = useState<Matches[]>([])
  const [nextNonActiveMatch, setNextNonActiveMatch] = useState("")

  const handleSeasonSelection = (selected: string) => {
    setSelectedSeason(parseInt(selected))
  }

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
            <BracketMatches
              matches={matches}
              nextNonActiveMatch={nextNonActiveMatch}
            />
          </div>
          <Separator className="my-4" />
          <div className="container mx-auto text-center">
            <UpcomingResultsSection
              playoffs={playoffs}
              selectedSeason={selectedSeason}
              nextNonActiveMatch={nextNonActiveMatch}
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
