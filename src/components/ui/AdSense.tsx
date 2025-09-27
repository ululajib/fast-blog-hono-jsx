import type { JSX } from 'hono/jsx'

export type AdSenseProps = {
  clientId?: string
  slotId?: string
}

export const AdSenseHead = ({ clientId }: { clientId?: string }): JSX.Element | null => {
  if (!clientId) {
    return null
  }

  const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`

  return <script async src={src} crossOrigin="anonymous" />
}

const FALLBACK_MESSAGE = 'Konfigurasikan ADSENSE_CLIENT_ID di wrangler.jsonc sebelum produksi.'

export const AdSense = ({ clientId, slotId = '3062201357' }: AdSenseProps) => {
  if (!clientId) {
    return (
      <aside class="adsense-box" aria-label="Advertisement configuration reminder">
        <div class="adsense-placeholder">{FALLBACK_MESSAGE}</div>
      </aside>
    )
  }

  return (
    <aside class="adsense-box" aria-label="Advertisement">
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
    </aside>
  )
}
