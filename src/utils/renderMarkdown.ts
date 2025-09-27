import { markdown } from 'markdown'

const stripSharedIndent = (source: string) => {
  const normalized = source.replace(/\r\n/g, '\n').trim()
  const lines = normalized.split('\n')
  const indentCandidates = lines
    .map((line) => {
      if (!line.trim()) {
        return null
      }
      const match = line.match(/^(\s+)/)
      return match ? match[1].length : null
    })
    .filter((length): length is number => length !== null && length > 0)

  const minIndent = indentCandidates.length > 0 ? Math.min(...indentCandidates) : 0

  if (minIndent === 0) {
    return lines.join('\n')
  }

  return lines
    .map((line) => {
      if (!line.trim()) {
        return ''
      }
      if (line.startsWith(' '.repeat(minIndent))) {
        return line.slice(minIndent)
      }
      return line.replace(/^\s+/, '')
    })
    .join('\n')
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export const renderMarkdownBlock = (block: string) => {
  if (!block) {
    return ''
  }
  const normalized = stripSharedIndent(block)
  const html = markdown.toHTML(normalized)
  const trimmed = html.trim()

  if (trimmed.startsWith('<pre><code>')) {
    const containsFence = /```/.test(block)

    if (!containsFence) {
      const paragraphs = normalized
        .split(/\n{2,}/)
        .map((section) => section.trim())
        .filter(Boolean)
        .map((section) => `<p>${escapeHtml(section).replace(/\n+/g, ' ')}</p>`)
        .join('\n')

      if (paragraphs) {
        return paragraphs
      }
    }
  }

  return html
}

export const renderMarkdownFromBlocks = (blocks: string[]) => {
  if (!blocks || blocks.length === 0) {
    return ''
  }
  return renderMarkdownBlock(blocks.join('\n\n'))
}
