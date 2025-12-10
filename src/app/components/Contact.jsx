"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import fb from "../../../public/fb.svg";
import twitter from "../../../public/Twitter.svg";
import linkdin from "../../../public/linkdin.svg";
import serviceCare from "../../../public/customerCare.svg";

const Contact = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    company: "",
    message: ""
  });


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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation: check if all required fields are filled
    const { name, email, phone, country, company, message } = formData;
    if (!name || !email || !phone || !country || !company || !message) {
      toast.error("Please fill in all fields!");
      return; // stop submission
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.status === "success") {
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", country: "", company: "", message: "" });
      } else {
        toast.error("Try again in a few minutes!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Try again in a few minutes!");
    }
  };




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
                <div className="relative w-full">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="peer w-full border-b border-white bg-transparent text-[16px] py-4 outline-none placeholder-transparent"
                    placeholder="Full name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-4 text-white text-[16px] transition-all duration-200
               peer-placeholder-shown:top-4
               peer-placeholder-shown:text-[16px]
               peer-placeholder-shown:text-white/50
               peer-focus:top-0
               peer-focus:text-[14px]
               peer-focus:text-[#fffffffc]"
                  >
                    Full name
                  </label>
                </div>



                <div className="relative w-full">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="peer w-full border-b border-white bg-transparent text-[16px] py-4 outline-none placeholder-transparent"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-4 text-white text-[16px] transition-all duration-200
               peer-placeholder-shown:top-4
               peer-placeholder-shown:text-[16px]
               peer-placeholder-shown:text-white/50
               peer-focus:top-0
               peer-focus:text-[14px]
               peer-focus:text-[#fffffffc]"
                  >
                    Email
                  </label>
                </div>

              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="peer w-full border-b border-white bg-transparent text-[16px] py-4 outline-none placeholder-transparent"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 top-4 text-white text-[16px] transition-all duration-200
               peer-placeholder-shown:top-4
               peer-placeholder-shown:text-[16px]
               peer-placeholder-shown:text-white/50
               peer-focus:top-0
               peer-focus:text-[14px]
               peer-focus:text-[#fffffffc]"
                  >
                    Phone
                  </label>
                </div>

                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
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
              <div className="relative w-full">
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="peer w-full border-b border-white bg-transparent text-[16px] py-4 outline-none placeholder-transparent"
                  placeholder="Company"
                />
                <label
                  htmlFor="company"
                  className="absolute left-0 top-4 text-white text-[16px] transition-all duration-200
               peer-placeholder-shown:top-4
               peer-placeholder-shown:text-[16px]
               peer-placeholder-shown:text-white/50
               peer-focus:top-0
               peer-focus:text-[14px]
               peer-focus:text-[#fffffffc]"
                >
                  Company
                </label>
              </div>


              {/* Message */}
              <div className="relative w-full">
                <input
                  type="text"
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="peer w-full border-b border-white bg-transparent text-[16px] py-4 outline-none placeholder-transparent"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-white text-[16px] transition-all duration-200
               peer-placeholder-shown:top-4
               peer-placeholder-shown:text-[16px]
               peer-placeholder-shown:text-white/50
               peer-focus:top-0
               peer-focus:text-[14px]
               peer-focus:text-[#fffffffc]"
                >
                  Message
                </label>
              </div>


              {/* Checkbox
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
              </div> */}

              <p className="text-[15px] font-[200]">
                We will add your info to our CRM for contacting you regarding your request.
              </p>
            </form>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading} // disable while loading countries or submitting
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
