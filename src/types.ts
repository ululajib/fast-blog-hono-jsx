// Generated bindings can augment this interface via wrangler typegen.
declare global {
  interface CloudflareBindings {
    SITE_URL?: string
    ADSENSE_CLIENT_ID?: string
  }
}

export type AppBindings = {
  Bindings: CloudflareBindings
}

declare module 'markdown' {
  type MarkdownDialect = 'Gruber' | 'Maruku'

  export const markdown: {
    toHTML: (markdownSource: string, dialect?: MarkdownDialect) => string
  }
}
