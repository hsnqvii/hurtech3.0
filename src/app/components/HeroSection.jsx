"use client"
import React from "react";
import Image from "next/image";
import banner from "../../../public/banner.svg";
import { BookingButtonWithModal } from "./BookingButtonWithModal";

const HeroSection = () => {
  const contactId = "contact";

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // setOpen(false); // close mobile menu if open
    }
  };

  return (
    <section className="relative w-full min-h-[450px] md:h-screen md:-mt-10 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(3, 13, 125, 0.75) 0%, rgba(3, 13, 125, 0.90) 100%)",
        }}
      >
        <Image
          src={banner}
          alt="Banner"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-[#030D7D]/70"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
        <h1
          className="text-white font-bold md:leading-[50px] text-3xl sm:text-4xl md:text-[53px]"
          data-aos="fade-down"
        >
          Custom Real Estate Software{" "}
          <span className="font-normal">Built for Growth</span>
        </h1>

        <p
          className="text-white/90 mt-4 font-light mx-auto text-base sm:text-lg md:text-[18px] max-w-2xl"
          data-aos="fade-up"
        >
          Tailored solutions for Rental Companies, Agencies, and Investors in the
          USA & Netherlands. Automate workflows, maximize ROI, and scale without
          limits.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookingButtonWithModal
            label="Book a Meeting"
            className="bg-[#007BFFFC] text-white px-10 sm:px-12 py-3 rounded-full text-base sm:text-lg font-normal transition-all duration-200 hover:bg-transparent hover:border hover:border-primaryBlue"
            data-aos="fade-right"
          />

          <button
            onClick={() => handleNavClick(contactId)}
            className="bg-transparent text-white px-10 sm:px-12 py-3 rounded-full text-base sm:text-lg font-normal border border-primaryBlue transition-all duration-300 hover:bg-[#007BFFFC] hover:border-transparent"
            data-aos="fade-left"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
