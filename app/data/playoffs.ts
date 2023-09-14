export const playoffs = [
  {
    seasonId: 1,
    currentSeason: false,
    matches: [
      {
        id: 1,
        name: "",
        nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "4", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Silverr", // Unique identifier of any kind
            resultText: "4", // Any string works
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Silverr",
          },
          {
            id: "Doogile",
            resultText: "3",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Doogile",
          },
        ],
      },
      {
        id: 2,
        name: "",
        nextMatchId: 1, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Silverr", // Unique identifier of any kind
            resultText: "3", // Any string works
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Silverr",
          },
          {
            id: "Oxidiot",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Oxidiot",
          },
        ],
      },
      {
        id: 3,
        name: "",
        nextMatchId: 1, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Doogile", // Unique identifier of any kind
            resultText: "3", // Any string works
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Doogile",
          },
          {
            id: "Dandannyboy",
            resultText: "2",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Dandannyboy",
          },
        ],
      },
      {
        id: 4,
        name: "",
        nextMatchId: 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "2", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Silverr", // Unique identifier of any kind
            resultText: "3", // Any string works
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Silverr",
          },
          {
            id: "Reignex",
            resultText: "1",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Reignex",
          },
        ],
      },
      {
        id: 5,
        name: "",
        nextMatchId: 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "2", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Oxidiot", // Unique identifier of any kind
            resultText: "3", // Any string works
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Oxidiot",
          },
          {
            id: "MoleyG",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "MoleyG",
          },
        ],
      },
      {
        id: 6,
        name: "",
        nextMatchId: 3, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "2", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Doogile", // Unique identifier of any kind
            resultText: "3", // Any string works
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Doogile",
          },
          {
            id: "Ancoboy",
            resultText: "2",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Ancoboy",
          },
        ],
      },
      {
        id: 7,
        name: "",
        nextMatchId: 3, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "2", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Cro", // Unique identifier of any kind
            resultText: "2", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Cro",
          },
          {
            id: "Dandannyboy",
            resultText: "3",
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Dandannyboy",
          },
        ],
      },
      {
        id: 8,
        name: "",
        nextMatchId: 4, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Silverr", // Unique identifier of any kind
            resultText: "2", // Any string works
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Silverr",
          },
          {
            id: "AutomattPL",
            resultText: "1",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "AutomattPL",
          },
        ],
      },
      {
        id: 9,
        name: "",
        nextMatchId: 4, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Reignex", // Unique identifier of any kind
            resultText: "2", // Any string works
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Reignex",
          },
          {
            id: "Pulsar",
            resultText: "1",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Pulsar",
          },
        ],
      },
      {
        id: 10,
        name: "",
        nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Oxidiot", // Unique identifier of any kind
            resultText: "2", // Any string works
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Oxidiot",
          },
          {
            id: "Ranik",
            resultText: "1",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Ranik",
          },
        ],
      },
      {
        id: 11,
        name: "",
        nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Priffin", // Unique identifier of any kind
            resultText: "0", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Priffin",
          },
          {
            id: "MoleyG",
            resultText: "2",
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "MoleyG",
          },
        ],
      },
      {
        id: 12,
        name: "",
        nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "7rowl", // Unique identifier of any kind
            resultText: "1", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "7rowl",
          },
          {
            id: "Doogile",
            resultText: "2",
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Doogile",
          },
        ],
      },
      {
        id: 13,
        name: "",
        nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Lowkey", // Unique identifier of any kind
            resultText: "1", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Lowkey",
          },
          {
            id: "Ancoboy",
            resultText: "2",
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Ancoboy",
          },
        ],
      },
      {
        id: 14,
        name: "",
        nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Orachi", // Unique identifier of any kind
            resultText: "0", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Orachi",
          },
          {
            id: "Cro",
            resultText: "2",
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Cro",
          },
        ],
      },
      {
        id: 15,
        name: "",
        nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Dandannyboy", // Unique identifier of any kind
            resultText: "2", // Any string works
            isWinner: true,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Dandannyboy",
          },
          {
            id: "Dylqn",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Dylqn",
          },
        ],
      },
    ],
    results: [
      {
        place: 1,
        name: "Silverr",
        prize: 1500,
      },
      {
        place: 2,
        name: "Doogile",
        prize: 750,
      },
      {
        place: 3,
        name: "Dandannyboy",
        prize: 250,
      },
      {
        place: 4,
        name: "Oxidiot",
      },
      {
        place: 5,
        name: "Reignex",
      },
      {
        place: 5,
        name: "Cro",
      },
      {
        place: 5,
        name: "MoleyG",
      },
      {
        place: 5,
        name: "Ancoboy",
      },
      {
        place: 9,
        name: "AutomattPL",
      },
      {
        place: 9,
        name: "Lowkey",
      },
      {
        place: 9,
        name: "Pulsar",
      },
      {
        place: 9,
        name: "Priffin",
      },
      {
        place: 9,
        name: "Dylqn",
      },
      {
        place: 9,
        name: "Orachi",
      },
      {
        place: 9,
        name: "7rowl",
      },
      {
        place: 9,
        name: "Ranik",
      },
    ],
  },
  {
    seasonId: 2,
    currentSeason: true,
    matches: [
      {
        id: 1,
        name: "",
        nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "4", // Text for Round Header
        startTime: "",
        state: "", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [],
      },
      {
        id: 2,
        name: "",
        nextMatchId: 1, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "", // Text for Round Header
        startTime: "",
        state: "", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [],
      },
      {
        id: 3,
        name: "",
        nextMatchId: 1, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "", // Text for Round Header
        startTime: "",
        state: "", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [],
      },
      {
        id: 4,
        name: "",
        nextMatchId: 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "2", // Text for Round Header
        startTime: "",
        state: "", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [],
      },
      {
        id: 5,
        name: "",
        nextMatchId: 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "2", // Text for Round Header
        startTime: "",
        state: "", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [],
      },
      {
        id: 6,
        name: "",
        nextMatchId: 3, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "2", // Text for Round Header
        startTime: "",
        state: "", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [],
      },
      {
        id: 7,
        name: "",
        nextMatchId: 3, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "2", // Text for Round Header
        startTime: "",
        state: "", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [],
      },
      {
        id: 8,
        name: "",
        nextMatchId: 4, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "1695120900",
        state: "", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Silverr", // Unique identifier of any kind
            resultText: "0", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Silverr",
          },
          {
            id: "AutomattPL",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "AutomattPL",
          },
        ],
      },
      {
        id: 9,
        name: "",
        nextMatchId: 4, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "1695603977",
        state: "SCHEDULED", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Reignex", // Unique identifier of any kind
            resultText: "0", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Reignex",
          },
          {
            id: "Pulsar",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Pulsar",
          },
        ],
      },
      {
        id: 10,
        name: "",
        nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "1695603977",
        state: "SCHEDULED", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Oxidiot", // Unique identifier of any kind
            resultText: "0", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Oxidiot",
          },
          {
            id: "Ranik",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Ranik",
          },
        ],
      },
      {
        id: 11,
        name: "",
        nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "1695603977",
        state: "SCHEDULED", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Priffin", // Unique identifier of any kind
            resultText: "0", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Priffin",
          },
          {
            id: "MoleyG",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "MoleyG",
          },
        ],
      },
      {
        id: 12,
        name: "",
        nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "1695603977",
        state: "SCHEDULED", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "7rowl", // Unique identifier of any kind
            resultText: "0", // Any string works
            isWinner: false,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "7rowl",
          },
          {
            id: "Doogile",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Doogile",
          },
        ],
      },
      {
        id: 13,
        name: "",
        nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "1695603977",
        state: "SCHEDULED", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Lowkey", // Unique identifier of any kind
            resultText: "0", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Lowkey",
          },
          {
            id: "Ancoboy",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Ancoboy",
          },
        ],
      },
      {
        id: 14,
        name: "",
        nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "1695603977",
        state: "SCHEDULED", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Orachi", // Unique identifier of any kind
            resultText: "0", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Orachi",
          },
          {
            id: "Cro",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Cro",
          },
        ],
      },
      {
        id: 15,
        name: "",
        nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1", // Text for Round Header
        startTime: "1695603977",
        state: "SCHEDULED", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: "Dandannyboy", // Unique identifier of any kind
            resultText: "0", // Any string works
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name: "Dandannyboy",
          },
          {
            id: "Dylqn",
            resultText: "0",
            isWinner: false,
            season_elo: 2000,
            personal_best: 126020,
            status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
            name: "Dylqn",
          },
        ],
      },
    ],
    results: [],
  },
]
