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
    title: 'Stories Worth Sharing – Real Experiences, Honest Insights',
    subtitle:
      'Discover authentic stories and lessons from real-life experiences. From everyday reflections to valuable insights, each article is written to inspire, connect, and resonate with readers who value genuine perspectives.',
    callToAction: (
      <div class="hero__actions">
        <Button href="/#articles">Start Reading</Button>
        <Button href="/#about" variant="ghost">
          About platform
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
        <h2>New Article</h2>
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
