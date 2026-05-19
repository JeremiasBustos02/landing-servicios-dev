import type { ButtonHTMLAttributes } from 'react'
import '../../styles/ui/buttons.css' // Ajusta esta ruta según tu estructura

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
}

export default function PrimaryButton({ label, className = '', ...props }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={`btn-primary group ${className}`.trim()}
      {...props}
    >
      {label}
    </button>
  )
}