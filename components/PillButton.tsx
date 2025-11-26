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
    px-6 py-3
    sm:px-8 sm:py-3
    md:px-10 md:py-4
    lg:px-12 lg:py-4
    text-sm
    sm:text-base
    md:text-lg
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
      ${shadow ? 'shadow-accent/20' : ''}
    `,
    gradient: `
      text-white
      ${shadow ? 'shadow-purple-500/20' : ''}
    `,
    outline: `
      border-2
      border-white
      text-white
      bg-transparent
      hover:bg-white/10
      ${shadow ? 'shadow-white/10' : ''}
    `
  }

  const gradientStyle = variant === 'gradient' ? {
    background: 'linear-gradient(to right, #C0B7E8 0%, #8176AF 50%, #C0B7E8 100%)'
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

