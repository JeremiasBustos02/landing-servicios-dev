import type { HTMLAttributes, ReactNode } from 'react'

type LiquidGlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export default function LiquidGlassCard({ children, className = '', ...props }: LiquidGlassCardProps) {
  return (
    <div className={`liquid-glass ${className}`} {...props}>
      {children}
    </div>
  )
}
