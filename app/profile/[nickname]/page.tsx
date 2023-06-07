import getProfile from "@/lib/actions/getProfile"

type Params = {
  params: {
    nickname: string
  }
}

export default async function ProfilePage({ params: { nickname } }: Params) {
  const userData = await getProfile(nickname)
  console.log(userData)
  return (
    <div>
      {nickname}
      {userData.data.elo_rank}
    </div>
  )
}
