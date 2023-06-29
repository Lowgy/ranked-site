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
    image: "/eye.png",
    description:
      "Race in a speedrun against an opponent of similar skill, in the same seed and at the same time. Putting your elo on the line to climb the ranks!",
  },
  {
    title: "Casual Mode",
    image: "/diamond.png",
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
    image: "/trophy.png",
    description:
      "See how you stack up against the competition with a built in leaderboard and profile stats, including your elo, wins, losses, and more!",
  },
]

export default function FeaturesCarousel() {
  return (
    // TODO: Create a data object so they you just update the object and can loop through!
    <>
      <Carousel
        responsive={responsive}
        keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite={true}
        arrows={false}
      >
        {/* <div className="rounded-lg bg-white p-6 shadow-lg">
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
        </div> */}
        {features.map((feature, index) => (
          <div
            className="bg-test flex flex-col items-center overflow-hidden rounded-lg p-24 shadow-lg dark:bg-white md:flex-row"
            key={index}
          >
            <div className="ml-24 md:w-1/2">
              <Image
                src={feature.image}
                alt="Image"
                width={50}
                height={50}
                className="w-1/2"
              />
            </div>
            <div className="mr-24 p-4 md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold text-gray-700">
                {feature.title}
              </h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
        {/* <div className="flex flex-col items-center overflow-hidden rounded-lg bg-white p-24 shadow-lg md:flex-row">
          <div className="ml-24 md:w-1/2">
            <Image
              src="/trophy.png"
              alt="Image"
              width={50}
              height={50}
              className="w-1/2"
            />
          </div>
          <div className="mr-24 p-4 md:w-1/2">
            <h2 className="mb-4 text-2xl font-bold">Card Title</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
              justo id ligula aliquam auctor. In consequat lectus ut fermentum
              vulputate.
            </p>
          </div>
        </div> */}
      </Carousel>
    </>
  )
}
