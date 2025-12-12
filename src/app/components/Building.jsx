"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import building from "../../../public/building.png";

const Building = () => {
  const [active, setActive] = useState(0);
  const stats = [
    { title: "10M+", value: 10, desc: "Transactions Processed" },
    { title: "30%", value: 30, desc: "Revenue Increase" },
    { title: "15+", value: 15, desc: "Leading Brands" },
    { title: "150+", value: 150, desc: "Happy Clients" },
  ];
  const points = [
    {
      title: "Building for the Best",
      desc: "We aim to shape the future of real estate through digital innovation. Our vision is to empower businesses with tools that simplify operations, elevate client experiences, and unlock new levels of growth.",
    },
    {
      title: "Our Mission",
      desc: "Our mission is to build reliable, scalable, and intuitive software that solves real problems. We focus on efficiency, long-term value, and delivering solutions that help businesses thrive in a fast-changing world.",
    },
    {
      title: "Our Vision",
      desc: "We believe in integrity, transparency, and long-term partnerships. Our work is built on trust, accountability, and a commitment to delivering exceptional results every time.",
    },
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
      <div className="absolute inset-0 flex justify-center -z-10  md:flex">
        <div
          className="bg-no-repeat md:bg-center bg-bottom h-full "
          style={{
            backgroundImage: `url(${building.src})`,
            width: "1238px",
            // height: "746px",
          }}
        />
      </div>

      <div className="max-w-full mx-auto px-4 md:px-6 relative"> 
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            {/* Titles List */}
            <div className="flex flex-col gap-4">
              {points.map((item, idx) => (
                <div key={idx} onClick={() => setActive(idx)} className="cursor-pointer">
                  <p
                    className={`text-xl  font-bold transition-all duration-700`}
                  >
                   <span className={`border-b border-gray-400 ${active === idx ? "text-black text-4xl" : "text-gray-600"
                      }`} > {item.title}</span>
                  </p>

                  {/* Smoothly show desc only for active */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${active === idx ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                      }`}
                  >
                    <p className="text-[#534f4f] text-base font-semibold md:text-[20px] leading-relaxed md:leading-loose md:w-[450px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
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
