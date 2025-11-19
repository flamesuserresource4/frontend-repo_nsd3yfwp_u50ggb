export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Дизайн с задачей. Разработка с точностью.</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Бутик‑студия, которая совмещает эстетику и измеримый результат. Строим системы, а не просто страницы.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: 'Опыт', v: '7+ лет' },
                { k: 'Проектов', v: '120+' },
                { k: 'Команда', v: '10' },
              ].map((i) => (
                <div key={i.k} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                  <div className="text-xl font-semibold">{i.v}</div>
                  <div className="text-xs text-slate-600 mt-1">{i.k}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden relative border border-slate-200 bg-slate-50">
                <img src={`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop`} alt="Studio" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
