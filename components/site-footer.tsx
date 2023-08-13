import Link from "next/link"

import { siteConfig } from "@/config/site"

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
            className="hover:text-green-400"
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
            className="hover:text-green-400"
          >
            Privacy Policy
          </Link>
          <Link
            href={siteConfig.links.apiDocs}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
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
