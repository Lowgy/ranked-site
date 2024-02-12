export default async function getUsersMatches(uuid: string, nickname: string) {
  const response = await fetch(
    `https://mcsrranked.com/api/users/${nickname}/matches?type=2&excludedecay=false`,
    { cache: "no-cache" }
  )

  let data = await response.json()
  data = data.data
  let matches = []
  for (let i = 0; i < data.length; i++) {
    if (!data[i].is_decayed) {
      matches.push({
        match_id: data[i].id,
        match_type: data[i].type,
        match_date: data[i].date,
        winner: data[i].result.uuid,
        opponent: getOpponent(data[i].players, uuid),
        playoff: data[i].players.length > 2 ? true : false,
        final_time: data[i].result.time,
        // match_details: await getMatchDetails(data[i].match_id),
        forfeit: data[i].forfeited,
      })
    }
  }
  return matches
}

export async function getMatchDetails(match_id: string) {
  const response = await fetch(
    `http://127.0.0.1:17432/api/matches/${match_id}`,
    {
      cache: "no-cache",
    }
  )

  let data = await response.json()
  data = data.data
  return data
}

function getOpponent(members: any, uuid: string) {
  if (members.length !== 1) {
    for (let i = 0; i < members.length; i++) {
      if (members[i].eloRate !== null) {
        if (members[i].uuid !== uuid) {
          return { nickname: members[i].nickname, uuid: members[i].uuid }
        }
      }
    }
  } else {
    return { nickname: "N/A", uuid: "N/A" }
  }
}
