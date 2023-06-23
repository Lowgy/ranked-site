"use client"

import React from "react"
import Carousel from "react-multi-carousel"

import "react-multi-carousel/lib/styles.css"
import { addRank, eloColor, timeFormat } from "@/lib/utils"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

export default function FeaturesCarousel() {
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
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-gray-700">Ranked Mode</h3>
          <p className="text-gray-700">
            Race in a speedrun against an opponent of simiiar skill, in the same
            seed and at the same time. Putting your elo on the line to climb the
            ranks!
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-gray-700">Casual Mode</h3>
          <p className="text-gray-700">
            Don&apos;t feel like risking elo or just want to play with friends?
            Then casual mode is for you! No risk of dropping on the leaderboard,
            and great for practice!
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-gray-700">
            Private Rooms
          </h3>
          <p className="text-gray-700">
            Want to play with friends? Create a private room and invite them, up
            to 33 players! Custom settings and more!
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-gray-700">
            Leaderboard and Stats
          </h3>
          <p className="text-gray-700">
            See how you stack up against the competition with a built in
            leaderboard and profile stats, including your elo, wins, losses, and
            more!
          </p>
        </div>
      </Carousel>
    </>
  )
}
