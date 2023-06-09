"use client"

import Image from "next/image"
import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"

import { eloColor, timeFormat } from "@/lib/utils"

export type Runner = {
  // Look at api docs for object structure
  uuid: string
  nickname: string
  elo_rank?: number
  elo_rate?: number
  final_time_rank?: number
  final_time?: number
}

export const eloColumns: ColumnDef<Runner>[] = [
  {
    accessorKey: "elo_rank",
    header: "Rank",
  },
  {
    accessorKey: "nickname",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <Image
            src={`https://crafatar.com/avatars/${row.original.uuid}?overlay`}
            alt={row.original.nickname}
            height={32}
            width={32}
            className="mr-2 h-8 w-8 rounded-full"
          />
          <Link
            href={`/profile/${row.original.nickname}`}
            className="hover:underline"
          >
            {" "}
            {row.original.nickname}
          </Link>
        </div>
      )
    },
  },
  {
    accessorKey: "elo_rate",
    header: "Elo",
    cell: ({ row }) => {
      return (
        <div
          className={`flex items-center ${
            row.original.elo_rate !== undefined
              ? eloColor(row.original.elo_rate)
              : ""
          }`}
        >
          {row.original.elo_rate !== undefined ? row.original.elo_rate : "N/A"}
        </div>
      )
    },
  },
]

export const timeColumns: ColumnDef<Runner>[] = [
  {
    accessorKey: "final_time_rank",
    header: "Rank",
  },
  {
    accessorKey: "nickname",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <Image
            src={`https://crafatar.com/avatars/${row.original.uuid}?overlay`}
            alt={row.original.nickname}
            height={32}
            width={32}
            className="mr-2 h-8 w-8 rounded-full"
          />
          <Link
            href={`/profile/${row.original.nickname}`}
            className="hover:underline"
          >
            {" "}
            {row.original.nickname}
          </Link>
        </div>
      )
    },
  },
  {
    accessorKey: "final_time",
    header: "Time",
    cell: ({ row }) => {
      if (row.original.final_time !== undefined) {
        return (
          <div className="flex items-center">
            {timeFormat(row.original.final_time)}
          </div>
        )
      }
    },
  },
]
