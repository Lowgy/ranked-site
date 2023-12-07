export default async function getPlayoffData() {
  const response = await fetch(`${process.env.API_URL}/2` || "", {
    cache: "no-cache",
  })

  let data = await response.json()
  return data.data
}
