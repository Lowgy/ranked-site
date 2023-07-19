"use client"

import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className="container grid items-center pb-8 pt-6 md:py-10">
      <h1 className="font-bold">User Not Found!</h1>
      <p>
        Looks like this user has not played a MCSR Ranked game! If you think
        this is a mistake, please contact us on our Discord server.
      </p>
      <br />
      <br />
      <Link href="/leaderboard">
        <p className="text-blue-500 hover:text-purple-300">
          Go back to leaderboard
        </p>
      </Link>
    </div>
  )
}

export default NotFoundPage
