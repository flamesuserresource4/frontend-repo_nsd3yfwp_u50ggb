import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92svh] flex items-center overflow-hidden">
      {/* gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(56,189,248,0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_80%,rgba(59,130,246,0.25),transparent)]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* blur glass overlay gradient to enhance contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">Premium Web Design Studio</span>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            We craft elegant, high‑performing websites
          </h1>
          <p className="mt-6 text-lg text-cyan-200/90 max-w-2xl">
            Modern design, smooth animations, and bespoke development. From concept to launch — we build digital experiences that convert.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-white font-medium bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(56,189,248,0.45)] hover:shadow-[0_0_40px_rgba(56,189,248,0.55)] transition">
              Start your project
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-white/90 font-medium bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md">
              View portfolio
            </a>
          </div>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {[
              { k: 'Projects', v: '120+' },
              { k: 'Avg. ROI', v: '3.8x' },
              { k: 'Years', v: '7' },
              { k: 'NPS', v: '91' },
            ].map((i) => (
              <div key={i.k} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{i.v}</div>
                <div className="text-xs text-white/70 tracking-wide mt-1">{i.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
