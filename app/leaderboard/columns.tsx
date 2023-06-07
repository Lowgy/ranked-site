"use client"

import Image from "next/image"
import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"

export type Runner = {
  // Look at api docs for object structure
  uuid: string
  elo_rank: number
  nickname: string
  elo_rate: number
}

export const columns: ColumnDef<Runner>[] = [
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
  },
]
