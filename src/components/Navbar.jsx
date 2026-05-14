export default function Navbar() {
  return (
    <header className="navbar sticky top-0 z-50 w-full h-20 border-black/5">
      <div className="container h-full flex items-center justify-between">
        <div className="navbar-logo">milogo.</div>

        <nav className="navbar-links hidden md:flex gap-8 items-center font-medium">
          <a href="#services" className="hover:opacity-80">Servicios</a>
          <a href="#testimonials" className="hover:opacity-80">Testimonios</a>
          <a href="#pricing"  className="hover:opacity-80">Precios</a>
          <a href="#faq"      className="hover:opacity-80">FAQ</a>
          <a href="#contact"  className="btn-primary">Contacto</a>
        </nav>
      </div>
    </header>
  )
}