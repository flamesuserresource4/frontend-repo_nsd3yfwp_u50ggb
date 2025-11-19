import { Compass, Figma, Code, Send, HeartHandshake } from 'lucide-react'

const steps = [
  { icon: Compass, title: 'Аналитика', desc: 'Цели, портрет аудитории и KPI.' },
  { icon: Figma, title: 'Дизайн', desc: 'Прототипы, макеты, анимации.' },
  { icon: Code, title: 'Разработка', desc: 'Чистый код, адаптив и оптимизация.' },
  { icon: Send, title: 'Запуск', desc: 'Тесты, SEO, аналитика и релиз.' },
  { icon: HeartHandshake, title: 'Поддержка', desc: 'Итерации и развитие продукта.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Как мы работаем</h2>
        <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="rounded-2xl glass p-6 transition hover:-translate-y-1" style={{animationDelay: `${i*60}ms`}}>
              <div className="w-12 h-12 rounded-md bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/10">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
