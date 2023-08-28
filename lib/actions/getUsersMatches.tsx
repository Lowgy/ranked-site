export default async function getUsersMatches(uuid: string, nickname: string) {
  const response = await fetch(
    `http://localhost:4651/api/users/${nickname}/matches?filter=2`,
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
        // match_details: await getMatchDetails(data[i].match_id),
        forfeit: data[i].forfeit,
      })
    }
  }
  return matches
}

export async function getMatchDetails(match_id: string) {
  const response = await fetch(
    `http://localhost:4651/api/matches/${match_id}`,
    {
      cache: "no-cache",
    }
  )

  let data = await response.json()
  data = data.data
  return data
}

function getOpponent(members: any, uuid: string) {
  for (let i = 0; i < members.length; i++) {
    if (members[i].uuid !== uuid) {
      return { nickname: members[i].nickname, uuid: members[i].uuid }
    }
  }
}
