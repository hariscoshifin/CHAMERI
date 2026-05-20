'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      img: '/dummyimages/Container.png',
      icon: (
        <Image src="/icons/Vector.svg" alt="Design icon" width={25} height={25} />
      ),
      title: "Design-Driven, Modern Approach",
      desc: "With a portfolio of completed projects and collaborations with experienced architects, we bring proven expertise to every build. Our work speaks through real results, client satisfaction, and trusted industry partnerships."
    },
    {
      img: '/dummyimages/Container.png',
      icon: (
        <Image src="/icons/692885226ea01d367379ce40_Frame.svg.svg" alt="Expertise icon" width={25} height={25} />
      ),
      title: "Proven Expertise & Trusted Network",
      desc: "With a portfolio of completed projects and collaborations with experienced architects, we bring proven expertise to every build. Our work speaks through real results, client satisfaction, and trusted industry partnerships."
    },
    {
      img: '/dummyimages/Overlay.png',
      icon: (
        <Image src="/icons/healthicons_people-outline.svg" alt="People icon" width={25} height={25} />
      ),
      title: "Client-Centric, Seamless Experience",
      desc: "With a portfolio of completed projects and collaborations with experienced architects, we bring proven expertise to every build. Our work speaks through real results, client satisfaction, and trusted industry partnerships."
    }
  ];

  return (
    <section className="w-full h-[628px] bg-[#EDE7DE] py-[60px] px-[80px] flex flex-col items-center gap-[60px] overflow-hidden">
      {/* ── Top Header Section ── */}
      <div className="w-full max-w-[1280px] flex flex-col gap-6">
        {/* Badge */}
        <div className="flex items-center gap-[7.2px] px-[7.2px] py-[5.4px] rounded-[90px] self-start">
          <div className="w-[14px] h-[14px] bg-[#334454] rounded-[3px]" />
          <span className="text-[16.2px] font-sans font-normal uppercase tracking-[-0.32px] text-black">
            WHY CHOOSE US
          </span>
        </div>

        {/* Main Heading Row */}
        <div className="flex justify-between items-end w-full gap-[50px]">
          <h2 className="font-roundo font-medium text-[45px] leading-[45px] tracking-[-0.9px] text-[#1A1A1A] max-w-[512px] capitalize">
            Proven Trust Value Modern Homes Leader
          </h2>
          <p className="font-sans font-normal text-[20px] leading-[21.8px] tracking-[-0.44px] text-black/60 max-w-[558px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
      </div>

      {/* ── Feature Cards (Accordion Effect) ── */}
      <div className="w-full max-w-[1280px] flex justify-center gap-[10px]">
        {cards.map((card, i) => {
          const isActive = activeCard === i;
          
          return (
          <div
            key={i}
            onMouseEnter={() => setActiveCard(i)}
            style={{ width: isActive ? '458px' : '400px', height: '352.5px', padding: '37.5px' }}
            className={`relative rounded-[8px] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer flex-shrink-0`}
          >
            {/* Background Image */}
            <Image
              src={card.img}
              alt={card.title}
              fill
              className={`object-cover transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100'}`}
            />
            {/* Dark Overlay */}
            <div className={`absolute inset-0 transition-colors duration-700 ${isActive ? 'bg-black/50' : 'bg-black/40'}`} />

            {/* Content Container — centers the inner block in the card */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Inner content: 342×277.5 spec, gap 14px, icon→title→desc */}
              <div className="w-[342px] min-h-[277.5px] flex flex-col gap-[14px]">
                {/* White Icon Box — 46×46, border-radius 5px, padding 6px */}
                <div className="w-[46px] h-[46px] bg-white rounded-[5px] p-[6px] flex items-center justify-center shadow-lg flex-shrink-0">
                  <div className="text-[#334454] flex items-center justify-center w-full h-full">
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-roundo font-medium text-[33px] leading-[37.95px] tracking-[-0.66px] text-white">
                  {card.title}
                </h3>

                {/* Description — visible on hover */}
                <p className={`font-sans font-normal text-[15px] leading-[22.5px] text-white/80 transition-opacity duration-500 delay-100 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        )})}
      </div>
    </section>
  );
};

export default WhyChooseUs;