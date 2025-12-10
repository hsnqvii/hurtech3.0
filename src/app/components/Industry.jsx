"use client";

import React from "react";
import Image from "next/image";
import client from "../../../public/client.svg";
import { BookingButtonWithModal } from './BookingButtonWithModal';

const Industry = () => {
  const cards = [1, 2, 3, 4];

  return (
    <section className="w-full p-16 md:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1515px] mx-auto flex flex-col gap-5"> 

        <div className="flex flex-col justify-center">
          <h1
            className="text-[28px] sm:text-[32px] md:text-[35px] font-bold text-center md:text-left text-[#141414] leading-tight"
            data-aos="fade-right"
          >
            Trusted by Industry Leaders
          </h1>

          <p
            className="text-[#3F3F3F] mt-4 font-[400] md:leading-[45px] text-base text-center md:text-left sm:text-lg md:text-xl lg:text-[30px]"
            data-aos="fade-right"
          >
            Stop losing revenue to inefficiency. Real estate management is
            complex. Manual processes and disconnected tools are costing you
            deals.
          </p>

            <BookingButtonWithModal
              label="Book a Meeting" // The text you want on the button
              className="self-center border border-blue px-8 sm:px-10 py-2 sm:py-3 rounded-full hover:bg-[#007BFF] hover:text-white transition"
              //  data-aos="fade-up"
            />
        </div>

        {/* RIGHT SIDE – CLIENT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-[#ddd] p-4 sm:p-6 rounded-2xl shadow-sm bg-white flex flex-col"
            >
              <div className="text-yellow-400 text-lg sm:text-xl mb-2 sm:mb-4">
                ★★★★★
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4">
                <Image
                  src={client}
                  alt="Client"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm sm:text-[18px]">
                    Gabriel Carreras
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Real Estate Entrepreneur
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-6">
                “Hurtech transformed how we manage our 500+ properties. The
                custom dashboard is a game changer. Transformed how we manage
                our 500+ properties. The custom dashboard is a game changer.”
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industry;
