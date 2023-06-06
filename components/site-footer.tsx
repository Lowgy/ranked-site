import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          Feedback?{" "}
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noreferrer"
          >
            Join our Discord Server
          </Link>
          !
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          © 2022-23 MCSR Ranked
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link
            href={siteConfig.links.privacyPolicy}
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </Link>
          <Link
            href={siteConfig.links.apiDocs}
            target="_blank"
            rel="noreferrer"
          >
            API Docs
          </Link>
        </div>
        {/* <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          </nav>
        </div> */}
      </div>
    </footer>
  )
}
