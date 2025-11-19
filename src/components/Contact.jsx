import { useState } from 'react'
import { Send, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-10">
            <h2 className="text-3xl font-bold text-white">Let’s build something remarkable</h2>
            <p className="mt-2 text-white/70">Tell us about your project and we’ll get back within 24h.</p>
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Your name" required />
                </div>
                <div className="relative">
                  <input className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Email or Telegram" required />
                </div>
              </div>
              <div className="relative">
                <textarea rows="5" className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Tell us about your goals, timeline, and budget" required />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-white font-medium bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(56,189,248,0.45)]">
                <Send size={18} /> {sent ? 'Sent!' : 'Send request'}
              </button>
            </form>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white/90 bg-white/10 border border-white/15 hover:bg-white/15"><Mail size={16}/> Email</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white/90 bg-white/10 border border-white/15 hover:bg-white/15"><MessageCircle size={16}/> Telegram</a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 relative min-h-[340px]">
            <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
