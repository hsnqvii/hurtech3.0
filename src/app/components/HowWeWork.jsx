import React from 'react';

const HowWeWork = () => {
  const cards = [
    { title: "Discovery", desc: "We dive deep into your current workflow to identify bottlenecks and opportunities." },
    { title: "Strategy & Design", desc: "We map out a custom solution and design a user-friendly interface." },
    { title: "Development", desc: "Our expert team builds your software using the latest secure technologies." },
    { title: "Launch & Training", desc: "We deploy your system and train your team to ensure smooth adoption." },
  ];

  return (
    <section className="w-full py-6 md:py-20 bg-light-gray">
      <div className="max-w-[1515px] mx-auto px-6"> 

        {/* Heading */}
        <h2 className="text-[35px] md:text-[35px] font-bold text-[#141414] text-center md:text-left " data-aos="fade-down">
          How We Work
        </h2>

        {/* Subtitle */}
        <p className="text-[#3F3F3F] mt-4 mx-auto text-[16px] md:text-[30px] leading-relaxed text-center md:text-left" data-aos="fade-up">
          Everything you need to manage properties, tenants, and investors—in one custom platform. Everything you need to manage properties, tenants, and investors—in one custom platform.
        </p>

        {/* Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-[48%] lg:w-[23%] p-2"
            >
              <div className="bg-white shadow py-6 flex flex-col items-center px-4 gap-4 h-full">
                <div className="w-[50px] h-[50px] rounded-full text-white text-[22px] flex justify-center items-center bg-[#007BFFFC]">
                  {index + 1}
                </div>
                <h3 className="text-[22px] font-semibold text-center text-[#000000]">{card.title}</h3>
                <p className="mt-2 text-[#3F3F3F] text-[18px] text-center">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
