import { Search } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'

export default function MenuBar() {
  return (
    <section className="w-full h-10 bg-black/40 backdrop-blur-md border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs text-white/70">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <BrandLogo className="w-3.5 h-3.5" />
            <span className="font-semibold text-white">milogo.</span>
          </div>
          {['Archivo', 'Editar', 'Ver', 'Ir'].map(item => (
            <button key={item} type="button" className="hover:text-white transition-colors">
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Search className="w-3.5 h-3.5" />
          <span>Mie May 6 1:09 PM</span>
        </div>
      </div>
    </section>
  )
}
