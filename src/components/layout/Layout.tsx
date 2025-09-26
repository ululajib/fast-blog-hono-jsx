import type { JSX } from 'hono/jsx'
import { siteConfig } from '../../content/site-config'
import { Footer } from './Footer'
import { Header } from './Header'

export type HeroContent = {
  title: string
  subtitle?: string
  callToAction?: JSX.Element
}

export type LayoutProps = {
  hero?: HeroContent
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ hero, children }: LayoutProps) => {
  return (
    <>
      <Header navLinks={siteConfig.navLinks} title={siteConfig.title} />
      <main class="main-shell">
        {hero ? (
          <section class="hero" id="about">
            <h1 class="hero__title">{hero.title}</h1>
            {hero.subtitle ? <p class="hero__subtitle">{hero.subtitle}</p> : null}
            {hero.callToAction ?? null}
          </section>
        ) : null}
        {children}
      </main>
      <Footer note={siteConfig.footerNote} socials={siteConfig.socials} />
    </>
  )
}

export type LayoutMeta = {
  description?: string
  canonical?: string
  keywords?: string[]
}

export const toMetaDescriptors = (meta?: LayoutMeta) => {
  if (!meta) return []
  const descriptors: JSX.Element[] = []
  if (meta.description) {
    descriptors.push(<meta name="description" content={meta.description} />)
  }
  if (meta.keywords && meta.keywords.length > 0) {
    descriptors.push(<meta name="keywords" content={meta.keywords.join(', ')} />)
  }
  if (meta.canonical) {
    descriptors.push(<link rel="canonical" href={meta.canonical} />)
  }
  return descriptors
}
