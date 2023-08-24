"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  IconDefinition,
  faApple,
  faLinux,
  faWindows,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"

export default function DownloadPage() {
  const [downloadLink, setDownloadLink] = useState("Select Mod Pack Type")
  const [osSelection, setOsSelection] = useState("-")
  const { toast } = useToast()

  const setCopyText = (downloadLink: string, osSelection: string) => {
    if (downloadLink === "Select Mod Pack Type") return
    setDownloadLink(downloadLink)
    setOsSelection(osSelection)
  }

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold">Downloads</h2>
      </div>
      <div className="container mx-auto text-center md:hidden">
        <p>
          Sorry! You must be on a non mobile device to download the modpack!
        </p>
      </div>
      <div className="container mx-auto hidden md:block">
        <div className="-mx-4 flex flex-wrap">
          <DownloadOption
            title="Windows"
            icon={faWindows}
            downloadLinks={[
              {
                title: "Normal Pack",
                downloadLink:
                  "https://redlime.github.io/MCSRMods/modpacks/v4/MCSRRanked-Windows-1.16.1.mrpack",
              },
              {
                title: "Pro Pack",
                downloadLink:
                  "https://redlime.github.io/MCSRMods/modpacks/v4/MCSRRanked-Windows-1.16.1-Pro.mrpack",
              },
              {
                title: "All-in Pack",
                downloadLink:
                  "https://redlime.github.io/MCSRMods/modpacks/v4/MCSRRanked-Windows-1.16.1-All.mrpack",
              },
            ]}
            setCopyText={setCopyText}
            selectedOS={osSelection}
          />
          <DownloadOption
            title="macOS"
            icon={faApple}
            downloadLinks={[
              {
                title: "Normal Pack",
                downloadLink:
                  "https://redlime.github.io/MCSRMods/modpacks/v4/MCSRRanked-OSX-1.16.1.mrpack",
              },
              {
                title: "Pro Pack",
                downloadLink:
                  "https://redlime.github.io/MCSRMods/modpacks/v4/MCSRRanked-OSX-1.16.1-Pro.mrpack",
              },
              {
                title: "All-in Pack",
                downloadLink:
                  "https://redlime.github.io/MCSRMods/modpacks/v4/MCSRRanked-OSX-1.16.1-All.mrpack",
              },
            ]}
            setCopyText={setCopyText}
            selectedOS={osSelection}
          />
          <DownloadOption
            title="Linux"
            icon={faLinux}
            downloadLinks={[
              {
                title: "Normal Pack",
                downloadLink:
                  "https://redlime.github.io/MCSRMods/modpacks/v4/MCSRRanked-Linux-1.16.1.mrpack",
              },
              {
                title: "Pro Pack",
                downloadLink:
                  "https://redlime.github.io/MCSRMods/modpacks/v4/MCSRRanked-Linux-1.16.1-Pro.mrpack",
              },
              {
                title: "All-in Pack",
                downloadLink:
                  "https://redlime.github.io/MCSRMods/modpacks/v4/MCSRRanked-Linux-1.16.1-All.mrpack",
              },
            ]}
            setCopyText={setCopyText}
            selectedOS={osSelection}
          />
        </div>
        <div className="relative mt-2 text-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold">
          <pre className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-2 dark:bg-zinc-900">
            <div className="py-2">
              <code className="relative rounded  px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
                {downloadLink}
              </code>
            </div>
          </pre>
          <Button
            className="absolute right-1 top-2 z-10 inline-flex items-center justify-center rounded-md bg-zinc-900 text-sm font-medium text-zinc-50  transition-colors hover:bg-zinc-700 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            onClick={() => {
              toast({
                description: "Copied link!",
              })
              navigator.clipboard.writeText(downloadLink)
            }}
            disabled={downloadLink === "Select Mod Pack Type"}
          >
            {" "}
            <Copy />
          </Button>
        </div>
        <Separator className="my-8" />
        <div className="container mx-auto text-center">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2">
              <h2 className="text-2xl font-semibold">
                Download only Mod File (.jar)
              </h2>
              <p className="text-sm">
                If you want to download only mod file(.jar), go to the Modrinth
                page.
              </p>
              <Button className="mt-4">
                <Link
                  href="https://modrinth.com/mod/mcsr-ranked/versions/"
                  target="_blank"
                >
                  Download (Modrinth)
                </Link>
              </Button>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="text-2xl font-semibold">
                How to import modpack with MultiMC/PrismLauncher
              </h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IAMu4lLFE6M"
                title="Youtube Player"
                allowFullScreen
                className="mx-auto mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type DownloadOptionProps = {
  title: string
  icon: IconDefinition
  downloadLinks: Array<DownloadSelection>
  setCopyText: (downloadLink: string, osSelection: string) => void
  selectedOS: string
}

type DownloadSelection = {
  title: string
  downloadLink: string
}

const DownloadOption = ({
  title,
  icon,
  downloadLinks,
  setCopyText,
  selectedOS,
}: DownloadOptionProps) => {
  const [link, setLink] = useState("Select Mod Pack Type")

  useEffect(() => {
    setCopyText(link, title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link])
  return (
    <div className="w-full px-4 md:w-1/3">
      <Card className="mb-8">
        <div className="px-6 py-4">
          <h2 className="mb-4 text-xl font-semibold">
            {title}{" "}
            <FontAwesomeIcon
              icon={icon}
              height={40}
              width={30}
              className="inline"
            />
          </h2>
          <Select value={link} onValueChange={setLink}>
            <SelectTrigger>
              {selectedOS === title ? (
                <SelectValue />
              ) : (
                <SelectValue>-</SelectValue>
              )}
            </SelectTrigger>
            <SelectContent>
              {downloadLinks.map((downloadLink) => (
                <SelectItem
                  value={downloadLink.downloadLink}
                  key={downloadLink.title}
                >
                  {downloadLink.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>
    </div>
  )
}
