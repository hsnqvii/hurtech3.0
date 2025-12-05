"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a custom solution?",
      answer:
        "The timeline depends on the project complexity. Simple dashboards may take a few weeks, whereas full-featured custom solutions can take a few months.",
    },
    {
      question: "Do you integrate with existing tools like QuickBooks or Salesforce?",
      answer:
        "Yes! We can integrate your custom dashboard with popular tools like QuickBooks, Salesforce, and other APIs you currently use.",
    },
    {
      question: "What kind of support do you offer after launch?",
      answer:
        "We offer 24/7 technical support, maintenance, updates, and personalized training to ensure your team can efficiently use the software.",
    },
    {
      question: "Is the software mobile-friendly?",
      answer:
        "Absolutely. All our custom solutions are responsive and optimized for mobile devices, tablets, and desktops.",
    },
    {
      question: "How do we initiate a project with HURTECH?",
      answer:
        "Simply contact us via our website or email. We will schedule a consultation, understand your requirements, and propose a tailored solution.",
    },
    {
      question: "How do we initiate a project with HURTECH?",
      answer:
        "You can initiate by filling out the project inquiry form on our site or directly emailing our project team for consultation.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 md:py-24 px-4 md:px-6">
      <div className="max-w-[1515px] mx-auto">

        {/* Heading */}
        <h1 className="text-[28px] sm:text-[30px] md:text-[35px] font-bold text-[#141414] leading-tight text-center md:text-left" data-aos="fade-down">
          Stop Losing Revenue to Inefficiency
        </h1>

        <p className="text-[#3F3F3F] mt-3 sm:mt-4 text-sm sm:text-base md:text-[18px] lg:text-[30px] text-center md:text-left md:leading-[45px] font-[400]" data-aos="fade-up">
         Real estate management is complex. Manual processes and disconnected tools are costing you deals.
        </p>

        {/* FAQ List */}
        <div className="mt-8 sm:mt-10 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border overflow-hidden shadow transition-all duration-300 ${
                openIndex === index ? "border-[#007BFF]" : "border-none"
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left"
              >
                <span className="text-[#000000] font-[400] text-sm sm:text-base md:text-[20px]">
                  {faq.question}
                </span>
                <span className="text-[#007BFF] text-lg sm:text-[20px] font-[400]">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 py-3 sm:py-4" : "max-h-0"
                }`}
              >
                <p className="text-[#3F3F3F] text-sm sm:text-base md:text-[20px] leading-relaxed font-[400]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
