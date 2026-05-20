'use client';

import React, { useState } from 'react';
import Image from 'next/image';

/* ─── Gallery data ───────────────────────────────────────────────────── */
const VILLAS = [
  { id: 1, name: 'VILLA 01', location: 'Calicut , Kerala', year: '2024', img: '/dummyimages/Frame 2121454280.png', alt: '/dummyimages/Container.png', side: 'left' },
  { id: 2, name: 'Villa 1', location: 'Calicut, Kerala', year: '2025', img: '/dummyimages/Container.png', alt: '/dummyimages/Frame 2121454280.png', side: 'right' },
  { id: 3, name: 'Villa No3', location: 'Calicut, Kerala', year: '2025', img: '/dummyimages/Overlay.png', alt: '/dummyimages/Frame 2121454280.png', side: 'left' },
  { id: 4, name: 'Villa No4', location: 'Calicut, Kerala', year: '2024', img: '/dummyimages/Container.png', alt: '/dummyimages/Frame 2121454280.png', side: 'right' },
  { id: 5, name: 'Villa No5', location: 'Lorum Ipsum sit', year: '2025', img: '/dummyimages/Overlay.png', alt: '/dummyimages/Frame 2121454280.png', side: 'right' },
  { id: 6, name: 'Villa No6', location: 'Lorum Ipsum sit consit', year: '2024', img: '/dummyimages/Frame 2121454280.png', alt: '/dummyimages/Overlay.png', side: 'left' },
  { id: 7, name: 'Villa No7', location: 'Lorum Ipsum consit', year: '2023', img: '/dummyimages/Container.png', alt: '/dummyimages/Frame 2121454280.png', side: 'right' },
];

/* ─── Single Gallery Card ────────────────────────────────────────────── */
const GalleryCard = ({ villa, containerWidth, containerHeight, imageWidth, imageHeight }) => {
  return (
    <div
      className="relative group cursor-pointer flex flex-col justify-between"
      style={{ width: containerWidth, height: containerHeight }}
    >
      {/* Image container */}
      <div className="relative shrink-0"
        style={{ width: imageWidth, height: imageHeight }}>
        
        {/* Inner container for image and dark overlay, with overflow-hidden to clip the image */}
        <div className="absolute inset-0 rounded-[4px] overflow-hidden">
          {/* Default Image */}
          <Image
            src={villa.img}
            alt={villa.name}
            fill
            className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-0"
          />
          {/* Hover Image */}
          {villa.alt && (
            <Image
              src={villa.alt}
              alt={`${villa.name} alternate`}
              fill
              className="object-cover transition-all duration-700 ease-in-out opacity-0 group-hover:scale-105 group-hover:opacity-100"
            />
          )}

          {/* "View Project" dark overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
        </div>

        {/* Custom Split Button - positioned on the left edge, outside the overflow-hidden wrapper */}
        <div className="group/btn absolute top-1/2 -left-[85px] -translate-y-1/2 w-[161px] h-[31px] rounded-[4px] bg-[#EDE7DE] flex items-center justify-center overflow-hidden z-50 transition-all duration-500 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible">
          
          {/* Right side Text (Default Base) */}
          <span className="absolute z-0 font-sans text-[13px] font-medium text-[#334454]">
            View Project
          </span>

          {/* Left Half Overlay (Blue) */}
          <div className="absolute left-0 top-0 w-[85px] h-[31px] bg-[#6B859E] overflow-hidden rounded-l-[4px] z-10 flex items-center">
            <span className="absolute left-0 w-[161px] text-center font-sans text-[13px] font-medium text-[#EDE7DE]">
              View Project
            </span>
          </div>
          
          {/* Left Arrow */}
          <div className="absolute top-[5.56px] left-[6.82px] w-[19.95px] h-[19.95px] rounded-[4.43px] bg-[#EDE7DE] z-20 overflow-hidden">
            {/* Original Arrow - Flies left */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover/btn:-translate-x-full">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6B859E" strokeWidth="2.5" className="rotate-180">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            {/* New Arrow - Enters from right */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-x-full group-hover/btn:translate-x-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6B859E" strokeWidth="2.5" className="rotate-180">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-[5.93px] left-[133.77px] w-[19.95px] h-[19.95px] rounded-[4.43px] bg-[#334454] z-20 overflow-hidden">
            {/* Original Arrow - Flies right */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover/btn:translate-x-full">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#EDE7DE" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            {/* New Arrow - Enters from left */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out -translate-x-full group-hover/btn:translate-x-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#EDE7DE" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* Caption */}
      <div className="flex items-center justify-between px-1 w-full shrink-0" style={{ width: imageWidth }}>
        <p className="font-sans text-[13px] text-[#334454]/80">
          <span className="font-medium text-[#334454]">{villa.name}</span>
          <span className="mx-1">—</span>
          <span className="italic">{villa.location}</span>
        </p>
        <span className="font-sans text-[13px] text-[#334454]/60">{villa.year}</span>
      </div>
    </div>
  );
};

/* ─── Slide-text "Learn More" Button ────────────────────────────────── */
const LearnMoreButton = () => (
  <button className="group relative w-[167px] h-[52px] flex items-center bg-[#6B859E] hover:bg-[#334454] transition-colors duration-500 rounded-[12px] overflow-hidden cursor-pointer border-none">
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
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          className="text-[#6B859E] group-hover:text-[#4a6074] transition-colors duration-500"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>

      {/* New Arrow - Comes in from the left */}
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0">
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          className="text-[#6B859E] group-hover:text-[#4a6074] transition-colors duration-500"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>

    </div>
  </button>
);

/* ─── Main GallerySection ────────────────────────────────────────────── */
const GallerySection = () => {
  return (
    <section className="w-full bg-[#EDE7DE] overflow-hidden flex justify-center">
      <div className="w-[1440px] h-[2425.24px] pt-[60px] pr-[82px] pb-[60px] pl-[82px] shrink-0 flex flex-col items-center">
        <div className="w-[1255.83px] max-w-[1344.51px] h-[2305.24px] flex flex-col items-center gap-[72.68px] px-[18.17px] shrink-0">
          
          {/* First Main Div - Header */}
          <div className="w-[1254px] h-[132.63px] min-w-[1219.5px] flex flex-row items-start justify-between shrink-0">
            {/* gallery layout */}
            <div className="w-[102.6px] h-[30.8px] flex items-center gap-[7.2px] mt-[6px]">
              <div className="w-[14px] h-[14px] bg-[#334454] rounded-[3px] shrink-0" />
              <span className="font-sans font-normal text-[14px] uppercase tracking-wider text-[#334454]">Gallery</span>
            </div>
            
            {/* heading and subheading div layout */}
            <div className="w-[975.6px] h-[132.63px] flex flex-row items-end justify-between shrink-0">
              {/* heading layout */}
              <h2 className="w-[667.67px] h-[133px] font-roundo font-medium text-[60px] leading-[66.14px] tracking-[-3.05px] text-[#1A1A1A] m-0 flex items-center">
                Elegant Spaces For Built Views Photo Frame
              </h2>
              
              {/* subheading layout */}
              <p className="w-[264px] max-w-[540.53px] h-[88px] font-sans font-normal text-[20px] leading-[21.8px] tracking-[-0.44px] text-[#334454]/70 m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>

          {/* Second Main Div - Grid */}
          <div className="w-[1219.5px] h-[2099.93px] flex flex-col gap-[50.87px] shrink-0">
            
            {/* Row 1 */}
            <div className="w-[1219.5px] h-[642.04px] flex flex-row justify-between shrink-0 pr-0">
              {/* Left Image */}
              <div className="self-end">
                <GalleryCard 
                  villa={VILLAS[0]} 
                  containerWidth="543.52px" containerHeight="493.31px" 
                  imageWidth="543.52px" imageHeight="466.87px" 
                />
              </div>
              {/* Right Image */}
              <div className="self-start">
                <GalleryCard 
                  villa={VILLAS[1]} 
                  containerWidth="499.99px" containerHeight="465.13px" 
                  imageWidth="499.99px" imageHeight="436.06px" 
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="w-[861.45px] h-[547.40px] shrink-0 self-end flex justify-end">
              <GalleryCard 
                villa={VILLAS[4]} 
                containerWidth="646.08px" containerHeight="547.40px" 
                imageWidth="646.08px" imageHeight="519.40px"
              />
            </div>

            {/* Row 3 */}
            <div className="w-[1219.5px] h-[705.87px] flex flex-row justify-between shrink-0 pr-0">
              {/* Left Image */}
              <div className="self-start">
                <GalleryCard 
                  villa={VILLAS[5]} 
                  containerWidth="499.99px" containerHeight="465.13px" 
                  imageWidth="499.99px" imageHeight="436.06px" 
                />
              </div>
              {/* Right Image */}
              <div className="self-end">
                <GalleryCard 
                  villa={VILLAS[6]} 
                  containerWidth="597.55px" containerHeight="542.35px" 
                  imageWidth="597.55px" imageHeight="512.35px" 
                />
              </div>
            </div>

            {/* Row 4 - Button */}
            <div className="w-[1219.5px] h-[52px] flex justify-center items-center shrink-0">
              <LearnMoreButton />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GallerySection;
