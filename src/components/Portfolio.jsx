import { useState } from 'react'

const items = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Web App',
    tech: ['React', 'Tailwind', 'Node'],
    thumb: 'https://images.unsplash.com/photo-1551281044-8d8d8a6df7a7?q=80&w=1600&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjM0NTcxNTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Data‑heavy интерфейс с чистой сеткой и фокусом на типографику.'
  },
  {
    id: 2,
    title: 'Luxury E‑commerce',
    category: 'E‑commerce',
    tech: ['Next.js', 'Stripe', 'Sanity'],
    thumb: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2000&auto=format&fit=crop',
    desc: 'Чистая витрина с акцентом на карточки товара и UX‑детали.'
  },
  {
    id: 3,
    title: 'SaaS Marketing',
    category: 'Landing',
    tech: ['Astro', 'Vue', 'GSAP'],
    thumb: 'https://images.unsplash.com/photo-1545239741-4b8e3d3f6f6f?q=80&w=1600&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop',
    desc: 'Минималистичный лендинг c мягкими анимациями и понятной структурой.'
  },
  {
    id: 4,
    title: 'Creative Agency',
    category: 'Portfolio',
    tech: ['Svelte', 'Tailwind'],
    thumb: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1600&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcmVhdGl2ZSUyMEFnZW5jeXxlbnwwfDB8fHwxNzYzNTU5MTMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Витрина проекта с модульной сеткой и аккуратным модальным просмотром.'
  },
]

export default function Portfolio() {
  const [active, setActive] = useState(null)

  const current = items.find((i) => i.id === active)

  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold">Кейсы</h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => (
            <button key={p.id} onClick={() => setActive(p.id)} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white text-left hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition">
              <img src={p.thumb} alt={p.title} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-slate-600">{p.category}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className={`fixed inset-0 z-50 ${active ? '' : 'pointer-events-none'}`}>
        <div onClick={() => setActive(null)} className={`absolute inset-0 bg-black/50 transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute inset-4 sm:inset-10 lg:inset-20 rounded-3xl overflow-hidden border border-slate-200 bg-white transform transition-all ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {current && (
            <div className="grid lg:grid-cols-2 h-full">
              <div className="relative">
                <img src={current.image} alt={current.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-6 sm:p-10 overflow-y-auto">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">{current.title}</h3>
                    <p className="text-slate-600 mt-1">{current.category}</p>
                  </div>
                  <button onClick={() => setActive(null)} className="rounded-md px-3 py-1.5 text-sm bg-slate-900 text-white">Закрыть</button>
                </div>
                <p className="mt-6 text-slate-700 leading-relaxed">{current.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {current.tech.map((t) => (
                    <span key={t} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs">{t}</span>
                  ))}
                </div>
                <a href="#" className="mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-white font-medium bg-black">Открыть проект</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
