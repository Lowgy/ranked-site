import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function GuidelinesPage() {
  return (
    <section className="container grid  items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2 md:items-center">
        <h1 className="text-3xl font-bold">MCSR Ranked - Guidelines</h1>
        <Card className="w-3/4">
          <div className="px-6 py-4">
            1. Do not modify the mod or attempt to cheat.
          </div>
          <Separator />
          <div className="px-6 py-4">
            2. All runs must follow the rules of the speedrun.com Minecraft Any%
            Glitchless leaderboard.
          </div>
          <Separator />
          <div className="px-6 py-4">
            3. Do not purposefully lose games or boost your account with the
            intention of queuing into players outside your skill level.
          </div>
          <Separator />
          <div className="px-6 py-4">
            4. Do not post toxic messages or NSFW content in chat.
          </div>
          <Separator />
          <div className="px-6 py-4">
            5. If you have had toxic tendencies recently in the MCSR community,
            your chat will be disabled for all opponents.
          </div>
          <Separator />
          <div className="px-6 py-4">6. Do not use alternate accounts.</div>
        </Card>
      </div>
      <div className="flex flex-col items-start gap-2 md:items-center">
        <h1 className="text-3xl font-bold">MCSR Ranked - Allowed Mods</h1>
        <Card className="w-3/4">
          <div className="px-6 py-4">
            <Button className="w-full">
              <Link
                href="https://gist.github.com/RedLime/bb1d3f49a01ff43f21bc218da964cdd8"
                target="_blank"
              >
                Check Mod List
              </Link>
            </Button>
          </div>
          <Separator />
          <div className="px-6 py-4">
            Some mods are unofficial versions created separately for
            speedrunning. So we would recommended to download the mod with the
            MCSR Ranked Launcher.
          </div>
        </Card>
      </div>
    </section>
  )
}
