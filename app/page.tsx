import Image from "next/image"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import FeaturesCarousel from "@/components/features-carousel"

export default function IndexPage() {
  return (
    <main>
      <section className="bg-hero-image px-4 py-48 text-white ">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Welcome to MCSR Ranked!
            </h1>
            <p className="mb-4 max-w-2xl font-light text-white md:text-lg lg:mb-2 lg:text-xl">
              Take on the challenge of completing Minecraft in record time and
              climb the ranks to become the ultimate speedrunning champion.
            </p>
            <Link
              href="/download"
              className="mt-6 inline-block rounded bg-white px-4 py-2 font-bold text-blue-500 transition-colors duration-200 hover:bg-gray-200"
            >
              Get started
            </Link>
          </div>
          <div className="ml-24 hidden lg:col-span-5 lg:mt-0 lg:flex">
            <Image src="/test1.png" width={400} height={400} alt="test" />
          </div>
        </div>
      </section>
      <section className="px-4 py-24">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Features</h2>
          <FeaturesCarousel />
        </div>
      </section>
      <Separator />
      <section className="px-4 py-16">
        <div className="container mx-auto text-center">
          <h1 className="mb-8 text-4xl font-bold">Join the Discord!</h1>
          <p className="text-lg text-gray-700">
            Questions, comments, or just want to hang out? Join the discord
          </p>
          <Link
            href="https://discord.gg/your-discord-invite-link"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-blue-600"
          >
            Join!
          </Link>
        </div>
      </section>
    </main>
  )
}
