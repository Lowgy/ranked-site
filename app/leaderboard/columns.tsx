/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"

import { timeFormat } from "@/lib/utils"

export type Runner = {
  // Look at api docs for object structure
  uuid: string
  nickname: string
  eloRank?: number
  eloRate?: number
  rank?: number
  time?: number
  season?: number
  seasonResult?: SeasonResult
}

export type SeasonResult = {
  phasePoint?: number
}

function eloColor(elo: number) {
  return elo >= 0 && elo <= 599
    ? "text-gray-950"
    : elo >= 600 && elo <= 899
    ? "text-gray-500"
    : elo >= 900 && elo <= 1199
    ? "text-yellow-500"
    : elo >= 1200 && elo <= 1499
    ? "text-green-500"
    : elo >= 1500 && elo <= 1999
    ? "text-blue-400"
    : elo >= 2000
    ? "text-purple-500"
    : ""
}

export const eloColumns: ColumnDef<Runner>[] = [
  {
    accessorKey: "eloRank",
    header: "Rank",
  },
  {
    accessorKey: "nickname",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <img
            src={`https://crafatar.com/avatars/${row.original.uuid}?overlay`}
            alt={row.original.nickname}
            height={32}
            width={32}
            className="mr-2 h-8 w-8 rounded-full"
            loading="lazy"
          />
          <Link
            href={`/profile/${row.original.nickname}`}
            className="hover:underline"
            prefetch={false}
          >
            {" "}
            {row.original.nickname}
          </Link>
        </div>
      )
    },
  },
  {
    accessorKey: "eloRate",
    header: "Elo",
    cell: ({ row }) => {
      return (
        <div
          className={`flex items-center ${
            row.original.eloRate !== undefined
              ? eloColor(row.original.eloRate)
              : ""
          }`}
        >
          {row.original.eloRate !== undefined ? row.original.eloRate : "N/A"}
        </div>
      )
    },
  },
]

export const timeColumns: ColumnDef<Runner>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "nickname",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <img
            src={`https://crafatar.com/avatars/${row.original.uuid}?overlay`}
            alt={row.original.nickname}
            height={32}
            width={32}
            className="mr-2 h-8 w-8 rounded-full"
            loading="lazy"
          />
          <Link
            href={`/profile/${row.original.nickname}`}
            className="hover:underline"
            prefetch={false}
          >
            {" "}
            {row.original.nickname}{" "}
            <span className="text-sm text-gray-400">
              (Season: {row.original.season})
            </span>
          </Link>
        </div>
      )
    },
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => {
      if (row.original.time !== undefined) {
        return (
          <div className="flex items-center">
            {timeFormat(row.original.time)}
          </div>
        )
      }
    },
  },
]

export const phasePointsColumns: ColumnDef<Runner>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
    cell: ({ row }) => {
      return <div className="flex items-center">{row.index + 1}</div>
    },
  },
  {
    accessorKey: "nickname",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <img
            src={`https://crafatar.com/avatars/${row.original.uuid}?overlay`}
            alt={row.original.nickname}
            height={32}
            width={32}
            className="mr-2 h-8 w-8 rounded-full"
            loading="lazy"
          />
          <Link
            href={`/profile/${row.original.nickname}`}
            className="hover:underline"
            prefetch={false}
          >
            {" "}
            {row.original.nickname}
          </Link>
        </div>
      )
    },
  },
  {
    accessorKey: "phasePoint",
    header: "Phase Points",
    cell: ({ row }) => {
      return (
        <div className={`flex items-center`}>
          {row.original.seasonResult?.phasePoint !== undefined
            ? `${row.original.seasonResult?.phasePoint} pts`
            : "N/A"}
        </div>
      )
    },
  },
]
