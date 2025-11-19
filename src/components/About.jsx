export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-950/60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Design with purpose. Build with precision.</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              We are a boutique studio crafting premium digital experiences for ambitious brands. Our approach blends aesthetic excellence with measurable performance.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: 'Experience', v: '7+ yrs' },
                { k: 'Projects', v: '120+' },
                { k: 'Team', v: '10' },
              ].map((i) => (
                <div key={i.k} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center hover:scale-[1.02] transition">
                  <div className="text-xl font-semibold text-white">{i.v}</div>
                  <div className="text-xs text-white/70 mt-1">{i.k}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
                <img src={`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop`} alt="Studio" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
