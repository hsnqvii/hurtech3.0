"use client"
import React from "react";
import { BookingButtonWithModal } from './BookingButtonWithModal';

const BuildSomething = () => {
  const contactId = "contact"

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu if open
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-[#007BFF1F]">
      <div className="max-w-[1515px] mx-auto px-4 sm:px-6 md:px-8 text-center">

        {/* Main Title */}
        <h1 className="text-[#000000] text-[24px] sm:text-[30px] md:text-[39px] lg:text-[45px] font-bold leading-snug sm:leading-tight md:leading-[1.2]" data-aos="fade-down">
          Build Something Amazing
        </h1>

        {/* Short Description */}
        <p className="text-[#000000] mt-4 sm:mt-6 text-sm sm:text-base md:text-[20px] lg:text-[24px] md:leading-[1.75] " data-aos="fade-up">
          Let us help you transform your ideas into reality with our custom solutions and expertise.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <BookingButtonWithModal
            label="Book a Meeting" // The text you want on the button
            className="bg-[#007BFF] text-white px-6 sm:px-10 py-3 rounded-full font-semibold hover:bg-transparent hover:border hover:border-[#007BFF] hover:text-[#007BFF] transition w-full sm:w-auto"
            data-aos="fade-right" // Passes through other props like data-aos
          />
          <button
            onClick={() => handleNavClick(contactId)}
            className="border border-[#007BFF] text-[#007BFF] px-6 sm:px-10 py-3  rounded-full font-semibold hover:bg-[#007BFF] hover:border-transparent hover:text-white transition w-full sm:w-auto" data-aos="fade-left">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default BuildSomething;
