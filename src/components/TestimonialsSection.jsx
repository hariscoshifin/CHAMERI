'use client';

import React, { useState } from 'react';
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

/* ── Slide-text Button ─────────────────────────────────────────────── */
const LearnMoreButton = () => (
  <button className="group relative w-[160px] h-[52px] flex items-center justify-between px-5 bg-[#6B859E] border border-[#6B859E] rounded-[12px] overflow-hidden hover:bg-[#334454] transition-colors duration-500">
    <div className="overflow-hidden h-[1.2em] flex-1 text-left">
      <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        <span className="font-sans text-[15px] font-medium text-white whitespace-nowrap leading-[1.2em]">
          Learn More
        </span>
        <span className="font-sans text-[15px] font-medium text-white whitespace-nowrap leading-[1.2em]">
          Learn More
        </span>
      </div>
    </div>
    <div className="w-[30px] h-[30px] rounded-[7px] bg-white/20 group-hover:bg-white/30 flex items-center justify-center flex-shrink-0 transition-all duration-500">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
           className="group-hover:translate-x-[2px] transition-transform duration-300">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </div>
  </button>
);

/* ── Nav Arrow Button ──────────────────────────────────────────────── */
const NavBtn = ({ onClick, dir }) => (
  <button
    onClick={onClick}
    className="w-[44px] h-[44px] rounded-full bg-[#334454] hover:bg-[#6B859E] text-white flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-md"
    aria-label={dir === 'prev' ? 'Previous' : 'Next'}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      {dir === 'prev'
        ? <path d="M19 12H5M12 5l-7 7 7 7"/>
        : <path d="M5 12h14M12 5l7 7-7 7"/>
      }
    </svg>
  </button>
);

/* ── Testimonial Card ──────────────────────────────────────────────── */
const TestimonialCard = ({ item, position }) => {
  const isCenter = position === 0;
  const isAdjacent = Math.abs(position) === 1;

  const scale     = isCenter ? 1 : 0.82;
  const opacity   = isCenter ? 1 : isAdjacent ? 0.6 : 0;
  const translateX = position * 82; // % shift per position
  const zIndex    = isCenter ? 10 : isAdjacent ? 5 : 0;

  return (
    <div
      className="absolute top-0 left-1/2 transition-all duration-500 ease-in-out"
      style={{
        width: '800px',
        height: '550px',
        transform: `translateX(calc(-50% + ${translateX}%)) scale(${scale})`,
        opacity,
        zIndex,
        pointerEvents: isCenter ? 'auto' : 'none',
      }}
    >
      <div className="relative w-full h-full rounded-[12px] overflow-hidden">
        {/* Background Image */}
        <Image src={item.img} alt={item.name} fill className="object-cover" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Quote + Author */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <p className="font-sans text-[22px] leading-[1.4] tracking-[-0.3px] mb-5 max-w-[560px]">
            {item.quote}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-[48px] h-[48px] rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-sans font-semibold text-[16px] leading-[1.3]">{item.name}</p>
              <p className="font-sans text-[13px] text-white/70">{item.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main TestimonialsSection ──────────────────────────────────────── */
const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="w-full bg-[#EDE7DE] px-[70px] pt-[60px] pb-[80px]">

      {/* ── Header ── */}
      <div className="flex flex-col items-center text-center gap-4 mb-[60px]">
        {/* Badge */}
        <div className="flex items-center gap-[7.2px]">
          <div className="w-[14px] h-[14px] bg-[#334454] rounded-[3px] flex-shrink-0" />
          <span className="font-sans font-normal text-[16.2px] leading-[19.44px] tracking-[-0.32px] uppercase text-[#334454]">
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-roundo font-medium capitalize text-[#1A1A1A]"
            style={{ fontSize: '60px', lineHeight: '60px', letterSpacing: '-0.9px', maxWidth: '608px' }}>
          What Our Clients Says
        </h2>

        {/* Subtitle */}
        <p className="font-sans font-normal text-[#334454]/70 max-w-[608px]"
           style={{ fontSize: '20px', lineHeight: '26.4px', letterSpacing: '-0.44px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>

      {/* ── Carousel ── */}
      <div className="relative w-full flex items-center justify-center">
        {/* Card track */}
        <div className="relative w-full max-w-[1300px] mx-auto" style={{ height: '560px' }}>
          {TESTIMONIALS.map((item, i) => {
            const position = ((i - current + total) % total);
            const adjustedPos = position > total / 2 ? position - total : position;
            return (
              <TestimonialCard key={item.id} item={item} position={adjustedPos} />
            );
          })}
        </div>

        {/* Left arrow — overlaid */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pl-2">
          <NavBtn onClick={prev} dir="prev" />
        </div>

        {/* Right arrow — overlaid */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pr-2">
          <NavBtn onClick={next} dir="next" />
        </div>
      </div>

      {/* ── Learn More Button ── */}
      <div className="flex justify-center mt-[48px]">
        <LearnMoreButton />
      </div>
    </section>
  );
};

export default TestimonialsSection;
