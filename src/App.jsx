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
import ScrollBackground from './components/ScrollBackground'

function App() {
  return (
    <div className="min-h-screen text-slate-100 antialiased scroll-smooth relative overflow-x-clip">
      {/* Scroll‑reactive background */}
      <ScrollBackground />

      {/* Foreground content */}
      <div className="relative z-10">
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
    </div>
  )
}

export default App
