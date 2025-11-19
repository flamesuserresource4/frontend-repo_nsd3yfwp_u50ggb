import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Процесс', href: '#process' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Контакты', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,0.06)]' : ''}`}> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-md bg-black"></div>
            <span className="font-semibold tracking-tight group-hover:opacity-80 transition">Nova Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-black transition relative after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-black hover:bg-slate-900 transition">
              Обсудить проект
            </a>
          </nav>

          <button aria-label="Открыть меню" onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white border-l border-slate-200 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'} shadow-xl`}>
          <div className="flex items-center justify-between p-4">
            <span className="font-semibold">Меню</span>
            <button onClick={() => setOpen(false)} className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
              <X size={20} />
            </button>
          </div>
          <div className="px-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-4 py-3 text-slate-800 hover:bg-slate-50 border border-slate-200/70">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center rounded-md px-4 py-3 text-white bg-black">
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
