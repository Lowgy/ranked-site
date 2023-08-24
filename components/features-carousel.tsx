"use client"

import React from "react"
import Carousel from "react-multi-carousel"

import "react-multi-carousel/lib/styles.css"
import Image from "next/image"

import { addRank, eloColor, timeFormat } from "@/lib/utils"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const features = [
  {
    title: "Ranked Mode",
    image: "/headtohead.png",
    description:
      "Race in a speedrun against an opponent of similar skill, in the same seed and at the same time. Putting your elo on the line to climb the ranks!",
  },
  {
    title: "Casual Mode",
    image: "/eye.png",
    description:
      "Don't feel like risking elo or just want to play with friends? Then casual mode is for you! No risk of dropping on the leaderboard, and great for practice!",
  },
  {
    title: "Private Rooms",
    image: "/sword.png",
    description:
      "Want to play with friends? Create a private room and invite them, up to 33 players! Custom settings and more!",
  },
  {
    title: "Leaderboard and Stats",
    image: "/ranking.png",
    description:
      "See how you stack up against the competition with a built in leaderboard and profile stats, including your elo, wins, losses, and more!",
  },
]

export default function FeaturesCarousel() {
  return (
    <>
      <Carousel
        responsive={responsive}
        keyBoardControl={true}
        autoPlay={false}
        autoPlaySpeed={4000}
        infinite={true}
        arrows={true}
      >
        {features.map((feature, index) => (
          <div
            className="flex flex-col items-center overflow-hidden rounded-lg bg-test p-24 shadow-lg dark:bg-white md:flex-row"
            key={index}
          >
            <div className="md:ml-24 md:w-1/2">
              <Image
                src={feature.image}
                alt="Image"
                width={200}
                height={200}
                className="md:w-1/2"
              />
            </div>
            <div className="p-4 md:mr-24 md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold text-white dark:text-gray-700">
                {feature.title}
              </h2>
              <p className=" text-white dark:text-gray-700">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  )
}
