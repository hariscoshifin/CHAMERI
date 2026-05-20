'use client';

import React, { useState } from 'react';

const FAQS = [
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
    /*
     * Main layout: max-w 1600, px 70, py 60, gap 24
     */
    <section
      className="w-full bg-[#EDE7DE] flex justify-center"
    >
      <div
        className="w-full flex flex-col items-center"
        style={{ maxWidth: '1600px', padding: '60px 70px', gap: '24px' }}
      >

        {/* ══ 1st div — Header (w 1300, h 171.8, gap 16) ══════════════ */}
        <div
          className="flex flex-col items-center text-center"
          style={{ width: '100%', maxWidth: '1300px', gap: '16px' }}
        >
          {/* FAQ Badge */}
          <div className="flex items-center gap-[7.2px]">
            <div className="w-[14px] h-[14px] bg-[#334454] rounded-[3px] flex-shrink-0" />
            <span
              className="font-sans font-normal uppercase text-[#334454]"
              style={{ fontSize: '14px', letterSpacing: '1px' }}
            >
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-roundo font-medium text-[#1A1A1A]"
            style={{ fontSize: '60px', lineHeight: '60px', letterSpacing: '-0.9px' }}
          >
            Frequent Asked Questions
          </h2>

          {/* Sub-heading */}
          <p
            className="font-sans font-normal text-[#334454]/70"
            style={{ fontSize: '20px', lineHeight: '26.4px', letterSpacing: '-0.44px', maxWidth: '608px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>

        {/* ══ 2nd div — FAQ accordion (w 1200, h 511) ═════════════════ */}
        <div
          className="flex items-start justify-center"
          style={{ width: '1200px', height: '511px' }}
        >
          {/* Inner: w 1126, gap 8 */}
          <div
            className="flex flex-col"
            style={{ width: '1126px', height: '501.3px', gap: '8px' }}
          >
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="flex flex-col transition-all duration-300 ease-in-out"
                  style={{
                    width: '1126px',
                    height: isOpen ? '171.3px' : '58px',
                    backgroundColor: '#6B859E',
                    borderRadius: '4px',
                    padding: isOpen ? '8px' : '5px 8px',
                    gap: isOpen ? '16px' : '0px',
                    overflow: 'hidden'
                  }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(i)}
                    className="flex items-center justify-between text-left cursor-pointer border-none bg-transparent"
                    style={{
                      width: '1110px',
                      height: '48px',
                      paddingTop: '8px',
                      paddingRight: '9px',
                      paddingBottom: '8px',
                      paddingLeft: '9px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-geist-sans), sans-serif',
                        fontWeight: 400,
                        fontSize: '22px',
                        lineHeight: '26.4px',
                        letterSpacing: '-0.44px',
                        color: '#fff',
                      }}
                    >
                      {faq.q}
                    </span>

                    {/* Toggle button */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center bg-white"
                      style={{ width: '32px', height: '32px', borderRadius: '8px' }}
                    >
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#334454" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer panel */}
                  <div
                    className={`transition-all duration-300 ease-in-out`}
                    style={{
                      width: '1110px',
                      height: isOpen ? '91.3px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      backgroundColor: '#334454',
                      borderRadius: '4px',
                      paddingTop: isOpen ? '23.3px' : '0px',
                      paddingRight: '16px',
                      paddingBottom: isOpen ? '24px' : '0px',
                      paddingLeft: '16px',
                      overflow: 'hidden'
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-geist-sans), sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '21.6px',
                        letterSpacing: '-0.36px',
                        color: 'rgba(255,255,255,0.85)',
                        margin: 0
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
