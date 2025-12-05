"use client";
import React from "react";
import Image from "next/image";

import image1 from "../../../public/s1.svg";
import image2 from "../../../public/s2.svg";
import image3 from "../../../public/s3.svg";
import image4 from "../../../public/s1.svg";

const RevenuSection = () => {
  const cards = [
    { img: image1, title: "Unclear ROI", desc: "Investors struggle to track real-time yields and portfolio performance across markets." },
    { img: image2, title: "Tenant Communication", desc: "Missed maintenance requests and delayed rent payments due to poor communication channels." },
    { img: image3, title: "Contract Chaos", desc: "Version control nightmares and lost signatures." },
    { img: image4, title: "Analytics Insights", desc: "Make informed decisions with real-time insights." },
  
  ];

  return (
    <section className="w-full py-6 md:py-20 bg-white">
      <div className="max-w-[1515px] mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-[35px] md:text-[35px] font-bold text-[#141414] text-center md:text-left"
          data-aos="fade-down"
        >
          Stop Losing Revenue to Inefficiency
        </h2>

        <p
          className="text-[#3F3F3F] mt-4 mx-auto text-[16px] md:text-[30px] md:leading-[45px] text-center md:text-left"
          data-aos="fade-up"
        >
         Real estate management is complex. Manual processes and disconnected tools are costing you deals.
        </p>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-8 mt-12"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl py-6 px-2  h-full flex flex-col items-center "
            >
              <div className="w-full h-[300px] relative mb-4">
                <Image
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>

              <h3 className="text-[22px] font-semibold text-[#007BFF] text-center md:text-left w-full  ">
                {card.title}
              </h3>

              <p className="mt-2 text-[#3F3F3F] text-[22px] text-center md:text-left ">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RevenuSection;
