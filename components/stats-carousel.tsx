"use client"

import React from "react"
import Carousel from "react-multi-carousel"

import "react-multi-carousel/lib/styles.css"
import { addRank, eloColor, timeFormat } from "@/lib/utils"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export default function StatsCarousel(data: any) {
  const userData = data.data

  return (
    <>
      <Carousel
        responsive={responsive}
        keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite={true}
        arrows={false}
      >
        <div className=" rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Total Games</h3>
          <p className="">{userData.total_played}</p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Wins (Season)</h3>
          <p className="">{userData.records[2].win}</p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Losses (Season)</h3>
          <p className="">{userData.records[2].lose}</p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Win Rate (Season)</h3>
          <p className="">
            {(
              (userData.records[2].win /
                (userData.records[2].win +
                  userData.records[2].lose +
                  userData.records[2].draw)) *
              100
            ).toFixed(2)}{" "}
            %
          </p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Best Win Streak</h3>
          <p className="">{userData.highest_winstreak}</p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Current Win Streak</h3>
          <p className="">{userData.current_winstreak}</p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Best Elo</h3>
          <p className={`${eloColor(userData.best_elo_rate)}`}>
            {userData.best_elo_rate} - {addRank(userData.best_elo_rate)}
          </p>
        </div>
        <div className="rounded-lg border-2 border-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Best Time</h3>
          <p className="">{timeFormat(userData.best_record_time)}</p>
        </div>
      </Carousel>
    </>
  )
}
