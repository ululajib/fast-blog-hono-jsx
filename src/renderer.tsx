import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, ViteClient } from 'vite-ssr-components/hono'

export const renderer = jsxRenderer(({ children, title, head }, c) => {
  const adsenseClientId = c.env?.ADSENSE_CLIENT_ID
  const adsenseScriptSrc = adsenseClientId
    ? `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`
    : undefined

  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title ?? 'Blog Singkat'}</title>
        <ViteClient />
        <Link rel="stylesheet" href="/src/styles/globals.css" />
        <Link rel="stylesheet" href="/src/styles/components.css" />
        <Link rel="stylesheet" href="/src/styles/mobile.css" />
        <Link rel="stylesheet" href="/src/styles/print.css" />
        {head}
        {adsenseScriptSrc ? <script async src={adsenseScriptSrc} crossOrigin="anonymous" /> : null}
      </head>
      <body>{children}</body>
    </html>
  )
})
