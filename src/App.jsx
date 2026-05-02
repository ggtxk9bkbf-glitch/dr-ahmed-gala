import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Excellence from './components/Excellence'
import Testimonials from './components/Testimonials'
import BeforeAfter from './components/BeforeAfter'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingChat from './components/FloatingChat'

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Excellence />
        <Testimonials />
        <BeforeAfter />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
