import Link from "next/link"

export default function IndexPage() {
  return (
    <main>
      <section className="bg-blue-500 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to MCSR Ranked</h1>
          <p className="text-lg">
            Take on the challenge of completing Minecraft in record time and
            climb the ranks to become the ultimate speedrunning champion.
          </p>
          <Link
            href="/download"
            className="mt-6 inline-block rounded bg-white px-4 py-2 font-bold text-blue-500 transition-colors duration-200 hover:bg-gray-200"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section className="px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Features</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Ranked Mode</h3>
              <p className="text-gray-700">
                Race in a speedrun against an opponent of simiiar skill, in the
                same seed and at the same time. Putting your elo on the line to
                climb the ranks!
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Casual Mode</h3>
              <p className="text-gray-700">
                Don&apos;t feel like risking elo or just want to play with
                friends? Then casual mode is for you! No risk of dropping on the
                leaderboard, and great for practice!
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Private Rooms</h3>
              <p className="text-gray-700">
                Want to play with friends? Create a private room and invite
                them, up to 33 players! Custom settings and more!
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Leaderboard and Stats</h3>
              <p className="text-gray-700">
                See how you stack up against the competition with a built in
                leaderboard and profile stats, including your elo, wins, losses,
                and more!
              </p>
            </div>
          </div>
        </div>
      </section>
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
