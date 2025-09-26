import type { Context } from 'hono'
import { Layout, type HeroContent, type LayoutMeta, toMetaDescriptors } from '../components/layout/Layout'
import { Button } from '../components/ui/Button'
import { ArticleCard } from '../components/ui/ArticleCard'
import { siteConfig } from '../content/site-config'
import { composeTitle, buildCanonical } from '../utils/seoHelpers'
import { getArticles } from '../utils/contentHelpers'
import type { AppBindings } from '../types'

type AppContext = Context<AppBindings>

export const homeHandler = (c: AppContext) => {
  const articles = getArticles()
  const hero: HeroContent = {
    title: 'Modern Classic untuk Praktisi Cloudflare',
    subtitle:
      'Kurasi artikel tentang Cloudflare Workers, Hono, dan arsitektur serverless dengan pengalaman membaca yang hangat dan elegan.',
    callToAction: (
      <div class="hero__actions">
        <Button href="/#articles">Mulai membaca</Button>
        <Button href="/#about" variant="ghost">
          Tentang platform
        </Button>
      </div>
    )
  }
  const baseUrl = new URL(c.req.url).origin
  const meta: LayoutMeta = {
    description: siteConfig.description,
    canonical: buildCanonical(baseUrl, c.req.path),
    keywords: ['hono', 'cloudflare', 'worker', 'vite']
  }

  return c.render(
    <Layout hero={hero}>
      <section id="articles">
        <h2>Artikel terbaru</h2>
        <div class="articles-grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </Layout>,
    {
      title: composeTitle(siteConfig, undefined),
      head: <>{toMetaDescriptors(meta)}</>
    }
  )
}
