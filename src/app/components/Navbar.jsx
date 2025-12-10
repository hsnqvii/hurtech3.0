"use client";
import React, { useState, useRef, useEffect } from "react";
import logo from "../../../public/hurtech.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langPopup, setLangPopup] = useState(false);
  const contactId = "contact";

  const [selectedLang, setSelectedLang] = useState({
    name: "English",
    flag: "https://flagcdn.com/us.svg",
  });

  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const goToHomepage = () => router.push("/");

  const navItem = [
    { path: "solutions", name: "Services" },
    { path: "howWeWork", name: "Processes" },
    { path: "customAdvantage", name: "Why Custom" },
    { path: "industry", name: "Testimonial" },
  ];

  const handleLangSelect = (langName, flagUrl) => {
    setSelectedLang({ name: langName, flag: flagUrl });
    setLangPopup(false);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 shadow-sm bg-white">
        <div className="w-full mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <Image
              onClick={goToHomepage}
              src={logo}
              alt="logo"
              className="cursor-pointer"
            />

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

            <div className="hidden lg:flex items-center gap-6 relative">
              {/* Language selector */}
              <div
                className="flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => setLangPopup(!langPopup)}
              >
                <img src={selectedLang.flag} alt="Language" className="w-5 h-5" />
                <span className="text-[#302F3A] font-[400] font-[18px]">
                  {selectedLang.name}
                </span>
              </div>

              {/* LANGUAGE DROPDOWN */}
              {langPopup && (
                <div
                  ref={dropdownRef}
                  className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg p-2 z-50 border"
                >
                  {[
                    { name: "English", flag: "https://flagcdn.com/us.svg" },
                    { name: "Nederlands", flag: "https://flagcdn.com/nl.svg" },
                    { name: "Español", flag: "https://flagcdn.com/es.svg" },
                    { name: "Français", flag: "https://flagcdn.com/fr.svg" },
                  ].map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center  gap-3 p-2 cursor-pointer hover:bg-gray-100 rounded"
                      onClick={() => handleLangSelect(lang.name, lang.flag)}
                    >
                      <img src={lang.flag} className="w-6 h-6" />
                      <span>{lang.name.charAt(0).toUpperCase() + lang.name.slice(1)}</span>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => handleNavClick(contactId)}
                className="px-8 py-2 rounded-[50px] duration-200 text-white bg-[#007BFFFC] hover:bg-transparent hover:border hover:border-[#007BFFFC] hover:text-[#007BFFFC] font-[400] font-[18px] tracking-[2px]"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile hamburger */}
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

          {/* Mobile menu */}
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

              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setLangPopup(!langPopup)}
              >
                <img src={selectedLang.flag} alt="Language" className="w-5 h-5" />
                <span className="text-[#302F3A] font-medium">{selectedLang.name}</span>
              </div>

              {/* Mobile language dropdown */}
              {langPopup && (
                <div
                  ref={dropdownRef}
                  className="w-52 bg-white shadow-lg rounded-lg p-2 border mt-2"
                >
                  {[
                    { name: "english", flag: "https://flagcdn.com/us.svg" },
                    { name: "nederlands", flag: "https://flagcdn.com/nl.svg" },
                    { name: "español", flag: "https://flagcdn.com/es.svg" },
                    { name: "français", flag: "https://flagcdn.com/fr.svg" },
                  ].map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 rounded"
                      onClick={() => handleLangSelect(lang.name, lang.flag)}
                    >
                      <img src={lang.flag} className="w-6 h-6" />
                      <span>{lang.name.charAt(0).toUpperCase() + lang.name.slice(1)}</span>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => handleNavClick(contactId)}
                className="px-8 py-2 rounded-[50px] duration-200 text-white bg-[#007BFFFC] hover:bg-transparent hover:border hover:border-[#007BFFFC] hover:text-[#007BFFFC] font-[400] font-[18px] tracking-[2px]"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer so content doesn't jump */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
