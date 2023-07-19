import Image from "next/image"
import Link from "next/link"
import { Twitch, Youtube } from "lucide-react"

import getProfile from "@/lib/actions/getProfile"
import getUserMatches from "@/lib/actions/getUserMatches"
import { addRank, eloColor, timeFormat } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EloChart from "@/components/elo-chart"
import StatsCarousel from "@/components/stats-carousel"

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
        <Image
          src={`https://crafatar.com/avatars/${userData.data.uuid}?overlay`}
          alt={nickname}
          height={32}
          width={32}
          className="mr-2 h-8 w-8 rounded-full"
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
      <div className="mb-6 flex items-center pl-10">
        <h2 className="text-gray-500">
          Rank: {!userData.data.elo_rank ? "N/A" : `#${userData.data.elo_rank}`}
        </h2>
        <h2 className="pl-4 text-gray-500">
          Elo: [
          <span className={`${eloColor(userData.data.elo_rate)}`}>
            {userData.data.elo_rate} - {addRank(userData.data.elo_rate)}
          </span>
          ]
        </h2>
      </div>
    </>
  )
}

export default async function ProfilePage({ params: { nickname } }: Params) {
  const userData = await getProfile(nickname)
  const matches = await getUserMatches(userData.data.uuid, nickname)
  console.log(matches, userData.data)
  return (
    <section className="container grid items-center pb-8 pl-10 pt-6 md:py-10">
      <Tabs defaultValue="general">
        <div className="relative">
          <TabsList className="absolute right-0 top-4 grid w-[200px] grid-cols-3 md:w-[300px]">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="general">
          <section className="container grid items-center p-0">
            <ProfileHeader nickname={nickname} userData={userData} />
            <StatsCarousel data={userData.data} />
            <EloChart data={matches} />
          </section>
        </TabsContent>
        <TabsContent value="stats">
          <ProfileHeader nickname={nickname} userData={userData} />
          <h1 className="text-2xl">Stats</h1>
        </TabsContent>
        <TabsContent value="matches">
          <ProfileHeader nickname={nickname} userData={userData} />
          <h1 className="text-2xl">Matches</h1>
        </TabsContent>
      </Tabs>
      {/* Without Carousel */}
      {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Total Games</h3>
          <p className="">{userData.data.total_played}</p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Wins (Season)</h3>
          <p className="">{userData.data.records[2].win}</p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Losses (Season)</h3>
          <p className="">{userData.data.records[2].lose}</p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Win Rate (Season)</h3>
          <p className="">
            {(
              (userData.data.records[2].win /
                (userData.data.records[2].win +
                  userData.data.records[2].lose +
                  userData.data.records[2].draw)) *
              100
            ).toFixed(2)}{" "}
            %
          </p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Best Win Streak</h3>
          <p className="">{userData.data.highest_winstreak}</p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Current Win Streak</h3>
          <p className="">{userData.data.current_winstreak}</p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Best Elo</h3>
          <p className={`${eloColor(userData.data.best_elo_rate)}`}>
            {userData.data.best_elo_rate} -{" "}
            {addRank(userData.data.best_elo_rate)}
          </p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Best Time</h3>
          <p className="">{timeFormat(userData.data.best_record_time)}</p>
        </div>
      </div> */}
    </section>
  )
}
