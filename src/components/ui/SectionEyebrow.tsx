type SectionEyebrowProps = {
  label: string
}

export default function SectionEyebrow({ label }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span>{label}</span>
    </div>
  )
}
