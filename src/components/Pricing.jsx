export default function Pricing() {
  const plans = [
    { name: 'Start', price: '₽ 150 000', time: '2–3 недели', features: ['Лендинг 1–3 экрана', 'Индивидуальный дизайн', 'Базовое SEO', 'Поддержка по email'] },
    { name: 'Growth', price: '₽ 390 000', time: '4–6 недель', features: ['Многостраничный сайт', 'Анимации и CMS', 'On‑page SEO', 'Приоритетная поддержка'], featured: true },
    { name: 'Scale', price: 'от ₽ 790 000', time: '6–10 недель', features: ['Web‑приложение или магазин', 'Интеграции', 'Продвинутое SEO', 'Выделенная команда'] },
  ]

  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Тарифы</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-xl border p-6 ${p.featured ? 'bg-black text-white border-black shadow-[0_10px_30px_rgba(15,23,42,0.12)]' : 'bg-white border-slate-200'}`}>
              {p.featured && <div className="absolute -top-3 right-4 rounded-full bg-black text-[10px] px-2 py-1 text-white">Рекомендуем</div>}
              <div className="text-slate-600 text-sm {p.featured ? 'text-white/80' : ''}">{p.name}</div>
              <div className={`mt-2 text-4xl font-extrabold ${p.featured ? 'text-white' : ''}`}>{p.price}</div>
              <div className={`text-sm ${p.featured ? 'text-white/80' : 'text-slate-600'}`}>Срок: {p.time}</div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${p.featured ? 'text-white/80' : 'text-slate-700'}`}><span className={`w-1.5 h-1.5 rounded-full ${p.featured ? 'bg-white' : 'bg-slate-900'}`}></span>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex items-center justify-center w-full rounded-full px-4 py-3 font-medium ${p.featured ? 'bg-white text-black hover:bg-slate-200' : 'bg-black text-white hover:bg-slate-900'}`}>Выбрать</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
