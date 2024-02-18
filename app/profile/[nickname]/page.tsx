/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { Book, LineChart, Swords, Twitch, Youtube } from "lucide-react"

import getProfile from "@/lib/actions/getProfile"
import getUsersEloChart from "@/lib/actions/getUsersEloChart"
import getUsersMatches from "@/lib/actions/getUsersMatches"
import { addRank, eloColor, timeFormat, timeSince } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GeneralTab from "@/components/general-tab"
import MatchesTab from "@/components/matches-tab"
import StatsTab from "@/components/stats-tab"

type Params = {
  params: {
    nickname: string
  }
}

function ProfileHeader({
  nickname,
  userData,
}: {
  nickname: string
  userData: any
}) {
  return (
    <>
      <div className="flex items-center">
        <img
          src={`https://crafatar.com/avatars/${userData.data.uuid}?overlay`}
          alt={nickname}
          height={32}
          width={32}
          className="mr-2 h-8 w-8 rounded-full"
          loading="lazy"
        />
        <h1 className="text-2xl">{nickname}</h1>
        {userData.data.connections.youtube != null && (
          <Link
            href={`https://youtube.com/${userData.data.connections.youtube.name}`}
            target="_blank"
          >
            <Youtube className="ml-4 h-8 w-8 text-red-600" />
          </Link>
        )}
        {userData.data.connections.twitch != null && (
          <Link
            href={`https://twitch.tv/${userData.data.connections.twitch.name}`}
            target="_blank"
          >
            <Twitch className="ml-2 mt-1 h-7 w-7 text-purple-700" />
          </Link>
        )}
      </div>
      <div className="mb-2 flex items-center pl-10 md:mb-6">
        <h2 className="text-gray-500">
          Rank: {!userData.data.eloRank ? "N/A" : `#${userData.data.eloRank}`}
        </h2>
        <h2 className="pl-4 text-gray-500">
          Elo:{" "}
          {!userData.data.eloRate
            ? "N/A"
            : [
                <span className={`${eloColor(userData.data.eloRate)}`}>
                  {userData.data.eloRate} - {addRank(userData.data.eloRate)}
                </span>,
              ]}
        </h2>
      </div>
    </>
  )
}

export default async function ProfilePage({ params: { nickname } }: Params) {
  const userData = await getProfile(nickname)
  const eloMatches = await getUsersEloChart(userData.data.uuid, nickname)
  const matches = await getUsersMatches(userData.data.uuid, nickname)
  return (
    <section className="container grid items-center pb-8 pl-10 pt-6 md:py-10">
      <Tabs defaultValue="general">
        <div className="relative">
          <TabsList className="absolute right-0 top-4 hidden w-[200px] grid-cols-3 md:grid md:w-[300px]">
            <TabsTrigger value="general">
              <Book className="mr-1 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="stats">
              <LineChart className="mr-1 h-4 w-4" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="matches">
              <Swords className="mr-1 h-4 w-4" />
              Matches
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="general">
          <section className="container grid items-center p-0">
            <ProfileHeader nickname={nickname} userData={userData} />
            <TabsList className="mb-2 grid w-full grid-cols-3 md:hidden md:w-[300px]">
              <TabsTrigger value="general">
                <Book className="mr-1 h-4 w-4" />
                General
              </TabsTrigger>
              <TabsTrigger value="stats">
                <LineChart className="mr-1 h-4 w-4" />
                Stats
              </TabsTrigger>
              <TabsTrigger value="matches">
                <Swords className="mr-1 h-4 w-4" />
                Matches
              </TabsTrigger>
            </TabsList>
            <GeneralTab userData={userData} matches={eloMatches} />
          </section>
        </TabsContent>
        <TabsContent value="stats">
          <ProfileHeader nickname={nickname} userData={userData} />
          <TabsList className="mb-2 grid w-full grid-cols-3 md:hidden md:w-[300px]">
            <TabsTrigger value="general">
              <Book className="mr-1 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="stats">
              <LineChart className="mr-1 h-4 w-4" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="matches">
              <Swords className="mr-1 h-4 w-4" />
              Matches
            </TabsTrigger>
          </TabsList>
          <StatsTab userData={userData} />
        </TabsContent>
        <TabsContent value="matches">
          <ProfileHeader nickname={nickname} userData={userData} />
          <TabsList className="mb-2 grid w-full grid-cols-3 md:hidden md:w-[300px]">
            <TabsTrigger value="general">
              <Book className="mr-1 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="stats">
              <LineChart className="mr-1 h-4 w-4" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="matches">
              <Swords className="mr-1 h-4 w-4" />
              Matches
            </TabsTrigger>
          </TabsList>
          <MatchesTab matches={matches} userData={userData} />
        </TabsContent>
      </Tabs>
    </section>
  )
}
