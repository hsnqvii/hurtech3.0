import React from 'react'
import support from "../../../public/support.svg"
import performance from "../../../public/performance.svg"
import scaleable from "../../../public/scaleable.svg"
import customize from "../../../public/customize.svg"
import Image from 'next/image'

const WhyChooseUs = () => {
  const cards = [
    { img: scaleable, title: "Secure & Reliable", desc: "Real-time portfolio analytics, yield calculations, and cash." },
    { img: performance, title: "Fast Performance", desc: "Branded apps for rent payments, maintenance requests." },
    { img: support, title: "24/7 support", desc: "Auto-assign work orders, track vendor performance." },
    { img: customize, title: "Customizable", desc: "Multi-currency support (USD, EUR) with automated rent collection." },
  ];
  return (
    <section className="w-full py-6 md:py-20 bg-light-gray">
      <div className="max-w-[1515px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[35px] md:text-[35px] font-bold text-[#141414] text-center md:text-left " data-aos="fade-down">
          Why choose Hurtech
        </h2>

        {/* Subtitle */}
        <p className="text-[#3F3F3F] mt-4 mx-auto text-[16px] md:text-[30px] leading-relaxed text-center md:text-left" data-aos="fade-up">
          Everything you need to manage properties, tenants, and investors—in one custom platform. Everything you need to manage properties, tenants, and investors—in one custom platform.
        </p>

        {/* Cards */}
        <div className="mt-12  flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-[48%] lg:w-[23%] p-2"
            >
              <div className="bg-white shadow py-6 flex flex-col items-center gap-4 px-4 h-full">
                <div className="w-[50px] h-[50px] rounded-full text-white text-[22px] flex justify-center items-center p-3 bg-[#007BFFFC]">
                  <Image
                    src={card.img}
                    alt="card icon"
                    className="transition"
                  />
                </div>
                <h3 className="text-[22px] font-semibold text-center text-[#007BFF]">{card.title}</h3>
                <p className="mt-2 text-[#3F3F3F] text-[18px] text-center">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs