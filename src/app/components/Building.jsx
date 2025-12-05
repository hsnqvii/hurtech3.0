"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import building from "../../../public/building.svg";

const Building = () => {
  const stats = [
    { title: "50M+", value: 50, desc: "Transactions Processed" },
    { title: "30%", value: 30, desc: "Revenue Increase" },
    { title: "500+", value: 500, desc: "Happy Clients" },
    { title: "15+", value: 15, desc: "Leading Brands" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const animationStarted = useRef(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Counter Animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("counter-section");
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 200;

      if (sectionTop < triggerPoint && !animationStarted.current) {
        animationStarted.current = true;
        startCounting();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      setCounters(
        stats.map((stat) =>
          Math.min(
            Math.floor((elapsed / duration) * stat.value),
            stat.value
          )
        )
      );

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section
      id="counter-section"
      className="relative w-full py-6 md:py-24 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 flex justify-center -z-10 hidden md:flex">
        <div
          className="bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${building.src})`,
            width: "1238px",
            height: "746px",
          }}
        />
      </div>

      <div className="max-w-[1515px] mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Side */}
          <div className="flex flex-col gap-10 justify-center">
            <div>
              <h1
                className="text-[35px] text-center md:text-left text-[#141414] font-bold"
                data-aos="fade-right"
              >
                Building for the Best
              </h1>

              <p
                className="text-[#3F3F3F] mt-4 font-[400] text-center md:text-left text-base md:text-[18px] lg:text-[30px] leading-relaxed max-w-[400px] lg:max-w-[550px]"
                data-aos="fade-right"
              >
                Real Results for Real Estate Businesses. Our custom software
                solutions don't just look good—they drive measurable growth and
                efficiency for our clients.
              </p>
            </div>

            <div data-aos="fade-right">
              <p className="text-[#3F3F3F] mt-4 text-base md:text-[18px] text-center md:text-left lg:text-[30px] leading-relaxed">
                Our Vision
              </p>
              <p className="text-[#3F3F3F] mt-4 text-base md:text-[18px] lg:text-[30px] text-center md:text-left leading-relaxed">
                Our Mission
              </p>
            </div>
          </div>

          {/* Right Side Counters */}
          <div className="flex flex-col gap-8 justify-center" data-aos="fade-left">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h1 className="text-[63px] text-[#141414] font-[300] leading-none text-center md:text-left">
                  {counters[index].toLocaleString()}
                  {item.title.includes("M") && "M"}
                  {item.title.includes("+") && "+"}
                  {item.title.includes("%") && "%"}
                </h1>

                <p className="text-[#3F3F3F] text-center md:text-left font-[400] text-base md:text-[18px] lg:text-[21px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Building;
