export default function Testimonials() {
  const reviews = [
    { name: 'Olivia Rhye', role: 'CMO, Luxora', text: 'They delivered a stunning site that increased conversions by 62% in the first month.' },
    { name: 'Noah Carter', role: 'Founder, PayHive', text: 'Impeccable attention to detail. The animations elevated our brand perception instantly.' },
    { name: 'Ava Patel', role: 'Head of Growth, NovaSaaS', text: 'Fast, reliable, and truly premium. A partner we trust for mission-critical launches.' },
  ]

  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What clients say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-[1.02] transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-600/40 border border-white/20" />
                <div>
                  <div className="text-white font-medium">{r.name}</div>
                  <div className="text-white/60 text-xs">{r.role}</div>
                </div>
              </div>
              <p className="mt-4 text-white/80">“{r.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
