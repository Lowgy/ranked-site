export default async function getUsersMatches(uuid: string, nickname: string) {
  const response = await fetch(
    `https://mcsrranked.com/api/users/${nickname}/matches?filter=2`,
    { cache: "no-cache" }
  )

  let data = await response.json()
  data = data.data
  let matches = []
  for (let i = 0; i < data.length; i++) {
    if (!data[i].is_decay) {
      matches.push({
        match_id: data[i].match_id,
        match_type: data[i].match_type,
        match_date: data[i].match_date,
        winner: data[i].winner,
        opponent: getOpponent(data[i].members, uuid),
        final_time: data[i].final_time,
        forfeit: data[i].forfeit,
      })
    }
  }
  return matches
}

function getOpponent(members: any, uuid: string) {
  for (let i = 0; i < members.length; i++) {
    if (members[i].uuid !== uuid) {
      return { nickname: members[i].nickname, uuid: members[i].uuid }
    }
  }
}
