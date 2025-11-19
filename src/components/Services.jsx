import { Code, Paintbrush, ShoppingCart, Rocket, Sparkles, PenTool } from 'lucide-react'

const services = [
  { icon: Paintbrush, title: 'UI/UX‑дизайн', desc: 'Сильная визуальная система, прототипы, гайдлайны и дизайн‑система.' },
  { icon: Code, title: 'Разработка', desc: 'Производительные сайты и веб‑приложения на современном стеке.' },
  { icon: ShoppingCart, title: 'E‑commerce', desc: 'Магазины с высокой конверсией и интеграцией платежей.' },
  { icon: PenTool, title: 'Брендинг', desc: 'Логотипы, айдентика, фирменные шрифты и палитры.' },
  { icon: Rocket, title: 'SEO и скорость', desc: 'Core Web Vitals, доступность и оптимизация выдачи.' },
  { icon: Sparkles, title: 'Анимации', desc: 'Микровзаимодействия и плавные переходы без перегруза.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold">Услуги</h2>
          <a href="#contact" className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm text-white bg-black hover:bg-slate-900">Запросить смету</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl glass p-6 transition hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/70" />
              <div className="w-12 h-12 rounded-md bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/10">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{desc}</p>
              <a href="#contact" className="mt-4 inline-block text-slate-900 hover:opacity-70 transition">Узнать больше →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
