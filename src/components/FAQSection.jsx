'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'Lorem ipsum dolor sit amet, consect ?',
    a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem',
  },
  { q: 'Lorem ipsum dolor sit amet, consect ?', a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem' },
  { q: 'Lorem ipsum dolor sit amet, consect ?', a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem' },
  { q: 'Lorem ipsum dolor sit amet, consect ?', a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem' },
  { q: 'Lorem ipsum dolor sit amet, consect?',  a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem' },
  { q: 'Lorem ipsum dolor sit amet, consect ?', a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full h-[663px] bg-[#EDE7DE] px-[40px] md:px-[80px] lg:px-[120px] pt-[80px] pb-[80px]">

      {/* ── Header ── */}
      <div className="flex flex-col items-center text-center mb-12 gap-4">
        {/* Badge */}
        <div className="flex items-center gap-[7.2px]">
          <div className="w-[14px] h-[14px] bg-[#334454] rounded-[3px] flex-shrink-0" />
          <span className="font-sans font-normal text-[14px] uppercase tracking-wider text-[#334454]">FAQ</span>
        </div>

        {/* Title */}
        <h2 className="font-roundo font-medium text-[60px] md:text-[72px] leading-[1.05] tracking-[-1px] text-[#000000]">
          Frequent Asked Questions
        </h2>

        {/* Subtitle */}
        <p className="font-Geist font-regular text-[20px] leading-[28px] tracking-[0] text-[#334454]/70 max-w-[480px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>

      {/* ── Accordion ── */}
      <div className="flex flex-col gap-[8px] w-full max-w-[860px] mx-auto">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="w-full rounded-[10px] overflow-hidden"
              style={{ backgroundColor: '#6B859E' }}
            >
              {/* Question Row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-[18px] text-left"
              >
                <span className="font-Geist font-regular text-[22px] leading-[28px] tracking-[0] text-white">
                  {faq.q}
                </span>
                <div className="flex-shrink-0 w-[32px] h-[32px] bg-white rounded-[7px] flex items-center justify-center ml-4 shadow-sm">
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#334454" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </button>

              {/* Answer Panel */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 py-5 bg-[#334454]">
                  <p className="font-sans font-normal text-[15px] leading-[1.7] text-white/85">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
