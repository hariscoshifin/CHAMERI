'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    id: 1,
    quote: '"Lorem amet dolo elit nisi urna erat odio enim duis cras nunc orci ante quis arcu vero pede just urna."',
    name: 'Richard',
    role: 'Entrepreneur',
    img: '/dummyimages/Frame 2121454280.png',
    avatar: 'https://i.pravatar.cc/80?img=11',
  },
  {
    id: 2,
    quote: '"Lorem amet dolo elit nisi urna erat odio enim duis cras nunc orci ante quis arcu vero pede just urna."',
    name: 'Haruto & Aiko',
    role: 'Tech Startup Founders',
    img: '/dummyimages/Container.png',
    avatar: 'https://i.pravatar.cc/80?img=14',
  },
  {
    id: 3,
    quote: '"Lorem amet dolo elit nisi urna erat odio enim duis cras nunc orci ante quis arcu vero pede just urna."',
    name: 'Priya Menon',
    role: 'Interior Designer',
    img: '/dummyimages/Overlay.png',
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    id: 4,
    quote: '"Lorem amet dolo elit nisi urna erat odio enim duis cras nunc orci ante quis arcu vero pede just urna."',
    name: 'James Keller',
    role: 'Real Estate Investor',
    img: '/dummyimages/Frame 2121454280.png',
    avatar: 'https://i.pravatar.cc/80?img=52',
  },
];

const CARD_W      = 800;
const CARD_H      = 550;
const SIDE_CARD_H = 467.5;
const CARD_GAP    = 20;

const TestimonialsSection = () => {
  const total = TESTIMONIALS.length;
  // Start at the first item of the middle copy (index = total)
  const [current, setCurrent]       = useState(total);
  const [containerW, setContainerW] = useState(1440);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const wrapperRef = useRef(null);

  /* Create a tripled array for seamless infinite looping */
  const extendedTestimonials = [
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS
  ];

  /* Measure the carousel wrapper's actual rendered width. */
  useEffect(() => {
    const measure = () => {
      if (wrapperRef.current) setContainerW(wrapperRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => c + 1);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => c - 1);
  }, []);

  /* Handle transitionless loop-snapping after scroll completes */
  const handleTransitionEnd = useCallback(() => {
    if (current >= total * 2) {
      setTransitionEnabled(false);
      setCurrent(current - total);
    } else if (current < total) {
      setTransitionEnabled(false);
      setCurrent(current + total);
    }
  }, [current, total]);

  /* Re-enable transitions after the invisible snap has finished applying */
  useEffect(() => {
    if (!transitionEnabled) {
      const rafId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
      return () => cancelAnimationFrame(rafId);
    }
  }, [transitionEnabled]);

  /* Track translateX — centres the current card */
  const centerOffset = (containerW - CARD_W) / 2;
  const trackX       = centerOffset - current * (CARD_W + CARD_GAP);

  /* Arrow positions flush with centre card edges */
  const arrowLeft  = centerOffset - 56;
  const arrowRight = centerOffset + CARD_W + 16;

  return (
    <section className="w-full bg-[#EDE7DE] overflow-hidden">

      {/* ══ 1st — Header (padded, centred, max-w 608) ═══════════════════ */}
      <div
        className="w-full mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: '1600px', paddingTop: '60px', paddingLeft: '70px', paddingRight: '70px', paddingBottom: '24px', gap: '10px' }}
      >
        <div className="flex items-center gap-[7.2px]">
          <div className="w-[14px] h-[14px] bg-[#334454] rounded-[3px] flex-shrink-0" />
          <span className="font-sans font-normal text-[14px] uppercase tracking-wider text-[#334454]">
            Testimonials
          </span>
        </div>
        <h2
          className="font-roundo font-medium capitalize text-[#1A1A1A] text-center"
          style={{ fontSize: '60px', lineHeight: '60px', letterSpacing: '-0.9px', maxWidth: '608px' }}
        >
          What Our Clients Says
        </h2>
        <p
          className="font-sans font-normal text-[#334454]/70 text-center"
          style={{ fontSize: '20px', lineHeight: '26.4px', letterSpacing: '-0.44px', maxWidth: '608px' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>

      {/* ══ 2nd — Carousel (directly in <section> = natural 100% width) ══
       *
       * Key insight: by placing the carousel div as a direct child of the
       * full-width <section> (not inside a padded container), w-full gives
       * us exactly the viewport width with no tricks needed.
       * containerW = wrapperRef.offsetWidth = viewport width → symmetric peek.
       */}
      <div
        ref={wrapperRef}
        className="relative overflow-hidden w-full"
        style={{ height: `${CARD_H}px`, marginTop: '0', marginBottom: '0' }}
      >
        {/* Sliding track */}
        <div
          className="flex"
          style={{
            alignItems: 'center',
            gap: `${CARD_GAP}px`,
            transform: `translateX(${trackX}px)`,
            transition: transitionEnabled ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedTestimonials.map((item, i) => {
            const dist        = Math.abs(i - current);
            const isCenter    = dist === 0;
            const opacity     = isCenter ? 1 : dist === 1 ? 0.6 : 0;
            const cardH       = isCenter ? CARD_H : SIDE_CARD_H;

            return (
              <div
                key={i}
                className="relative flex-shrink-0 overflow-hidden"
                style={{
                  width: `${CARD_W}px`,
                  height: `${cardH}px`,
                  borderRadius: '12px',
                  opacity,
                  transition: 'height 500ms cubic-bezier(0.4,0,0.2,1), opacity 500ms ease',
                }}
              >
                <Image src={item.img} alt={item.name} fill className="object-cover" />

                {/* Bottom gradient */}
                <div
                  className="absolute left-0 right-0 bottom-0"
                  style={{
                    height: '214.02px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
                  }}
                />

                {/* Content overlay — spec: top 335.99, h 214.02 */}
                <div className="absolute left-0" style={{ top: '335.99px', height: '214.02px', width: '800px' }}>
                  {/* Quote — Geist 500 26.1px lh 36.4 */}
                  <p
                    className="absolute text-white"
                    style={{
                      top: '51px', left: '24px',
                      width: '725.76px', height: '70.4px',
                      fontFamily: 'var(--font-geist-sans), sans-serif',
                      fontWeight: 500, fontSize: '26.1px', lineHeight: '36.4px',
                      overflow: 'hidden',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {item.quote}
                  </p>
                  {/* Profile */}
                  <div
                    className="absolute flex items-center gap-3"
                    style={{ top: '142.81px', left: '24px', width: '752px', height: '47.2px' }}
                  >
                    <div className="flex-shrink-0 overflow-hidden" style={{ width: '45px', height: '45px', borderRadius: '5px' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.avatar} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-white" style={{ fontSize: '16px', lineHeight: '1.3' }}>{item.name}</p>
                      <p className="font-sans text-white/70" style={{ fontSize: '13px' }}>{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left arrow — at left edge of centre card, top:279px per spec */}
        <button
          onClick={prev} aria-label="Previous"
          className="absolute z-20 flex items-center justify-center bg-[#334454] hover:bg-[#6B859E] transition-colors duration-300"
          style={{
            width: '40px', height: '40px',
            borderRadius: '7.11px', padding: '8.89px',
            top: '279px',
            left: `${centerOffset - 20}px`,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>

        {/* Right arrow — at right edge of centre card, top:279px per spec */}
        <button
          onClick={next} aria-label="Next"
          className="absolute z-20 flex items-center justify-center bg-[#334454] hover:bg-[#6B859E] transition-colors duration-300"
          style={{
            width: '40px', height: '40px',
            borderRadius: '7.11px', padding: '8.89px',
            top: '279px',
            left: `${centerOffset + CARD_W - 20}px`,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ══ 3rd — Learn More button (padded, centred) ═══════════════════ */}
      <div
        className="w-full mx-auto flex justify-center"
        style={{ maxWidth: '1600px', paddingLeft: '70px', paddingRight: '70px', paddingTop: '24px', paddingBottom: '60px' }}
      >
        <button
          className="group relative w-[167px] h-[52px] flex items-center bg-[#6B859E] hover:bg-[#4a6074] transition-colors duration-500 rounded-[12px] overflow-hidden cursor-pointer border-none"
        >
          {/* Sliding text container */}
          <div className="absolute top-[14px] left-[12px] w-[97px] h-[23px] overflow-hidden">
            <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
              <span className="font-sans text-[15px] font-medium text-white whitespace-nowrap h-[23px] flex items-center">
                Learn More
              </span>
              <span className="font-sans text-[15px] font-medium text-white whitespace-nowrap h-[23px] flex items-center">
                Learn More
              </span>
            </div>
          </div>

          {/* Arrow icon box */}
          <div className="absolute right-[12px] w-[30px] h-[30px] rounded-[7px] bg-white group-hover:bg-[#EDE7DE] transition-colors duration-500 overflow-hidden">
            
            {/* Original Arrow - Flies out to the right */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#6B859E] group-hover:text-[#4a6074] transition-colors duration-500">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* New Arrow - Comes in from the left */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#6B859E] group-hover:text-[#4a6074] transition-colors duration-500">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

          </div>
        </button>
      </div>

    </section>
  );
};

export default TestimonialsSection;
