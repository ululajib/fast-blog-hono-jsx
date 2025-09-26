import { Navigation } from './Navigation'
import type { NavLink } from '../../content/site-config'

export type HeaderProps = {
  title: string
  navLinks: NavLink[]
}

export const Header = ({ title, navLinks }: HeaderProps) => {
  return (
    <header class="header">
      <div class="header__inner">
        <a class="header__brand" href="/">
          {title}
        </a>
        <Navigation links={navLinks} />
      </div>
    </header>
  )
}
