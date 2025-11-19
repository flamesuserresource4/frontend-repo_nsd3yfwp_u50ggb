import { Github, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-slate-200 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-black" />
              <span className="font-semibold tracking-tight">Nova Studio</span>
            </div>
            <p className="mt-4 text-slate-600 max-w-md">Минималистичный веб‑дизайн и разработка. Чисто, быстро, по делу.</p>
          </div>
          <div>
            <div className="font-medium">Навигация</div>
            <ul className="mt-3 space-y-2 text-slate-600 text-sm">
              {['Services','Portfolio','Process','Pricing','Contact'].map((i) => (
                <li key={i}><a href={`#${i.toLowerCase()}`} className="hover:text-black transition">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-medium">Соцсети</div>
            <div className="mt-3 flex gap-3">
              {[Github, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Nova Studio. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
