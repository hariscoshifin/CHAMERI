'use client';

import React, { useRef, useState, useEffect } from 'react';

/* ─── The full heading split into individual words ───────────────────────── */
const HEADING_WORDS = [
  "We're", "create", "luxury", "trusted", "modern", "builders",
  "creating", "timeless", "spaces", "for", "future", "through", "smart",
  "we", "build", "modern", "luxury", "homes", "with", "trusted", "the",
  "design", "craft", "every", "detail", "matters", "day", "move", "choice.",
];

const STATS = [
  { val: '30%', label: 'Lorem ipsum dolor' },
  { val: '20%', label: 'Lorem ipsum' },
  { val: '25%', label: 'Lorem ipsum dolor' },
  { val: '96%', label: 'Lorem ipsum dolor sit' },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 → 1

  useEffect(() => {
    const handleScroll = () => {
      const el = headingRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight || document.documentElement.clientHeight;

      /*
       * Animation Flow:
       * - Starts (0%) when the heading enters the bottom 85% of the screen.
       * - Ends (100%) when the heading reaches the top 25% of the screen.
       * This creates a perfect word-by-word reveal as the user scrolls.
       */
      const start = windowH * 0.55;
      const end = windowH * 0.05;

      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    // Use capture: true to guarantee the event fires regardless of scroll container
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // run on mount

    return () => {
      window.removeEventListener('scroll', handleScroll, { capture: true });
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  /* How many words should be dark given current progress */
  const darkCount = Math.round(progress * HEADING_WORDS.length);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#EDE7DE] flex flex-col items-center overflow-hidden"
    >
      {/* ══════════════════════════════════════════════════════════════════
          TOP ROW
         ══════════════════════════════════════════════════════════════════ */}
      <div
        className="
          w-full flex items-start justify-center
          pt-[40px] min-h-[200px]
          md:pt-[60px]
          lg:pt-[70px] lg:min-h-[240px]
          xl:pt-[85px] xl:min-h-[300px]
          3xl:pt-[100px] 3xl:min-h-[378px]
          2xl:pt-[110px] 2xl:min-h-[400px]
          4xl:pt-[133px] 4xl:min-h-[500px]
        "
      >
        <div
          className="
            w-full mx-auto flex flex-col md:flex-row justify-between items-start
            px-5 gap-6
            md:gap-0
            lg:max-w-[960px] lg:px-8
            xl:max-w-[1180px] xl:px-10
            3xl:max-w-[1330px] 3xl:px-[60px]
            2xl:max-w-[1420px] 2xl:px-[66px]
            4xl:max-w-[1773px] 4xl:px-[80px]
          "
        >

          {/* ── About Us Badge ─────────────────────────────────────────── */}
          <div className="flex items-center flex-shrink-0 gap-[7.2px] w-[112.6px] h-[20px] 4xl:w-[150px] 4xl:h-[26px] 4xl:gap-[10px]">
            <div className="bg-[#1A1A1A] rounded-[2px] flex-shrink-0 w-[10px] h-[10px] 4xl:w-[14px] 4xl:h-[14px]" />
            <span className="font-sans font-medium uppercase text-[#1A1A1A] leading-[20px] text-[11px] tracking-[1px] 4xl:text-[14px]">
              About Us
            </span>
          </div>

          {/* ── Heading with scroll-driven word animation ───────────────── */}
          <div
            className="
              max-w-full w-full
              lg:w-[672px]
              xl:w-[840px]
              3xl:w-[945px]
              2xl:w-[1008px]
              4xl:w-[1260px]
            "
          >
            <h2
              ref={headingRef}
              className="
                font-roundo font-medium lowercase
                text-[28px] leading-[34px] tracking-[-1px]
                lg:text-[36px] lg:leading-[44px] lg:tracking-[-1.8px]
                xl:text-[42px] lg:leading-[51px] xl:tracking-[-2.1px]
                3xl:text-[48px] 3xl:leading-[57.6px] 3xl:tracking-[-2.4px]
                2xl:text-[51px] 2xl:leading-[61px] 2xl:tracking-[-2.6px]
                4xl:text-[64px] 4xl:leading-[76px] 4xl:tracking-[-3.2px]
              "
            >
              {HEADING_WORDS.map((word, i) => (
                <span
                  key={i}
                  className={`transition-colors duration-300 inline ${i < darkCount ? 'text-[#334454]' : 'text-[#6B7E8F]'}`}
                >
                  {word}
                  {i < HEADING_WORDS.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          STATS ROW
         ══════════════════════════════════════════════════════════════════ */}
      <div
        className="
          w-full mx-auto flex items-center justify-center
          py-4 px-5
          lg:max-w-[1024px] lg:py-5 lg:px-8
          xl:max-w-[1280px] xl:py-6 xl:px-10
          3xl:max-w-[1440px] 3xl:py-[27px] 3xl:px-[66px]
          2xl:max-w-[1536px] 2xl:py-[30px] 2xl:px-[72px]
          4xl:max-w-[1920px] 4xl:py-[36px] 4xl:px-[88px]
        "
      >
        <div
          className="
            w-full flex flex-wrap md:flex-nowrap items-center justify-between
            rounded-[14.4px] gap-8 md:gap-0
            pt-[10px] min-h-[100px]
            lg:max-w-[900px] lg:pt-[14px] lg:min-h-[130px]
            xl:max-w-[1100px] xl:pt-[18px] xl:min-h-[148px]
            3xl:max-w-[1288px] 3xl:pt-[20px] 3xl:min-h-[166px]
            2xl:max-w-[1374px] 2xl:pt-[22px] 2xl:min-h-[178px]
            4xl:max-w-[1717px] 4xl:pt-[28px] 4xl:min-h-[220px]
          "
        >
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-start w-[45%] md:w-auto">
              <span
                className="
                  font-roundo font-medium text-[#1A1A1A] tracking-[-0.9px]
                  text-[32px] leading-[32px]
                  lg:text-[36px] lg:leading-[36px]
                  xl:text-[40px] xl:leading-[40px]
                  3xl:text-[45px] 3xl:leading-[45px]
                  2xl:text-[48px] 2xl:leading-[48px]
                  4xl:text-[60px] 4xl:leading-[60px]
                "
              >
                {stat.val}
              </span>
              <span
                className="
                  font-sans font-normal text-black/60 mt-2 tracking-[-0.32px]
                  text-[14px] leading-[18px]
                  xl:text-[15px] xl:leading-[18.5px]
                  3xl:text-[16px] 3xl:leading-[19.44px]
                  2xl:text-[17px] 2xl:leading-[20px]
                  4xl:text-[21px] 4xl:leading-[26px]
                "
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


