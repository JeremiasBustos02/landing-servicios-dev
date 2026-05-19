import type { ButtonHTMLAttributes } from 'react'

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
}

export default function PrimaryButton({ label, className = '', ...props }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${className}`}
      {...props}
    >
      {label}
    </button>
  )
}
