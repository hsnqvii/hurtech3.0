"use client";

import { useEffect, useState, useRef } from "react";
import { BookingButtonWithModal } from "./BookingButtonWithModal";

export default function ScrollPausePopup() {
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);

  const messages = ["Get more property leads", "Automate workflows & grow"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(false);
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setShow(true);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null; // hide completely when `show` is false

  return (
    <div className="fixed bottom-4 right-4 z-[50] transition-all duration-500">
      <div className="bg-white w-4/4 md:w-[300px] rounded-lg p-4 flex flex-col items-center gap-4 shadow-xl border-2 border-gray-300 text-black">

        {/* Header */}
        <p className="text-xl font-extrabold text-left w-full text-gray-800">
          👋 Hey there! <span className="text-blue-600">Welcome!</span>
        </p>

        {/* Messages */}
        <div className="h-[30px] relative w-full flex justify-center overflow-hidden">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={`absolute text-center w-full transition-transform duration-500 ${
                index === currentIndex
                  ? "translate-y-0"
                  : animating
                  ? "-translate-y-full"
                  : "translate-y-full"
              }`}
            >
              {msg}
            </p>
          ))}
        </div>

        {/* Button */}
        <BookingButtonWithModal
          label="Book a Free Consultation"
          className="bg-[#007BFFFC] text-white px-8 sm:px-10 py-3 rounded-full text-base sm:text-sm font-normal transition-all duration-200 hover:border hover:border-primaryBlue"
        />
      </div>
    </div>
  );
}
