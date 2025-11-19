import { ArrowRight, MousePointer2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-14 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-slate-800">
              <MousePointer2 size={14} /> Студия веб‑дизайна и разработки
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Делаем ощутимо <span className="relative inline-block">
                <span className="relative z-10">красивые</span>
                <span className="absolute -inset-x-1 -inset-y-2 -z-10 rounded-lg bg-amber-200/50 blur-xl"/>
              </span> и быстрые сайты
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl">
              Совмещаем эстетику и производительность: анимации без перегруза, понятная навигация, сильная подача работ.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white font-medium bg-slate-900 hover:bg-black transition">
                Начать проект <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-slate-300/70 hover:bg-white/60 backdrop-blur-sm">
                Портфолио
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {[
                { k: 'Проекты', v: '120+' },
                { k: 'Средний ROI', v: '3.8×' },
                { k: 'Лет', v: '7' },
                { k: 'NPS', v: '91' },
              ].map((i) => (
                <div key={i.k} className="rounded-xl glass p-4 text-center">
                  <div className="text-2xl font-bold">{i.v}</div>
                  <div className="text-xs text-slate-600 tracking-wide mt-1">{i.k}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass border-white/70">
              {/* floating pills */}
              <div className="absolute -right-6 top-6 w-40 h-40 rounded-3xl bg-gradient-to-br from-indigo-300/70 to-sky-200/70 blur-2xl float-slow"/>
              <div className="absolute -left-8 bottom-8 w-44 h-44 rounded-full bg-gradient-to-tr from-rose-200/70 to-amber-200/70 blur-2xl float-slower"/>
              <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1800&auto=format&fit=crop" alt="Showcase" className="w-full h-full object-cover mix-blend-multiply" />
              <div className="absolute inset-0 bg-white/20"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
