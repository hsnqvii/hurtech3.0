import React from "react";

const CustomAdvantage = () => {
  return (
    <section className="w-full py-6 md:py-20 bg-light-gray">
      <div className="max-w-[1515px] mx-auto px-4 md:px-6">

        <h2 className="text-3xl md:text-[35px] font-bold text-[#141414] text-center md:text-left" data-aos="fade-down">
          The Hurtech Custom Advantage
        </h2>

        <p className="text-[#3F3F3F] mt-4 mx-auto md:mx-0 text-base md:text-[18px] lg:text-[30px] md:leading-[45px] text-center md:text-left" data-aos="fade-up">
          We build software that fits your business like a tailored suit.
          Every dashboard, every button, and every report is designed around you.
          We build software that fits your business like a tailored suit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 md:mt-16" data-aos="fade-up">

          <div className="bg-light-gray p-6 rounded-xl  transition">
            <h3 className="text-xl md:text-[24px] text-[#007BFFFC] font-semibold">
              Exact Fit
            </h3>
            <p className="mt-3 text-[#3F3F3F] text-base md:text-[18px] leading-relaxed">
              We map the software exactly to your existing successful processes.
            </p>
          </div>

          <div className="bg-light-gray p-6 rounded-xl  transition">
            <h3 className="text-xl md:text-[24px] text-[#007BFFFC] font-semibold">
              Scalable
            </h3>
            <p className="mt-3 text-[#3F3F3F] text-base md:text-[18px] leading-relaxed">
              Start with what you need today, and add modules as you grow.
            </p>
          </div>

          <div className="bg-light-gray p-6 rounded-xl  transition">
            <h3 className="text-xl md:text-[24px] text-[#007BFFFC] font-semibold">
              Ownership
            </h3>
            <p className="mt-3 text-[#3F3F3F] text-base md:text-[18px] leading-relaxed">
              You own the code and the data. No more licensing fees forever.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomAdvantage;
