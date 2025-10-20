import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import CaseStudies from './components/CaseStudies'
import Clients from './components/Clients'
import OurTeam from './components/OurTeam'   // ✅ Import Our Team section
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const sections = {
    hero: useRef(null),
    services: useRef(null),
    industries: useRef(null),
    casestudies: useRef(null),
    clients: useRef(null),
    team: useRef(null),          // ✅ Added team reference
    contact: useRef(null)
  }

  const scrollToSection = (section) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-black text-white">
      <Navbar onNavClick={scrollToSection} />
      
      <section ref={sections.hero}>
        <Hero onGetStarted={() => scrollToSection('contact')} />
      </section>

      <section ref={sections.services}>
        <Services />
      </section>

      <section ref={sections.industries}>
        <Industries />
      </section>

      <section ref={sections.casestudies}>
        <CaseStudies />
      </section>

      <section ref={sections.clients}>
        <Clients />
      </section>

      <section ref={sections.team}>       {/* ✅ Our Team Section */}
        <OurTeam />
      </section>

      <section ref={sections.contact}>
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default App
