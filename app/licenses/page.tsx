"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PrivacyPage() {
  const path = usePathname()

  const items = [
    {
      title: "Java-WebSocket",
      href: "javawebsocket",
      license: "MIT License - Copyright © 2010-2020 Nathan Rajilich",
      sourceLink: "https://github.com/TooTallNate/Java-WebSocket/",
      licenseLink:
        "https://github.com/TooTallNate/Java-WebSocket/blob/master/LICENSE",
    },
    {
      title: "Fabric API",
      href: "fabricapi",
      license: "Apache License 2.0",
      sourceLink: "https://github.com/FabricMC/fabric/",
      licenseLink: "https://github.com/FabricMC/fabric/blob/1.20.1/LICENSE",
    },
    {
      title: "Fabric-ASM",
      href: "fabricasm",
      license: "Mozilla Public License 2.0",
      sourceLink: "https://github.com/Chocohead/Fabric-ASM/",
      licenseLink:
        "https://github.com/Chocohead/Fabric-ASM/blob/master/LICENSE",
    },
    {
      title: "SpeedRunIGT",
      href: "speedrunigt",
      license: "MIT License - Copyright © 2021 RedLime",
      sourceLink: "https://github.com/RedLime/SpeedRunIGT/",
      licenseLink: "https://github.com/RedLime/SpeedRunIGT/blob/1.16.1/LICENSE",
    },
    {
      title: "prettytime",
      href: "prettytime",
      license: "Apache License 2.0",
      sourceLink: "https://github.com/ocpsoft/prettytime/",
      licenseLink: "https://github.com/ocpsoft/prettytime/blob/master/LICENSE",
    },
    {
      title: "DiscordIPC",
      href: "discordipc",
      license: "Apache License 2.0",
      sourceLink: "https://github.com/CDAGaming/DiscordIPC/",
      licenseLink:
        "https://github.com/CDAGaming/DiscordIPC/blob/master/LICENSE",
    },
    {
      title: "ChunkCacher",
      href: "chunkcacher",
      license: "MIT License",
      sourceLink:
        "https://github.com/Minecraft-Java-Edition-Speedrunning/mcsr-chunkcacher-1.16-1.17.1/",
      licenseLink:
        "https://github.com/Minecraft-Java-Edition-Speedrunning/mcsr-chunkcacher-1.16-1.17.1/blob/main/LICENSE",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col space-y-6 py-8">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          {" "}
          <nav className="fixed grid w-[200px] items-start rounded border">
            {items.map((item) => (
              <Link href={`licenses/#${item.href}`}>
                {" "}
                <span
                  className={cn(
                    "group flex items-center border-b px-3 py-2 text-sm font-medium hover:bg-green-400 hover:text-green-800",
                    path === item.href ? "bg-accent" : "transparent"
                  )}
                >
                  <span>{item.title}</span>
                </span>
              </Link>
            ))}
          </nav>
        </aside>
        <ScrollArea className="h-full pl-8 pr-6 pt-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="mb-8 flex flex-col space-y-2"
              id={item.href}
            >
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="text-md">{item.license}</p>
              <div className="flex-col">
                <div>
                  Source:{" "}
                  <a
                    href={item.sourceLink}
                    className="text-sm hover:text-green-400 hover:underline"
                  >
                    {item.sourceLink}
                  </a>
                </div>
                <div>
                  License:{" "}
                  <a
                    href={item.licenseLink}
                    className="text-sm hover:text-green-400 hover:underline"
                  >
                    {item.licenseLink}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}
