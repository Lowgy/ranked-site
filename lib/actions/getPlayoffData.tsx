export default async function getPlayoffData() {
  const response = await fetch(`https://mcsrranked.com/api/playoffs`, {
    cache: "no-cache",
  })

  let data = await response.json()
  return data.data
}
