import type { HTMLAttributes, ReactNode } from 'react'
import '@/styles/ui/cards.css'

type LiquidGlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export default function LiquidGlassCard({ children, className = '', ...props }: LiquidGlassCardProps) {
  return (
    <div className={`liquid-glass ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
