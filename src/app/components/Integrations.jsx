import React from "react";
import Image from "next/image";

import adobe from "../../../public/adobe.svg";
import googleCloud from "../../../public/googleCloud.svg";
import googlePartner from "../../../public/googlePartner.svg";
import paypal from "../../../public/paypal.svg";
import odoo from "../../../public/odoo.svg";
import hyva from "../../../public/hyva.svg";
import g2 from "../../../public/g2.svg";
import webCommunity from "../../../public/webCommunity.svg";
import topFirm from "../../../public/topFirm.svg";
import stripe from "../../../public/stripe.svg";
import topDeveloper from "../../../public/topdevelopers.svg";
import magneto from "../../../public/magneto.svg";
import enterpreneure from "../../../public/enterprenure.svg";
import yourStory from "../../../public/yourstory.svg";
import codeCanyon from "../../../public/codecan.svg";

const Integrations = () => {
  const row1 = [adobe, googleCloud, googlePartner, paypal, odoo, hyva, g2];
  const row2 = [webCommunity, topFirm, stripe, topDeveloper, magneto];
  const row3 = [enterpreneure, yourStory, codeCanyon];

  return (
    <section className="w-full py-6 md:py-24">
      <div className="max-w-[1515px] mx-auto px-4 md:px-6 text-center"> 

        {/* HEADING */}
        <h1 className="text-[35px] font-bold text-[#141414]" data-aos="fade-down">
          Seamless Integrations
        </h1>

        {/* PARAGRAPH */}
        <p className="text-[#3F3F3F] mt-4 font-[400] text-base md:text-[18px] lg:text-[30px] leading-relaxed" data-aos="fade-up">
          Connect your custom dashboard with the tools you already use.
        </p>

        {/* DESKTOP/TABLET GRID */}
        <div className="hidden sm:flex flex-col items-center gap-10 mt-12">
          <div className="flex flex-wrap justify-center gap-10">
            {row1.map((img, i) => (
              <Image key={i} src={img} alt="logo"
                className="w-[100px] md:w-[120px] grayscale hover:grayscale-0 h-auto object-contain" />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {row2.map((img, i) => (
              <Image key={i} src={img} alt="logo"
                className="w-[100px] md:w-[160px] grayscale hover:grayscale-0 h-auto object-contain" />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {row3.map((img, i) => (
              <Image key={i} src={img} alt="logo"
                className="w-[100px] md:w-[140px] grayscale hover:grayscale-0 h-auto object-contain" />
            ))}
          </div>
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="sm:hidden mt-12 overflow-hidden">
          {/* Combine all logos in one long animated row */}
          <div className="flex animate-marquee space-x-10">
            {[...row1, ...row2, ...row3].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="logo"
                className="w-[90px] h-auto object-contain"
              />
            ))}

            {/* Duplicate for infinite loop effect */}
            {[...row1, ...row2, ...row3].map((img, i) => (
              <Image
                key={i + 100}
                src={img}
                alt="logo-duplicate"
                className="w-[90px] h-auto object-contain"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Integrations;
