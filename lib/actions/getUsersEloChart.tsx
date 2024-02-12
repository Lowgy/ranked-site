export default async function getUsersEloChart(uuid: string, nickname: string) {
  const response = await fetch(
    `http://127.0.0.1:17432/api/users/${nickname}/matches?filter=2`,
    { cache: "no-cache" }
  )

  let data = await response.json()
  data = data.data
  let matches = []
  for (let i = 0; i < data.length; i++) {
    if (!data[i].is_decay) {
      matches.push(data[i])
    }
  }

  if (matches.length !== 0) {
    let elo = []
    for (let i = 0; i < matches.length; i++) {
      for (let j = 0; j < matches[i].changes.length; j++) {
        if (matches[i].changes[j].uuid === uuid) {
          elo.push({
            elo: matches[i].changes[j].eloRate,
          })
        }
      }
    }
    return elo.reverse()
  }
}
