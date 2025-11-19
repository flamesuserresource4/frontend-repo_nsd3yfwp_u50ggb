import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white scroll-smooth">
      {/* layered background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-40 -right-40 w-[60vw] aspect-square rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[50vw] aspect-square rounded-full bg-blue-600/20 blur-[140px]" />
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
