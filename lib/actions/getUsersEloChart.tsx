export default async function getUsersEloChart(uuid: string, nickname: string) {
  const response = await fetch(
    `https://mcsrranked.com/api/users/${nickname}/matches?filter=2`,
    { cache: "no-cache" }
  )

  let data = await response.json()
  data = data.data
  console.log(data[0])
  let matches = []
  for (let i = 0; i < data.length; i++) {
    if (!data[i].is_decay) {
      matches.push(data[i])
    }
  }

  if (matches.length !== 0) {
    let elo = []
    for (let i = 0; i < matches.length; i++) {
      for (let j = 0; j < matches[i].score_changes.length; j++) {
        if (matches[i].score_changes[j].uuid === uuid) {
          elo.push({
            elo: matches[i].score_changes[j].score,
          })
        }
      }
    }
    return elo.reverse()
  }
}
