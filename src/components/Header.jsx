import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Prices', href: '#pricing' },
  { label: 'Contacts', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 transition-all px-4 sm:px-6 ${scrolled ? 'translate-y-0' : ''}`}>
      <div className={`mx-auto max-w-7xl rounded-2xl border backdrop-blur-xl transition-all ${scrolled ? 'bg-slate-900/70 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]' : 'bg-slate-900/40 border-white/10'}`}>
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(56,189,248,0.45)] ring-1 ring-white/20"></div>
            <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition">Nova Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white/90 bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition">
              Discuss Project
            </a>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-white/80 hover:text-white hover:bg-white/15 transition">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-slate-900/90 border-l border-white/10 backdrop-blur-xl transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'} shadow-[0_10px_40px_rgba(0,0,0,0.6)]`}>
          <div className="flex items-center justify-between p-4">
            <span className="text-white/80 font-semibold">Menu</span>
            <button onClick={() => setOpen(false)} className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <div className="px-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center rounded-xl px-4 py-3 text-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              Discuss Project
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
