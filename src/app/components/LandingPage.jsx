import React from 'react'
import HeroSection from './HeroSection'
import CustomAdvantage from './CustomAdvantage'
import RevenuSection from './RevenuSection'
import HowWeWork from './HowWeWork'
import Building from './Building'
import Integrations from './Integrations'
import Industry from './Industry'
import Faq from './Faq'
import BuildSomething from './BuildSomething'
import WhyChooseUs from './WhyChooseUs'
import Solutions from './Solutions'
import Contact from './Contact'

const LandingPage = () => {
  return (
    <>
      <section id="hero" className="scroll-mt-[80px]">
        <HeroSection />
      </section>

      <section id="customAdvantage" className="scroll-mt-[80px]">
        <CustomAdvantage id="customAdvantage" />
      </section>

      <section id="revenu" className="scroll-mt-[80px]">
        <RevenuSection id="revenu" />
      </section>

      <section id="whyChooseUs" className="scroll-mt-[80px]">
        <WhyChooseUs id="whyChooseUs" />
      </section>

      <section id="building" className="scroll-mt-[80px]">
        <Building id="building" />
      </section>

      <section id="howWeWork" className="scroll-mt-[80px]">
        <HowWeWork id="howWeWork" />
      </section>

      <section id="integrations" className="scroll-mt-[80px]">
        <Integrations id="integrations" />
      </section>

      <section id="solutions" className="scroll-mt-[80px]">
        <Solutions id="solutions" />
      </section>

      <section id="industry" className="scroll-mt-[80px]">
        <Industry id="industry" />
      </section>

      <section id="buildSomething" className="scroll-mt-[80px]">
        <BuildSomething id="buildSomething" />
      </section>

      <section id="contact" className=" scroll-mt-[80px]">
        <Contact id="contact" />
      </section>

      <section id="faq" className="scroll-mt-[80px]">
        <Faq id="faq" />
      </section>
    </>
  )
}

export default LandingPage
