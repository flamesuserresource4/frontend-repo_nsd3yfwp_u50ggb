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
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl glass p-6 sm:p-10">
            <h2 className="text-3xl font-bold">Расскажите о задаче</h2>
            <p className="mt-2 text-slate-700">Ответим в течение 24 часов.</p>
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input className="w-full rounded-md bg-white/70 backdrop-blur border border-white/70 px-4 py-3 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Ваше имя" required />
                </div>
                <div className="relative">
                  <input className="w-full rounded-md bg-white/70 backdrop-blur border border-white/70 px-4 py-3 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Email или Telegram" required />
                </div>
              </div>
              <div className="relative">
                <textarea rows="5" className="w-full rounded-md bg-white/70 backdrop-blur border border-white/70 px-4 py-3 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Цели, сроки и бюджет" required />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-medium bg-black hover:bg-slate-900">
                <Send size={18} /> {sent ? 'Отправлено!' : 'Отправить заявку'}
              </button>
            </form>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white bg-black"><Mail size={16}/> Email</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white bg-black/90"><MessageCircle size={16}/> Telegram</a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden glass relative min-h-[340px]">
            <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop" alt="Map" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
