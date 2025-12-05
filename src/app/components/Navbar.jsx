"use client";
import React, { useState } from "react";
import logo from "../../../public/hurtech.svg"
import Image from "next/image";
import { useRouter } from "next/navigation";


const Navbar = () => { // accept scrollToSection prop

  const [open, setOpen] = useState(false);
  const [langPopup, setLangPopup] = useState(false);
  const contactId = "contact"

  // New state for selected language
  const [selectedLang, setSelectedLang] = useState({
    name: "english",
    flag: "/language.svg"
  });

  const router = useRouter();

  const goToHomepage = () => {
    router.push("/");
  };

  const navItem = [
    { path: "solutions", name: "Services" },
    { path: "howWeWork", name: "Processes" },
    { path: "customAdvantage", name: "Why Custom" },
    { path: "industry", name: "Testimonial" },
  ];

  // Function to handle language selection
  const handleLangSelect = (langName, flagUrl) => {
    setSelectedLang({ name: langName, flag: flagUrl });
    setLangPopup(false);
  }

  // Function to handle smooth scroll
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu if open
    }
  };

  return (
    <nav className="w-full shadow-sm py-4 bg-white">
      <div className="max-w-[1170 px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Image
            onClick={goToHomepage}
            src={logo} alt="logo" className="cursor-pointer" />

          <div className="hidden lg:flex items-center gap-8">
            {navItem.map((nav, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(nav.path)}
                className="text-[#302F3A] font-[400] font-[20px] hover:text-blue-600 transition"
              >
                {nav.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-center gap-2" onClick={() => setLangPopup(true)}>
              <img
                src={selectedLang.flag}
                alt="Language"
                className="w-5 h-5"
              />
              <span className="text-[#302F3A] font-[400] font-[18px]">{selectedLang.name}</span>
            </div>

            <button
              onClick={() => handleNavClick(contactId)}
              className="px-8 py-2 rounded-[50px] duration-200 ease-in text-white bg-[#007BFFFC] hover:bg-transparent  hover:border hover:border-[#007BFFFC] hover:text-[#007BFFFC] font-[400] font-[18px] tracking-[2px]"

            >
              Contact Us
            </button>
          </div>

          <button
            className="lg:hidden text-[#302F3A]"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
        
        {/* mobile menu start from here  */}
        {open && (
          <div className="lg:hidden pb-4 flex flex-col items-center gap-4 mt-10">
            {navItem.map((nav, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(nav.path)}
                className="text-[#302F3A] font-[400] font-[20px] hover:text-blue-600 transition"
              >
                {nav.name}
              </button>
            ))}

            <div className="flex items-center gap-2" onClick={() => setLangPopup(true)}>
              <img
                src={selectedLang.flag}
                alt="Language"
                className="w-5 h-5"
              />
              <span className="text-[#302F3A] font-medium">{selectedLang.name}</span>
            </div>

            <button
              onClick={() => handleNavClick(contactId)}
              className="px-8 py-2 rounded-[50px] duration-200 ease-in text-white bg-[#007BFFFC] hover:bg-transparent  hover:border hover:border-[#007BFFFC] hover:text-[#007BFFFC] font-[400] font-[18px] tracking-[2px]"
              style={{ backgroundColor: "#007BFFFC" }}
            >
              Contact Us
            </button>
          </div>
        )}
      </div>

      {langPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-[400px] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Select Language
            </h2>

            <div className="space-y-4">
              {/* English */}
              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => handleLangSelect("english", "https://flagcdn.com/w20/us.png")}
              >
                <img
                  src="https://flagcdn.com/w20/us.png"
                  className="w-6"
                />
                <span>English</span>
              </div>

              {/* Nederlands */}
              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => handleLangSelect("nederlands", "https://flagcdn.com/w20/nl.png")}
              >
                <img
                  src="https://flagcdn.com/w20/nl.png"
                  className="w-6"
                />
                <span>Nederlands</span>
              </div>

              {/* Español */}
              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => handleLangSelect("español", "https://flagcdn.com/w20/es.png")}
              >
                <img
                  src="https://flagcdn.com/w20/es.png"
                  className="w-6"
                />
                <span>Español</span>
              </div>

              {/* Français */}
              <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => handleLangSelect("français", "https://flagcdn.com/w20/fr.png")}
              >
                <img
                  src="https://flagcdn.com/w20/fr.png"
                  className="w-6"
                />
                <span>Français</span>
              </div>
            </div>

            <button
              onClick={() => setLangPopup(false)}
              className="w-full mt-6 py-2 bg-[#007BFFFC] text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
