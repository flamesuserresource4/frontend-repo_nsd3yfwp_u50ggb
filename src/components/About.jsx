export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden glass border-white/70">
              <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1400&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold">О студии</h2>
            <p className="mt-5 text-slate-700 max-w-2xl">Мы объединяем продуктовый подход и сильный визуал. Прорабатываем стратегию, прототипы, дизайн‑систему и доводим до стабильного релиза. Работаем прозрачно, с акцентом на бизнес‑цели.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                {k:'Специалистов', v:'12'},
                {k:'Клиентов', v:'70+'},
                {k:'Стран', v:'9'},
              ].map(i => (
                <div key={i.k} className="rounded-xl glass p-5 text-center">
                  <div className="text-2xl font-bold">{i.v}</div>
                  <div className="text-xs text-slate-600 mt-1">{i.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
