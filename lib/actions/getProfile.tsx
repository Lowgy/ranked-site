import { notFound } from "next/navigation"

export default async function getProfile(nickname: string) {
  try {
    const response = await fetch(
      `http://127.0.0.1:17432/api/users/${nickname}`,
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
