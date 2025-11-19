export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs">Студия веб‑дизайна и разработки</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Создаём понятные, быстрые и красивые сайты
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl">
              Минимализм, чёткая типографика и аккуратные анимации. От лендингов до сложных веб‑приложений — соберём под ключ.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white font-medium bg-black hover:bg-slate-900 transition">
                Обсудить проект
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-slate-300 hover:bg-slate-50">
                Портфолио
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {[
                { k: 'Проекты', v: '120+' },
                { k: 'ROI', v: '3.8×' },
                { k: 'Лет', v: '7' },
                { k: 'NPS', v: '91' },
              ].map((i) => (
                <div key={i.k} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                  <div className="text-2xl font-bold">{i.v}</div>
                  <div className="text-xs text-slate-600 tracking-wide mt-1">{i.k}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
              <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1800&auto=format&fit=crop" alt="Showcase" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
