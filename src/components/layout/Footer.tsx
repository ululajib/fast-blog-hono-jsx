import type { SocialLink } from '../../content/site-config'

export type FooterProps = {
  socials: SocialLink[]
  note: string
}

export const Footer = ({ socials, note }: FooterProps) => {
  return (
    <footer class="footer">
      <div class="footer__inner">
        <small>{note}</small>
        <div>
          {socials.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
