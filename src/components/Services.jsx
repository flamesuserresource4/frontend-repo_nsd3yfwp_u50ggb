import { Code, Paintbrush, ShoppingCart, Rocket, Sparkles, PenTool } from 'lucide-react'

const services = [
  { icon: Paintbrush, title: 'UI/UX Design', desc: 'Premium visuals, intuitive flows, and microinteractions.' },
  { icon: Code, title: 'Website Development', desc: 'Blazing-fast, SEO-friendly websites built on modern stacks.' },
  { icon: ShoppingCart, title: 'E-commerce', desc: 'High-converting storefronts with secure payments.' },
  { icon: PenTool, title: 'Branding', desc: 'Identity systems, logos, and design language.' },
  { icon: Rocket, title: 'Performance & SEO', desc: 'Core Web Vitals, accessibility, and search optimization.' },
  { icon: Sparkles, title: 'Motion & Interactions', desc: 'Delightful animations that bring interfaces to life.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_10%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl px-4 py-2 text-sm text-white/90 bg-white/10 border border-white/15 hover:bg-white/15">Get a quote</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(56,189,248,0.25)] transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/30 to-blue-600/30 border border-white/20 flex items-center justify-center text-cyan-300">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
              <a href="#contact" className="mt-4 inline-block text-cyan-300 hover:text-white transition">Get a quote →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
