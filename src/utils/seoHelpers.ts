import type { SiteConfig } from '../content/site-config'

export type PageMeta = {
  title?: string
  description?: string
  canonical?: string
  keywords?: string[]
}

export function composeTitle(config: SiteConfig, pageTitle?: string): string {
  return pageTitle ? `${pageTitle} · ${config.title}` : config.title
}

export function buildCanonical(baseUrl: string | undefined, pathname: string): string | undefined {
  if (!baseUrl) return undefined
  const url = new URL(pathname, baseUrl)
  return url.toString()
}

export function stringifyKeywords(keywords?: string[]): string | undefined {
  if (!keywords || keywords.length === 0) return undefined
  return Array.from(new Set(keywords)).join(', ')
}
