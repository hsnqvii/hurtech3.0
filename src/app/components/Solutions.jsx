"use client";
import React from "react";
import Image from "next/image";

import roi from "../../../public/roi.svg";
import payment from "../../../public/payment.svg";
import maintainance from "../../../public/maintainance.svg";
import mobile from "../../../public/mobile.svg";
import crm from "../../../public/crm.svg";
import leads from "../../../public/leads.svg";

const Solutions = () => {
  const solution = [
    { img: roi, title: "Investor ROI Dashboards", desc: "Real-time portfolio analytics, yield calculations, and cash." },
    { img: mobile, title: "Tenant Mobile Apps", desc: "Branded apps for rent payments, maintenance requests." },
    { img: maintainance, title: "Maintenance Automation", desc: "Auto-assign work orders, track vendor performance." },
    { img: payment, title: "Global Payments & Invoicing", desc: "Multi-currency support (USD, EUR) with automated rent collection." },
    { img: leads, title: "Digital Lease & Compliance", desc: "Secure e-signatures and automated compliance checks for local regulations." },
    { img: crm, title: "Agency CRM & Lead Gen", desc: "Capture leads, automate follow-ups, and manage property listings in one place." },
  ];

  return (
    <section className="w-full bg-[#302F3A]  py-6 md:py-18">
      <div className="w-full mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[35px] font-bold text-white text-center " data-aos="fade-down">
          Solutions Built for Real Estate
        </h2>

        <p
          className="text-[#D3D3D3] mt-4 text-[16px] md:text-[20px] leading-relaxed  text-center "
          data-aos="fade-up"
        >
          Everything you need to manage properties, tenants, and investors—in one custom platform.
        </p>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-full max-w-[1200px] mx-auto place-items-center">
          {solution.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-[3px] p-6 hover:shadow-2xl md:h-[250px] transition flex flex-col items-center text-center"
            >
              <Image src={card.img} alt="solution icon" width={40} height={40} />

              <h3 className="text-[20px] font-semibold text-[#000000] mt-4">
                {card.title}
              </h3>

              <p className="text-[#3F3F3F] text-[16px] mt-2">
                {card.desc}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Solutions;
