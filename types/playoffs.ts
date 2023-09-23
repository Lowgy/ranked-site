export type Participant = {
  id: string
  resultText: string
  isWinner: boolean
  season_elo?: number
  personal_best?: number
  status: null | string
  name: string
}

export type Results = {
  place: number
  name: string
  prize?: number
}

export type Matches = {
  id: number
  name: string
  nextMatchId: number | null
  tournamentRoundText: string
  startTime: string
  state: string
  participants: Participant[] | []
}

export type Season = {
  seasonId: number
  currentSeason: boolean
  matches: Matches[]
  results: Results[]
}
