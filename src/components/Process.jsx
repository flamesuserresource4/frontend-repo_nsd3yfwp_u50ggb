import { Compass, Figma, Code, Send, HeartHandshake } from 'lucide-react'

const steps = [
  { icon: Compass, title: 'Discovery', desc: 'Goals, audience, brand voice, and success metrics.' },
  { icon: Figma, title: 'Design', desc: 'Wireframes, high‑fidelity UI, prototypes, and motion.' },
  { icon: Code, title: 'Development', desc: 'Clean, modern code with performance baked in.' },
  { icon: Send, title: 'Launch', desc: 'Testing, SEO, analytics, and smooth release.' },
  { icon: HeartHandshake, title: 'Support', desc: 'Iterative improvements and ongoing care.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">How we work</h2>
        <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(56,189,248,0.25)] transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/30 to-blue-600/30 border border-white/20 flex items-center justify-center text-cyan-300">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
