import type { NavLink } from '../../content/site-config'

export type NavigationProps = {
  links: NavLink[]
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav class="nav" aria-label="Main navigation">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}
