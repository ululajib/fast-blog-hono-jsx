import { Hono } from 'hono'
import { renderer } from './renderer'
import { articleHandler } from './routes/article'
import { homeHandler } from './routes/home'
import { sitemapHandler } from './routes/sitemap'
import type { AppBindings } from './types'

const app = new Hono<AppBindings>()

app.use('*', renderer)

app.get('/', homeHandler)
app.get('/article/:slug', articleHandler)
app.get('/sitemap.xml', sitemapHandler)

app.notFound((c) =>
  c.render(
    <div class="main-shell">
      <h1>Halaman tidak ditemukan</h1>
      <p>Periksa kembali URL atau kembali ke beranda.</p>
      <a class="button" href="/">
        Kembali ke beranda
      </a>
    </div>,
    {
      title: '404 · Blog Singkat'
    }
  )
)

export default app
