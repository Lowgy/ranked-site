export default async function getHeadToHead(
  nickname1: string,
  nickname2: string
) {
  try {
    const response = await fetch(
      `https://mcsrranked.com/api/users/${nickname1}/versus/${nickname2}`,
      {
        cache: "no-cache",
      }
    )
    if (!response.ok) throw new Error("User not found")
    return response.json()
  } catch (error) {}
}
