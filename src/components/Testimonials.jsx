export default function Testimonials() {
  const reviews = [
    { name: 'Оливия Рай', role: 'CMO, Luxora', text: 'Сайт увеличил конверсию на 62% в первый месяц.' },
    { name: 'Ноа Картер', role: 'Founder, PayHive', text: 'Аккуратные анимации и безупречная верстка. Рекомендуем.' },
    { name: 'Ава Патель', role: 'Head of Growth, NovaSaaS', text: 'Быстро, прозрачно и очень качественно. Надежный партнёр.' },
  ]

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Отзывы</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl glass p-6 transition hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900/90" />
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-slate-700 text-xs">{r.role}</div>
                </div>
              </div>
              <p className="mt-4 text-slate-800">“{r.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
