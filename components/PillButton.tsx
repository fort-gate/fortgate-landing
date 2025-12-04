import { ButtonHTMLAttributes, ReactNode } from 'react'

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'solid' | 'gradient' | 'outline'
  className?: string
  shadow?: boolean
}

export default function PillButton({
  children,
  variant = 'gradient',
  className = '',
  shadow = true,
  disabled = false,
  ...props
}: PillButtonProps) {
  const baseClasses = `
    rounded-full
    font-bold
    text-center
    transition-all
    duration-300
    px-4 py-2
    sm:px-5 sm:py-2
    md:px-6 md:py-2.5
    lg:px-7 lg:py-3
    text-xs
    sm:text-sm
    md:text-sm
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${shadow ? 'shadow-lg' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  const variantClasses = {
    solid: `
      bg-accent
      text-white
      hover:bg-accent/80
      hover:brightness-110
      hover:scale-105
      active:scale-100
      ${shadow ? 'shadow-accent/20 hover:shadow-accent/40' : ''}
    `,
    gradient: `
      text-white
      hover:brightness-110
      hover:scale-105
      active:scale-100
      ${shadow ? 'shadow-purple-500/20 hover:shadow-purple-500/40' : ''}
    `,
    outline: `
      border-2
      border-white
      text-white
      bg-transparent
      hover:bg-white/10
      hover:brightness-110
      hover:scale-105
      active:scale-100
      ${shadow ? 'shadow-white/10 hover:shadow-white/30' : ''}
    `
  }

  const gradientStyle = variant === 'gradient' ? {
    background: 'linear-gradient(to right, #C0B7E8 0%, #8176AF 50%, #C0B7E8 100%)',
    transition: 'all 0.3s ease'
  } : {}

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      style={variant === 'gradient' ? gradientStyle : undefined}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

