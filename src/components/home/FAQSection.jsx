// 'use client';

// import React, { useState } from 'react';

// const FAQS = [
//   {
//     q: 'Lorem ipsum dolor sit amet, consect ?',
//     a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem',
//   },
//   { q: 'Lorem ipsum dolor sit amet, consect ?', a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem' },
//   { q: 'Lorem ipsum dolor sit amet, consect ?', a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem' },
//   { q: 'Lorem ipsum dolor sit amet, consect ?', a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem' },
//   { q: 'Lorem ipsum dolor sit amet, consect?', a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem' },
//   { q: 'Lorem ipsum dolor sit amet, consect ?', a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem' },
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(0);
//   const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

//   return (
//     <section className="w-full bg-[#EDE7DE] flex justify-center overflow-hidden">
//       <div className="
//         w-full flex flex-col items-center
//         px-[20px] py-[40px] gap-[16px]
//         md:px-[40px] md:py-[50px] md:gap-[20px]
//         lg:px-[56px] lg:py-[42.6px] lg:gap-[17px]
//         xl:px-[71px] xl:py-[53.3px] xl:gap-[21.3px]
//         3xl:px-[80px] 3xl:py-[60px] 3xl:gap-[24px]
//         2xl:px-[85px] 2xl:py-[64px] 2xl:gap-[25.6px]
//         4xl:px-[106px] 4xl:py-[80px] 4xl:gap-[32px]
//         sm:max-w-[60%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[82%] 2xl:max-w-[84%] 3xl:max-w-[86%] 4xl:max-w-[%]
//         mx-auto
//       ">

//         {/* ══ Header ══════════════════════════════════════════════════════ */}
//         <div className="flex flex-col items-center text-center w-full gap-[12px] lg:gap-[11.3px] xl:gap-[14.2px] 3xl:gap-[16px] 2xl:gap-[17px] 4xl:gap-[21.3px] 3xl:max-w-[1300px]">

//           {/* Badge */}
//           <div className="
//             flex items-center
//             gap-[5.1px] lg:gap-[5.1px] xl:gap-[6.4px] 3xl:gap-[7.2px] 2xl:gap-[7.7px] 4xl:gap-[9.6px]
//           ">
//             <div className="
//               bg-[#334454] flex-shrink-0
//               w-[9.9px] h-[9.9px] rounded-[2px]
//               lg:w-[9.9px] lg:h-[9.9px]
//               xl:w-[12.4px] xl:h-[12.4px] xl:rounded-[2.5px]
//               3xl:w-[14px] 3xl:h-[14px] 3xl:rounded-[3px]
//               2xl:w-[14.9px] 2xl:h-[14.9px] 2xl:rounded-[3.2px]
//               4xl:w-[18.6px] 4xl:h-[18.6px] 4xl:rounded-[4px]
//             " />
//             <span className="
//               font-sans font-normal uppercase text-[#334454] tracking-widest
//               text-[11px] lg:text-[11px] xl:text-[12.4px] 3xl:text-[14px] 2xl:text-[14.9px] 4xl:text-[18.6px]
//             ">
//               FAQ
//             </span>
//           </div>

//           {/* Heading */}
//           <h2 className="
//             font-roundo font-medium text-[#1A1A1A]
//             text-[28px] leading-[28px] tracking-[-0.5px]
//             md:text-[40px] md:leading-[40px] md:tracking-[-0.7px]
//             lg:text-[42.6px] lg:leading-[42.6px] lg:tracking-[-0.64px]
//             xl:text-[53.3px] xl:leading-[53.3px] xl:tracking-[-0.8px]
//             3xl:text-[60px] 3xl:leading-[60px] 3xl:tracking-[-0.9px]
//             2xl:text-[64px] 2xl:leading-[64px] 2xl:tracking-[-0.96px]
//             4xl:text-[80px] 4xl:leading-[80px] 4xl:tracking-[-1.2px]
//           ">
//             Frequent Asked Questions
//           </h2>

//           {/* Sub-heading */}
//           <p className="
//             font-sans font-normal text-[#334454]/70 text-center
//             text-[14px] leading-[18.5px] tracking-[-0.3px] max-w-[320px]
//             md:text-[16px] md:leading-[21px] md:max-w-[420px]
//             lg:text-[14.2px] lg:leading-[18.7px] lg:tracking-[-0.31px] lg:max-w-[432px]
//             xl:text-[17.7px] xl:leading-[23.4px] xl:tracking-[-0.39px] xl:max-w-[540px]
//             3xl:text-[20px] 3xl:leading-[26.4px] 3xl:tracking-[-0.44px] 3xl:max-w-[608px]
//             2xl:text-[21.3px] 2xl:leading-[28.1px] 2xl:tracking-[-0.47px] 2xl:max-w-[648px]
//             4xl:text-[26.6px] 4xl:leading-[35.1px] 4xl:tracking-[-0.58px] 4xl:max-w-[810px]
//           ">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//           </p>
//         </div>

//         {/* ══ FAQ Accordion ═══════════════════════════════════════════════ */}
//         <div className="
//           w-full flex flex-col
//           gap-[5.6px] lg:gap-[5.6px] xl:gap-[7.1px] 3xl:gap-[8px] 2xl:gap-[8.5px] 4xl:gap-[10.6px]
//         ">
//           {FAQS.map((faq, i) => {
//             const isOpen = openIndex === i;
//             return (
//               <div
//                 key={i}
//                 className="flex flex-col transition-all duration-300 ease-in-out overflow-hidden w-full"
//                 style={{
//                   backgroundColor: '#6B859E',
//                   borderRadius: '4px',
//                   padding: isOpen ? '8px' : '5px 8px',
//                   gap: isOpen ? '8px' : '0px',
//                 }}
//               >
//                 {/* Question row */}
//                 <button
//                   onClick={() => toggle(i)}
//                   className="flex items-center justify-between text-left cursor-pointer border-none bg-transparent w-full"
//                   style={{ padding: '8px 9px', minHeight: '48px' }}
//                 >
//                   <span className="
//                     font-sans font-normal text-white
//                     text-[14px] leading-[18px] tracking-[-0.3px]
//                     md:text-[17px] md:leading-[20px] md:tracking-[-0.36px]
//                     lg:text-[15.6px] lg:leading-[18.7px] lg:tracking-[-0.31px]
//                     xl:text-[19.5px] xl:leading-[23.4px] xl:tracking-[-0.39px]
//                     3xl:text-[22px] 3xl:leading-[26.4px] 3xl:tracking-[-0.44px]
//                     2xl:text-[23.4px] 2xl:leading-[28.1px] 2xl:tracking-[-0.47px]
//                     4xl:text-[29.3px] 4xl:leading-[35.1px] 4xl:tracking-[-0.58px]
//                   ">
//                     {faq.q}
//                   </span>

//                   {/* Toggle icon box */}
//                   <div className="
//                     flex-shrink-0 flex items-center justify-center bg-white
//                     w-[22.7px] h-[22.7px] rounded-[5.7px]
//                     lg:w-[22.7px] lg:h-[22.7px] lg:rounded-[5.7px]
//                     xl:w-[28.4px] xl:h-[28.4px] xl:rounded-[7.1px]
//                     3xl:w-[32px] 3xl:h-[32px] 3xl:rounded-[8px]
//                     2xl:w-[34.1px] 2xl:h-[34.1px] 2xl:rounded-[8.5px]
//                     4xl:w-[42.6px] 4xl:h-[42.6px] 4xl:rounded-[10.6px]
//                   ">
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="#334454"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
//                       style={{ width: '11.3px', height: '11.3px' }}
//                     >
//                       <path d="m6 9 6 6 6-6" />
//                     </svg>
//                   </div>
//                 </button>

//                 {/* Answer panel */}
//                 <div
//                   className="transition-all duration-300 ease-in-out overflow-hidden w-full"
//                   style={{
//                     opacity: isOpen ? 1 : 0,
//                     maxHeight: isOpen ? '200px' : '0px',
//                     backgroundColor: '#334454',
//                     borderRadius: '4px',
//                     padding: isOpen ? '16px' : '0 16px',
//                   }}
//                 >
//                   <p className="
//                     font-sans font-normal text-white/85 m-0
//                     text-[12.8px] leading-[15.3px] tracking-[-0.26px]
//                     lg:text-[12.8px] lg:leading-[15.3px]
//                     xl:text-[16px] xl:leading-[19.2px] xl:tracking-[-0.32px]
//                     3xl:text-[18px] 3xl:leading-[21.6px] 3xl:tracking-[-0.36px]
//                     2xl:text-[19.2px] 2xl:leading-[23px] 2xl:tracking-[-0.38px]
//                     4xl:text-[24px] 4xl:leading-[28.8px] 4xl:tracking-[-0.48px]
//                   ">
//                     {faq.a}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FAQSection;

// -----------------------------------------------------------------

'use client';

import React, { useState } from 'react';

/*
 * ─── CLAMP REFERENCE ────────────────────────────────────────────────────────
 *
 *  Formula : preferred_vw = (MAX_px - MIN_px) / (1920 - 375) * 100
 *  Viewport range: 375px (mobile) → 1920px (4xl)
 *
 *  WRAPPER
 *  px                  : clamp(20px,   5.59vw, 106px)
 *  py                  : clamp(40px,   2.59vw,  80px)
 *  gap                 : clamp(16px,   1.04vw,  32px)
 *  max-w               : clamp(60%,    ...,     86%)  → inline
 *
 *  HEADER
 *  gap                 : clamp(11.3px, 0.65vw,  21.3px)
 *
 *  Badge dot size      : clamp(9.9px,  0.56vw,  18.6px)
 *  Badge dot radius    : clamp(2px,    0.13vw,    4px)
 *  Badge gap           : clamp(5.1px,  0.29vw,   9.6px)
 *  Badge font          : clamp(11px,   0.5vw,   18.6px)
 *
 *  Heading font        : clamp(28px,   3.36vw,   80px)
 *  Heading lead        : clamp(28px,   3.36vw,   80px)
 *  Heading tracking    : clamp(-0.5px,-0.046vw,  -1.2px)
 *
 *  Para font           : clamp(14px,   0.81vw,  26.6px)
 *  Para lead           : clamp(18.5px, 1.08vw,  35.1px)
 *  Para tracking       : clamp(-0.3px,-0.018vw, -0.58px)
 *  Para max-w          : clamp(320px, 31.7vw,   810px)
 *
 *  FAQ LIST
 *  gap                 : clamp(5.6px,  0.33vw,  10.6px)
 *
 *  Question font       : clamp(14px,   0.97vw,  29.3px)
 *  Question lead       : clamp(18px,   1.11vw,  35.1px)
 *  Question tracking   : clamp(-0.3px,-0.018vw, -0.58px)
 *
 *  Icon box size       : clamp(22.7px, 1.29vw,  42.6px)
 *  Icon box radius     : clamp(5.7px,  0.32vw,  10.6px)
 *  Icon svg size       : clamp(10px,   0.07vw,  11.3px)   (barely changes)
 *
 *  Answer font         : clamp(12.8px, 0.72vw,  24px)
 *  Answer lead         : clamp(15.3px, 0.87vw,  28.8px)
 *  Answer tracking     : clamp(-0.26px,-0.014vw,-0.48px)
 *
 * ────────────────────────────────────────────────────────────────────────────
 */

const FAQS = [
  {
    q: 'Lorem ipsum dolor sit amet, consect ?',
    a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem',
  },
  {
    q: 'Lorem ipsum dolor sit amet, consect ?',
    a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem',
  },
  {
    q: 'Lorem ipsum dolor sit amet, consect ?',
    a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem',
  },
  {
    q: 'Lorem ipsum dolor sit amet, consect ?',
    a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem',
  },
  {
    q: 'Lorem ipsum dolor sit amet, consect?',
    a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem',
  },
  {
    q: 'Lorem ipsum dolor sit amet, consect ?',
    a: 'Lorem ipsum dolor sit amet. Rem adipisci voluptatem vel dolorem velit est distinctio nulla ut natus quod. Est quia nulla est delenitiRem adipisci voluptatem',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-[#EDE7DE] flex justify-center overflow-hidden">
      <div
        className="w-full flex flex-col items-center mx-auto"
        style={{
          maxWidth:      '1600px',
          paddingTop:    'clamp(40px, 4.17vw, 60px)',
          paddingBottom: 'clamp(40px, 4.17vw, 60px)',
          paddingLeft:   'clamp(20px, 4.86vw, 70px)',
          paddingRight:  'clamp(20px, 4.86vw, 70px)',
          gap:           'clamp(16px, 1.67vw, 24px)',
        }}
      >

        {/* ══ Header ══════════════════════════════════════════════════════ */}
        <div
          className="flex flex-col items-center text-center"
          style={{
            width: 'clamp(600px, 90.28vw, 1300px)',
            gap:   'clamp(10px, 1.11vw, 16px)'
          }}
        >
          <div
            className="flex flex-col items-center justify-center"
            style={{ width: 'clamp(300px, 51.04vw, 735px)', gap: 'clamp(8px, 0.97vw, 14px)' }}
          >
            {/* Badge */}
            <div
              className="flex items-center justify-center"
              style={{
                width:  'clamp(40px, 3.56vw, 51.2px)',
                height: 'clamp(22px, 2.14vw, 30.8px)',
                gap:    'clamp(5px, 0.5vw, 7.2px)',
              }}
            >
              <div
                className="bg-[#334454] flex-shrink-0"
                style={{
                  width:        'clamp(10px, 0.97vw, 14px)',
                  height:       'clamp(10px, 0.97vw, 14px)',
                  borderRadius: 'clamp(2px, 0.21vw, 3px)',
                  padding:      'clamp(2.5px, 0.25vw, 3.6px)',
                }}
              />
              <span
                className="font-sans font-normal uppercase text-[#334454] tracking-widest flex items-center justify-center"
                style={{
                  width:      'clamp(22px, 2.08vw, 30px)',
                  height:     'clamp(14px, 1.39vw, 20px)',
                  fontSize:   'clamp(10px, 0.83vw, 12px)',
                  lineHeight: 1
                }}
              >
                FAQ
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-roundo font-medium text-[#1A1A1A] m-0 flex items-center justify-center text-center capitalize"
              style={{
                fontSize:      'clamp(36px, 4.17vw, 60px)',
                lineHeight:    'clamp(36px, 4.17vw, 60px)',
                letterSpacing: 'clamp(-0.5px, -0.06vw, -0.9px)',
                width:         'clamp(300px, 51.04vw, 735px)',
                height:        'clamp(40px, 4.17vw, 60px)'
              }}
            >
              Frequent Asked Questions
            </h2>

            {/* Sub-heading */}
            <p
              className="font-sans font-normal text-[#334454]/70 text-center m-0 flex items-center justify-center"
              style={{
                fontSize:      'clamp(14px, 1.39vw, 20px)',
                lineHeight:    'clamp(18.5px, 1.83vw, 26.4px)',
                letterSpacing: 'clamp(-0.2px, -0.03vw, -0.44px)',
                width:         'clamp(300px, 41.98vw, 604.5px)',
                height:        'clamp(30px, 3.68vw, 53px)'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>

        {/* ══ FAQ Accordion ═══════════════════════════════════════════════ */}
        <div
          className="flex flex-col items-center justify-center"
          style={{ width: 'clamp(500px, 83.33vw, 1200px)' }}
        >
          <div
            className="flex flex-col items-center justify-center"
            style={{
              width: 'clamp(450px, 78.19vw, 1126px)',
              gap:   'clamp(4px, 0.56vw, 8px)'
            }}
          >
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="flex flex-col transition-all duration-300 ease-in-out overflow-hidden w-full"
                  style={{
                    backgroundColor: '#6B859E',
                    borderRadius:    'clamp(2px, 0.28vw, 4px)',
                    padding:         'clamp(4px, 0.56vw, 8px)',
                    gap:             isOpen ? 'clamp(8px, 1.11vw, 16px)' : '0px'
                  }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(i)}
                    className="flex items-center justify-between text-left cursor-pointer border-none bg-transparent w-full"
                    style={{
                      padding:   '0 clamp(4px, 0.56vw, 8px)',
                      height:    'clamp(30px, 2.92vw, 42px)',
                    }}
                  >
                    {/* Question text */}
                    <span
                      className="font-sans font-normal text-white"
                      style={{
                        fontSize:      'clamp(16px, 1.53vw, 22px)',
                        lineHeight:    'clamp(18px, 1.83vw, 26.4px)',
                        letterSpacing: 'clamp(-0.2px, -0.03vw, -0.44px)',
                      }}
                    >
                      {faq.q}
                    </span>

                    {/* Toggle icon box */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center bg-white"
                      style={{
                        width:        'clamp(24px, 2.22vw, 32px)',
                        height:       'clamp(24px, 2.22vw, 32px)',
                        borderRadius: 'clamp(4px, 0.56vw, 8px)',
                        padding:      'clamp(4px, 0.56vw, 8px)'
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#334454"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        style={{
                          width:  '100%',
                          height: '100%',
                        }}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer panel */}
                  <div
                    className="transition-all duration-300 ease-in-out overflow-hidden flex flex-col items-start justify-center"
                    style={{
                      opacity:         isOpen ? 1 : 0,
                      maxHeight:       isOpen ? '300px' : '0px',
                      backgroundColor: '#334454',
                      borderRadius:    'clamp(2px, 0.28vw, 4px)',
                      width:           '100%',
                      paddingTop:      isOpen ? 'clamp(16px, 1.62vw, 23.3px)' : '0',
                      paddingBottom:   isOpen ? 'clamp(16px, 1.67vw, 24px)' : '0',
                      paddingLeft:     isOpen ? 'clamp(12px, 1.11vw, 16px)' : '0',
                      paddingRight:    isOpen ? 'clamp(12px, 1.11vw, 16px)' : '0',
                    }}
                  >
                    <div
                      className="flex items-center"
                      style={{
                        width:  'clamp(300px, 57.31vw, 825.3px)',
                        height: isOpen ? 'clamp(30px, 3.06vw, 44px)' : '0px',
                      }}
                    >
                      <p
                        className="font-sans font-normal text-white/85 m-0 text-left"
                        style={{
                          width:         '100%',
                          height:        '100%',
                          fontSize:      'clamp(14px, 1.25vw, 18px)',
                          lineHeight:    'clamp(16px, 1.5vw, 21.6px)',
                          letterSpacing: 'clamp(-0.2px, -0.025vw, -0.36px)',
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
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
