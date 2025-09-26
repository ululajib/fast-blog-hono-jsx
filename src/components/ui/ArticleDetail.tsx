import { Fragment } from 'hono/jsx'
import type { Article } from '../../content/articles'
import { formatDate } from '../../utils/formatDate'
import { AdSense } from './AdSense'
import { Badge } from './Badge'

export type ArticleDetailProps = {
  article: Article
  adsenseClientId?: string
  adsenseSlotId?: string
}

export const ArticleDetail = ({ article, adsenseClientId, adsenseSlotId }: ArticleDetailProps) => {
  return (
    <article class="article-detail">
      <header class="article-detail__header">
        <p class="article-card__meta">
          <span>{formatDate(article.publishedAt)}</span>
          {article.updatedAt ? <span>Diperbarui {formatDate(article.updatedAt)}</span> : null}
        </p>
        <h1>{article.title}</h1>
        <div class="badges">
          {article.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>
      </header>
      <AdSense clientId={adsenseClientId} slotId={adsenseSlotId} />
      {article.heroImage ? (
        <img src={article.heroImage} alt={article.title} loading="lazy" />
      ) : null}
      <section class="article-detail__body">
        {article.content.map((paragraph, index) => (
          <Fragment key={`${article.id}-${index}`}>
            <p>{paragraph}</p>
            {index === 1 ? <AdSense clientId={adsenseClientId} slotId={adsenseSlotId} /> : null}
          </Fragment>
        ))}
      </section>
      
    </article>
  )
}
