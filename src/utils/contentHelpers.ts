import { articles, type Article } from '../content/articles'

export function getArticles(): Article[] {
  return [...articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlePaths(): string[] {
  return articles.map((article) => `/article/${article.slug}`)
}
