"use client";

import React from "react";
import Image from "next/image";
import femaleClient from "../../../public/client.png";
import maleClient from "../../../public/man.png";
import { BookingButtonWithModal } from './BookingButtonWithModal';

const Industry = () => {
  const cards = [
    {
      id: 1,
      name: "Achraf Jellal",
      position: "Founder | United States",
      gender: "male",
      review:
        "Syed and his team delivered an exceptional, modern dashboard for SwiftDocket, blending clean code with proactive UX improvements. They are highly skilled, reliable professionals who treats your project with the same care as their own.",
    },
    {
      id: 2,
      name: "Jhon Camacho",
      position: "Founder | United States",
      gender: "male",
      review:
        "Amazing team highly recommended!! Worked fast and diligent.",
    },
    {
      id: 6,
      name: "Rubin Gajera",
      position: "Founder | Canada",
      gender: "male",
      review:
        "Hassan and his team provided exceptional support, resolving technical issues with expert speed and clear communication. They understood our requirements perfectly and delivered results ahead of schedule—we highly recommend them!",
    },
    {
      id: 3,
      name: "Adeel Azam",
      position: "Solo Founder | Italy",
      gender: "male",
      review:
        "Syed Hassan's expertise in full-stack development is unparalleled. His skillful handling of ReactJS, Angular, and Node.js consistently delivers exceptional results. His professionalism and dedication make him a standout freelancer. Highly recommended!",
    },
    {
      id: 4,
      name: "Arianne Larose",
      position: "Founder | Canada",
      gender: "female",
      review:
        "Someone whom you can rely on even if it is night 2 am. He is very fluent and can communicate very well and gives his best to complete the project",
    },
    {
      id: 5,
      name: "Robust Haven",
      position: "Founder | United States",
      gender: "male",
      review:
        "Hassan and his team were fantastic, quickly resolving our app issues while providing smart, energetic improvements to the overall experience. They were such a pleasure to work with that we’ve already started a new project together—highly recommended!",
    },
  ];

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
            label="Book a Meeting"
            className="self-center border border-blue px-8 sm:px-10 py-2 sm:py-3 rounded-full hover:bg-[#007BFF] hover:text-white transition"
          />
        </div>

        {/* CLIENT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
          {cards.map((card) => (
            <div
              key={card.id}
              className="border border-[#ddd] p-4 sm:p-6 rounded-2xl shadow-sm bg-white flex flex-col"
            >
              <div className="text-yellow-400 text-lg sm:text-xl mb-2 sm:mb-4">
                ★★★★★
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4">
                <Image
                  src={card.gender === "male" ? maleClient : femaleClient}
                  alt={card.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-r-gray-700 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm sm:text-[18px]">
                    {card.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {card.position}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-6">
                {card.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industry;
