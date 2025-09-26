import type { Context } from 'hono'
import { getArticlePaths } from '../utils/contentHelpers'
import type { AppBindings } from '../types'

type AppContext = Context<AppBindings>

export const sitemapHandler = (c: AppContext) => {
  const origin = c.env?.SITE_URL ?? new URL(c.req.url).origin
  const paths = ['/', ...getArticlePaths()]
  const urls = paths
    .map((path) => `    <url>\n      <loc>${new URL(path, origin).toString()}</loc>\n    </url>`)
    .join('\n')

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  return c.body(body, 200, {
    'Content-Type': 'application/xml; charset=utf-8'
  })
}
