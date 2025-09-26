import type { JSX } from 'hono/jsx'

export type ButtonProps = {
  href?: string
  variant?: 'primary' | 'ghost'
  children: JSX.Element | JSX.Element[] | string
  type?: 'button' | 'submit' | 'reset'
  ['aria-label']?: string
}

export const Button = ({ href, variant = 'primary', children, type = 'button', ...rest }: ButtonProps) => {
  const className = variant === 'ghost' ? 'button button--ghost' : 'button'
  if (href) {
    return (
      <a class={className} href={href} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button class={className} type={type} {...rest}>
      {children}
    </button>
  )
}
