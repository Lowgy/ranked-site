"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightCircle } from "lucide-react"

import { getMatchDetails } from "@/lib/actions/getUsersMatches"
import { advancementLabel, timeFormat, timeSince } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Separator } from "./ui/separator"

export default function MatchesTab(data: any) {
  const [loading, setLoading] = useState<boolean>(true)
  const [matchDetails, setMatchDetails] = useState<any>(null)

  const handleClick = async (match_id: string) => {
    setLoading(true)
    let details = await getMatchDetails(match_id)
    setMatchDetails(details)
  }

  useEffect(() => {
    if (matchDetails !== null) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [matchDetails])

  return (
    <Table>
      <TableCaption>A list of recent matches</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[200px] md:table-cell">
            Match Type
          </TableHead>
          <TableHead>Opponent</TableHead>
          <TableHead>Result</TableHead>
          <TableHead>Final Time</TableHead>
          <TableHead>Match Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.matches.map((match: any) => (
          <TableRow>
            <TableCell className="hidden font-medium md:table-cell">
              {match.match_type === 1
                ? "Casual"
                : match.match_type === 2
                ? "Ranked"
                : "Private"}{" "}
              Match
            </TableCell>
            <TableCell>
              {" "}
              <Image
                src={`https://crafatar.com/avatars/${match.opponent.uuid}?overlay`}
                alt={match.opponent.nickname}
                height={32}
                width={32}
                className="mr-2 h-8 w-8 rounded-full"
              />
              <Link
                href={`/profile/${match.opponent.nickname}`}
                className="hover:underline"
              >
                {" "}
                {match.opponent.nickname}
              </Link>
            </TableCell>
            <TableCell
              className={
                match.winner === data.userData.data.uuid
                  ? "text-green-400"
                  : "text-red-600"
              }
            >
              {match.winner === data.userData.data.uuid ? "Won" : "Lost"}
            </TableCell>
            <TableCell>
              {match.forfeit ? "Forfeit" : timeFormat(match.final_time)}
            </TableCell>
            <TableCell>{timeSince(match.match_date)}</TableCell>
            <TableCell className="hidden md:table-cell">
              <Dialog>
                <DialogTrigger className="hover:text-green-400">
                  <button onClick={() => handleClick(match.match_id)}>
                    <ArrowRightCircle />
                  </button>
                </DialogTrigger>
                {loading ? (
                  <DialogContent>
                    <div className="flex justify-center">
                      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-green-400"></div>
                    </div>
                  </DialogContent>
                ) : (
                  <DialogContent className="max-h-screen max-w-[800px] overflow-y-scroll">
                    <DialogHeader>
                      <DialogTitle>
                        Match ID: {matchDetails?.match_id}
                        <br />
                        {matchDetails !== null ? (
                          <span className="text-sm font-normal">
                            Winner:{" "}
                            {match.winner === data.userData.data.uuid
                              ? data.userData.data.nickname
                              : match.opponent.nickname}{" "}
                            | Seed Type: {matchDetails.seed_type} | Final Time:{" "}
                            {timeFormat(matchDetails.final_time)}
                          </span>
                        ) : (
                          ""
                        )}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-wrap">
                      <Separator className="-mt-2 mb-2" />
                      <div className="w-full md:w-1/2">
                        <h1 className="font-bold">
                          {data.userData.data.nickname}
                        </h1>
                        {matchDetails?.timelines
                          .toReversed()
                          .filter(
                            (timeline: any) =>
                              !timeline.timeline.includes(".root") &&
                              !timeline.timeline.includes(".dragon_breath")
                          )
                          .map(
                            (timeline: any) =>
                              timeline.uuid === data.userData.data.uuid && (
                                <div className="flex">
                                  <div className="w-1/2">
                                    <p className="text-sm">
                                      {advancementLabel(timeline.timeline)}
                                    </p>
                                    <p className="text-xs">
                                      {timeFormat(timeline.time)}
                                    </p>
                                  </div>
                                </div>
                              )
                          )}
                      </div>
                      <div className="w-full md:w-1/2 ">
                        <h1 className="font-bold">{match.opponent.nickname}</h1>
                        {matchDetails?.timelines
                          .toReversed()
                          .filter(
                            (timeline: any) =>
                              !timeline.timeline.includes(".root") &&
                              !timeline.timeline.includes(".dragon_breath")
                          )
                          .map(
                            (timeline: any) =>
                              timeline.uuid === match.opponent.uuid && (
                                <div className="flex">
                                  <div className="w-1/2">
                                    <p className="text-sm">
                                      {advancementLabel(timeline.timeline)}
                                    </p>
                                    <p className="text-xs">
                                      {timeFormat(timeline.time)}
                                    </p>
                                  </div>
                                </div>
                              )
                          )}
                      </div>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}