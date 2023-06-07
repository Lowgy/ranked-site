export default async function getProfile(nickname: string) {
  const response = await fetch(`https://mcsrranked.com/api/users/${nickname}`)
  if (!response.ok) {
    throw new Error("User not found")
  }

  return response.json()
}
