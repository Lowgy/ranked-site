import { notFound } from "next/navigation"

export default async function getProfile(nickname: string) {
  try {
    const response = await fetch(
      `https://mcsrranked.com/api/users/${nickname}`,
      {
        cache: "no-cache",
      }
    )
    if (!response.ok) throw new Error("User not found")
    return response.json()
  } catch (error) {
    if (error instanceof Error && error.message === "User not found") {
      notFound()
    }
  }
}
