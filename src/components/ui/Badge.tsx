export type BadgeProps = {
  label: string
}

export const Badge = ({ label }: BadgeProps) => {
  return <span class="badge">{label}</span>
}
