"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import fb from "../../../public/fb.svg";
import twitter from "../../../public/Twitter.svg";
import linkdin from "../../../public/linkdin.svg";
import serviceCare from "../../../public/customerCare.svg";

const Contact = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://api.first.org/data/v1/countries");
        const json = await res.json();
        const data = json.data || {};
        const list = Object.values(data)
          .map((c) => c.country)
          .sort((a, b) => a.localeCompare(b));
        setCountries(list);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="w-full  bg-[#302F3A] ">
      <div className="max-w-[1515px] mx-auto text-white py-10 px-4 sm:px-6 lg:px-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16">

          {/* LEFT SECTION */}
          <div className="rounded-[4px] w-full">

            <h2 className="text-[35px] sm:text-[40px] md:text-[45px] font-[700] mb-6 leading-tight">
              Get in touch
            </h2>

            <form className="space-y-4 w-full">

              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name*"
                  className="w-full border-b border-white bg-transparent text-[16px] py-4 outline-none placeholder-white"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full border-b border-white bg-transparent text-[16px] py-4 outline-none placeholder-white"
                />
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone*"
                  className="w-full border-b border-white bg-transparent text-[16px] py-4 outline-none placeholder-white"
                />
                <select
                  className="w-full border-b border-white bg-transparent text-[16px] py-4 outline-none text-white"
                >
                  {loading ? (
                    <option className="text-black">Loading...</option>
                  ) : (
                    <>
                      <option value="" className="text-black">Select Country</option>
                      {countries.map((country, idx) => (
                        <option key={idx} value={country} className="text-black">
                          {country}
                        </option>
                      ))}
                    </>
                  )}
                </select>
              </div>

              {/* Company */}
              <input
                type="text"
                placeholder="Company*"
                className="w-full border-b border-white bg-transparent text-[16px] py-4 outline-none placeholder-white"
              />

              {/* Message */}
              <input
                type="text"
                placeholder="Message*"
                className="w-full border-b border-white bg-transparent text-[16px] py-4 outline-none placeholder-white"
              />

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="updates"
                  className="h-5 w-5 appearance-none border-2 border-white rounded bg-transparent 
                flex items-center justify-center
                before:content-['✔'] before:text-transparent checked:before:text-white"
                />
                <label htmlFor="updates" className="text-[15px] font-[200]">
                  I want to receive news and updates once in a while
                </label>
              </div>

              <p className="text-[15px] font-[200]">
                We will add your info to our CRM for contacting you regarding your request.
              </p>
            </form>

            {/* Submit Button */}
            <button
              className="bg-[#007BFFFC] text-white px-10 py-3 mt-6 rounded-full 
            text-base sm:text-lg font-normal transition-all duration-200 
            hover:bg-transparent hover:border hover:border-[#007BFFFC]"
            >
              Contact Us
            </button>
          </div>

          {/* RIGHT SECTION */}
          <div className="rounded-[4px]">
            <h2 className="text-[22px] font-bold mb-4">Let’s have coffee together!</h2>

            <p className="text-[16px] font-[200] mb-6">
              Reach out to HurTech — your partner in custom software, web, and app development.
              Let’s build something innovative together — contact us today!
            </p>

            <div className="flex flex-col gap-5">

              <Image
                src={serviceCare}
                alt="service care"
                width={360}
                height={342}
                className="rounded-[4px] w-full h-auto object-cover"
              />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
                <h3 className="text-[16px] font-[100] uppercase tracking-widest">
                  Follow us
                </h3>

                <div className="flex items-center gap-[20px]">
                  <Link href="https://www.linkedin.com/company/hurtechllc/" target="_blank">
                    <Image src={linkdin} alt="LinkedIn" width={20} height={20} />
                  </Link>

                  <Link href="https://x.com/hnaqvidotcom" target="_blank">
                    <Image src={twitter} alt="Twitter" width={20} height={20} />
                  </Link>

                  <Link href="https://www.facebook.com/hurtechllc" target="_blank">
                    <Image src={fb} alt="Facebook" width={20} height={20} />
                  </Link>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
