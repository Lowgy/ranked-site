export default async function getPlayoffData(season: number) {
  const response = await fetch(
    `https://mcsrranked.com/api/playoffs/${season}` || "",
    {
      cache: "no-cache",
    }
  )

  let data = await response.json()
  return data.data
}
