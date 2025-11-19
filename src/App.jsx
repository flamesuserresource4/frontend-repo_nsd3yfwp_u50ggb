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
    <div className="min-h-screen bg-white text-slate-900 antialiased scroll-smooth relative overflow-x-clip">
      {/* Dynamic background: soft gradients + grid */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* gradient blobs */}
        <div className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-indigo-300/60 via-sky-200/60 to-white blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-pink-200/60 via-rose-100/60 to-white blur-3xl" />
        {/* subtle grid texture */}
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(70%_50%_at_50%_30%,black,transparent)]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(15,23,42,0.06),transparent)]" />
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
