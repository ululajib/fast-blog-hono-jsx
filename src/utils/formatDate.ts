const formatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

export function formatDate(isoDate: string): string {
  const date = new Date(isoDate)
  return Number.isNaN(date.valueOf()) ? isoDate : formatter.format(date)
}
