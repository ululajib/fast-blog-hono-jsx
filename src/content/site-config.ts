export type NavLink = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
}

export const siteConfig = {
  title: 'V3 iindonesiavacation.biz.id',
  description: 'Explore articles shaped by real journeys, personal growth, and lessons learned along the way. Honest, thoughtful, and relatable writing that invites you to reflect, learn, and find your own meaning.',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Article', href: '/#articles' },
    { label: 'About Us', href: '/#about' }
  ] satisfies NavLink[],
  socials: [
    { label: 'GitHub', href: 'https://github.com/ronamay' },
    { label: 'Cloudflare', href: 'https://developers.cloudflare.com/' }
  ] satisfies SocialLink[],
  footerNote: 'Best article platform ever built. Powered by Cloudflare Workers and Hono.'
}

export type SiteConfig = typeof siteConfig
