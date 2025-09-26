export type NavLink = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
}

export const siteConfig = {
  title: 'indovecation v2',
  description: 'Article platform powered by Experience Cloud and Hono.',
  navLinks: [
    { label: 'Beranda', href: '/' },
    { label: 'Artikel', href: '/#articles' },
    { label: 'Tentang', href: '/#about' }
  ] satisfies NavLink[],
  socials: [
    { label: 'GitHub', href: 'https://github.com/ronamay' },
    { label: 'Cloudflare', href: 'https://developers.cloudflare.com/' }
  ] satisfies SocialLink[],
  footerNote: 'Best article platform ever built. Powered by Cloudflare Workers and Hono.'
}

export type SiteConfig = typeof siteConfig
