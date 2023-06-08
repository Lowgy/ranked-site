import Link from "next/link"
import { ChevronDown, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DownloadPage() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold">Downloads</h2>
      </div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <Card className="mb-8">
              <div className="px-6 py-4">
                <h2 className="mb-4 text-xl font-semibold">
                  Ranked Launcher - Windows
                </h2>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full">
                      Download Now
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        Download Installer (Recommended)
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="https://github.com/MCSR-Ranked/Launcher/releases/tag/v1.3.0.1"
                          target="_blank"
                        >
                          Download .exe or .jar
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <Card className="mb-8">
              <div className="px-6 py-4">
                <h2 className="mb-4 text-xl font-semibold">
                  Ranked Launcher - MacOS / Linux
                </h2>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full">
                      Download Now
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link
                          href="https://github.com/MCSR-Ranked/Launcher/releases/tag/v1.3.0.1"
                          target="_blank"
                        >
                          Download .jar or .zip
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto mb-8 text-center">
          <h2 className="mb-2 text-xl font-bold">Download Java</h2>
          <p className="mb-6">
            If you do not use the Windows Installer, the launcher will not run
            if Java is not installed on your PC.
          </p>
          <Button asChild>
            <Link href="https://adoptium.net/temurin/releases/" target="_blank">
              Download (Adoptium OpenJDK 17)
            </Link>
          </Button>
        </div>
        <div className="container mx-auto mb-8 text-center">
          <h2 className="mb-2 text-xl font-bold">
            Download only Mod File (.jar)
          </h2>
          <p className="mb-6">
            If you want to download only mod file(.jar), go to the Modrinth
            page.
          </p>
          <Button asChild>
            <Link
              href="https://modrinth.com/mod/mcsr-ranked/versions/"
              target="_blank"
            >
              Download (Modrinth)
            </Link>
          </Button>
        </div>
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-xl font-bold">
            Ranked Launcher Source (GitHub)
          </h2>
          <Button asChild>
            <Link
              href="https://github.com/MCSR-Ranked/Launcher"
              target="_blank"
            >
              Check Repo <Github className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
