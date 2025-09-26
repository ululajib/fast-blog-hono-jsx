import type { Context } from 'hono'
import { Layout, type LayoutMeta, toMetaDescriptors } from '../components/layout/Layout'
import { ArticleDetail } from '../components/ui/ArticleDetail'
import { siteConfig } from '../content/site-config'
import { getArticleBySlug, getArticles } from '../utils/contentHelpers'
import { buildCanonical, composeTitle } from '../utils/seoHelpers'
import type { AppBindings } from '../types'

type AppContext = Context<AppBindings>

export const articleHandler = (c: AppContext) => {
  const { slug } = c.req.param()
  const article = getArticleBySlug(slug)

  if (!article) {
    return c.notFound()
  }

  const baseUrl = new URL(c.req.url).origin
  const pageTitle = composeTitle(siteConfig, article.title)
  const meta: LayoutMeta = {
    description: article.excerpt,
    canonical: buildCanonical(baseUrl, c.req.path),
    keywords: article.tags
  }
  const adsenseClientId = c.env?.ADSENSE_CLIENT_ID
  const recentArticles = getArticles()
    .filter((item) => item.id !== article.id)
    .slice(0, 9)

  return c.render(
    <Layout>
      <ArticleDetail article={article} adsenseClientId={adsenseClientId} adsenseSlotId={c.env?.ADSENSE_SLOT_ID} />
      {recentArticles.length > 0 ? (
        <section class="recent-articles" aria-labelledby="recent-articles-heading">
          <h2 id="recent-articles-heading">Recent Articles</h2>
          <ul class="recent-articles__list">
            {recentArticles.map((item) => (
              <li key={item.id}>
                <a href={`/article/${item.slug}`} >{item.title}</a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </Layout>,
    {
      title: pageTitle,
      head: <>{toMetaDescriptors(meta)}</>
    }
  )
}
