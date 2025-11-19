export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$1.9k', time: '2–3 weeks', features: ['1 Landing page', 'Custom design', 'Basic SEO', 'Email support'] },
    { name: 'Growth', price: '$4.9k', time: '4–6 weeks', features: ['Multi‑page site', 'Animations & CMS', 'On‑page SEO', 'Priority support'], featured: true },
    { name: 'Scale', price: '$9.9k+', time: '6–10 weeks', features: ['Web app or store', 'Complex integrations', 'Advanced SEO', 'Dedicated support'] },
  ]

  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Pricing</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border backdrop-blur-xl p-6 ${p.featured ? 'bg-white/10 border-cyan-400/40 shadow-[0_0_40px_rgba(56,189,248,0.35)]' : 'bg-white/5 border-white/10'}`}>
              {p.featured && <div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-[10px] px-2 py-1 text-white shadow-[0_0_20px_rgba(56,189,248,0.5)]">Recommended</div>}
              <div className="text-white/80 text-sm">{p.name}</div>
              <div className="mt-2 text-4xl font-extrabold text-white">{p.price}</div>
              <div className="text-white/60 text-sm">Timeline: {p.time}</div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="text-white/70 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-medium ${p.featured ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white' : 'bg-white/10 text-white/90 border border-white/15 hover:bg-white/15'}`}>Choose plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
