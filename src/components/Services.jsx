import { Code, Paintbrush, ShoppingCart, Rocket, Sparkles, PenTool } from 'lucide-react'

const services = [
  { icon: Paintbrush, title: 'UI/UX‑дизайн', desc: 'Визуальная система, посадочные страницы, прототипы и гайдлайны.' },
  { icon: Code, title: 'Разработка', desc: 'Производительные сайты и веб‑приложения на современном стеке.' },
  { icon: ShoppingCart, title: 'E‑commerce', desc: 'Интернет‑магазины с высокой конверсией и безопасными платежами.' },
  { icon: PenTool, title: 'Брендинг', desc: 'Логотипы, айдентика и дизайн‑система под ваш продукт.' },
  { icon: Rocket, title: 'SEO и скорость', desc: 'Core Web Vitals, доступность и оптимизация выдачи.' },
  { icon: Sparkles, title: 'Анимации', desc: 'Мягкие микровзаимодействия и аккуратные переходы.' },
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
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition">
              <div className="w-12 h-12 rounded-md bg-slate-900 text-white flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
              <a href="#contact" className="mt-4 inline-block text-slate-900 hover:opacity-70 transition">Узнать больше →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
