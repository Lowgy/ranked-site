export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "MCSR Ranked",
  description:
    "Home of MCSR Ranked, a Minecraft Mod that adds a ranked system to Minecraft Speedruns.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
    },
    {
      title: "Download",
      href: "/download",
    },
    {
      title: "Guidelines",
      href: "/guidelines",
    },
  ],
  links: {
    github: "https://github.com/lowgy",
    discord: "https://discord.com/invite/nnjUSyDErj",
    apiDocs: "https://docs.mcsrranked.com/",
    licenses: "/licenses",
    privacyPolicy: "/privacy",
  },
}
