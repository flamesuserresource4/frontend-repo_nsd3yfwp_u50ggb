import { Compass, Figma, Code, Send, HeartHandshake } from 'lucide-react'

const steps = [
  { icon: Compass, title: 'Аналитика', desc: 'Цели, портрет аудитории и KPI.' },
  { icon: Figma, title: 'Дизайн', desc: 'Прототипы, макеты, прототипирование анимаций.' },
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
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition">
              <div className="w-12 h-12 rounded-md bg-slate-900 text-white flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
