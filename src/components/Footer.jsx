import { Github, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600" />
              <span className="text-white/90 font-semibold tracking-tight">Nova Studio</span>
            </div>
            <p className="mt-4 text-white/60 max-w-md">Premium web design and development studio crafting elegant digital experiences.</p>
          </div>
          <div>
            <div className="text-white/80 font-medium">Quick Links</div>
            <ul className="mt-3 space-y-2 text-white/60 text-sm">
              {['Services','Portfolio','Process','Pricing','Contact'].map((i) => (
                <li key={i}><a href={`#${i.toLowerCase()}`} className="hover:text-white transition">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white/80 font-medium">Social</div>
            <div className="mt-3 flex gap-3">
              {[Github, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Nova Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
