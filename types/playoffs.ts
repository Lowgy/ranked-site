export type Participant = {
  player: number | null
  roundScore: number
  playerData?: Player
}

export type Player = {
  uuid: string
  nickname: string
  seasonEloRate: number
  seasonEloRank: number | null
  seedNumber: number
  personalBest: number
}

export type Results = {
  player: number | null
  place: number
  prize: number
  playerData?: Player
}

export type Matches = {
  id: number
  name: string
  nextMatchId: number | string | null
  maxRoundScore: number
  startTime: number | null
  state: string | null
  participants: Participant[] | []
}

export type Season = {
  season: number
  players: Player[]
  matches: Matches[]
  results: Results[]
}
