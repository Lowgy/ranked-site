import { ChevronDown } from "lucide-react"

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
        <h2 className="mb-8 text-3xl font-bold">Download</h2>
      </div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <Card className="mb-8">
              <div className="px-6 py-4">
                <h2 className="mb-4 text-xl font-semibold">
                  MCSR Ranked Launcher - Windows
                </h2>
                <p className="mb-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac nisi eget nunc sollicitudin aliquam. Mauris suscipit
                  ultrices ante at feugiat.
                </p>
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
                      <DropdownMenuItem>Download .exe or .jar</DropdownMenuItem>
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
                  MCSR Ranked Launcher - MacOS / Linux
                </h2>
                <p className="mb-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac nisi eget nunc sollicitudin aliquam. Mauris suscipit
                  ultrices ante at feugiat.
                </p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full">
                      Download Now
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Download .jar or .zip</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
