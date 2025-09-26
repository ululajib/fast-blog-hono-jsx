import type { Article } from '../../content/articles'
import { formatDate } from '../../utils/formatDate'
import { Badge } from './Badge'
import { Button } from './Button'

export type ArticleCardProps = {
  article: Article
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article class="article-card">
      <header>
        <p class="article-card__meta">
          <span>{formatDate(article.publishedAt)}</span>
          {article.updatedAt ? <span>Diperbarui {formatDate(article.updatedAt)}</span> : null}
        </p>
        <h2 class="article-card__title">
          <a href={`/article/${article.slug}`}>{article.title}</a>
        </h2>
      </header>
      <p>{article.excerpt}</p>
      <div class="badges" aria-label="Artikel tags">
        {article.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>
      <div class="article-card__actions">
        <Button href={`/article/${article.slug}`} aria-label={`Baca ${article.title}`}>
          Baca selengkapnya
        </Button>
      </div>
    </article>
  )
}
