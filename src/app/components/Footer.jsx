"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import fb from "../../../public/fb.svg";
import twitter from "../../../public/Twitter.svg";
import linkdin from "../../../public/linkdin.svg";

const Footer = () => {
  const router = useRouter();

  const goToHomepage = () => {
    router.push("/");
  };
  const goToMeeting = (path) => {
    window.open(path, "_blank");
  };

  const socialIcons = [
    { img: fb, path: "https://www.facebook.com/hurtechllc" },
    { img: twitter, path: "https://x.com/hnaqvidotcom" },
    { img: linkdin, path: "https://www.linkedin.com/company/hurtechllc/" }
  ];

  return (
    <footer className="w-full bg-[#242424] pt-14 px-3 ">

      {/* Top Footer Sections */}
      <div className=" max-w-[1515px] mx-auto grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-10 
        mb-12"
      >

        {/* Section 1 */}
        <div>
          <h2 className="text-[27px] tracking-[2px] font-bold text-white mb-3 text-center md:text-left cursor-pointer" onClick={goToHomepage}>
            Hurtech
          </h2>
          <p className="text-[#D1D0D1] text-base leading-7 text-center md:text-left">
            Custom software solutions built exclusively for the real estate industry.
          </p>
        </div>

        {/* Emails */}
        <div>
          <h2 className="text-xl font-bold text-[#007BFF] mb-3 text-center md:text-left">
            Email Address
          </h2>
          <ul className="space-y-2 text-[#D1D0D1] text-base leading-7 text-center md:text-left">
            <li>hassan@hurtech.co</li>
            <li>aqsa.ch@hurtechllc.com</li>
            <li>contact@hurtech.eu</li>
          </ul>
        </div>

        {/* Contact Number */}
        <div>
          <h2 className="text-xl font-bold text-[#007BFF] mb-3 text-center md:text-left">
            Contact Number
          </h2>
          <p className="text-[#D1D0D1] text-base leading-7 text-center md:text-left">
            US:  +1 (307) 400-8809

          </p>
          <p className="text-[#D1D0D1] text-base leading-7 text-center md:text-left">
            EU:  +1 (307) 400-8809

          </p>

        </div>

        {/* Open Hours */}
        <div>
          <h2 className="text-xl font-bold text-[#007BFF] mb-3 text-center md:text-left">
            Open Hours
          </h2>
          <p className="text-[#D1D0D1] text-base leading-7 text-center md:text-left">Mon - Fri: 9.00 to 18.00</p>
          <p className="text-[#D1D0D1] text-base leading-7 text-center md:text-left">Saturday: Closed</p>
          <p className="text-[#D1D0D1] text-base leading-7 text-center md:text-left">Sunday: Closed</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" border-t border-gray-700 bg-[#1C1C1C]">
        <div className="max-w-[1515px] mx-auto 
          flex flex-col md:flex-row 
          justify-between items-center 
          py-6 px-4"
        >

          {/* Social Icons */}
          <div className="flex gap-4 mb-4 md:mb-0">
            {socialIcons.map((icon, index) => (
              <button
                key={index}
                onClick={() => goToMeeting(icon.path)}
                className="border border-[#424242] rounded-full 
                p-3 md:p-4 
                hover:bg-[#007BFF] hover:border-transparent 
                transition"
              >
                <Image
                  src={icon.img}
                  alt="social-icon"
                  width={22}
                  height={22}
                  className="transition"
                />
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm md:text-base text-center">
            © 2025 Hurtech. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
