'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const VillaPlansSection = () => {
  const [activeTab, setActiveTab] = useState('villas');

  return (
    <section 
      className="w-full bg-[#EDE7DE] flex justify-center" 
      style={{ 
        paddingTop: '60px', 
        paddingBottom: '60px', 
        paddingLeft: '76px', 
        paddingRight: '76px',
        minHeight: '980.92px'
      }}
    >
      {/* ── Main Container: w 1284.9, gap 17 ─────────────────────────────── */}
      <div 
        className="flex flex-col items-center" 
        style={{ width: '1284.9px', maxWidth: '100%', gap: '17px' }}
      >
        
        {/* ── First Div: Heading Block, h 124, gap 16 ─────────────────────── */}
        <div 
          className="flex flex-col items-center justify-center" 
          style={{ width: '100%', height: '124px', gap: '16px' }}
        >
          <h2 className="font-roundo font-medium text-[60px] leading-[66.14px] tracking-[-3.05px] text-black text-center m-0">
            Luxury Villa Plans
          </h2>
          <p className="font-sans font-normal text-[20px] leading-[26.4px] tracking-[-0.44px] text-black/60 text-center m-0 max-w-[440px]">
            Explore crafted villa spaces with modern comfort built beautifully
          </p>
        </div>

        {/* ── Second Div: Image Display with Overlay, h 719.92 ────────────── */}
        <div 
          className="relative w-full rounded-[16px] overflow-hidden" 
          style={{ height: '719.92px' }}
        >
        {/* Main Image */}
        <Image
          src={activeTab === 'villas' ? "/dummyimages/Overlay.png" : "/dummyimages/Frame 2121454280.png"}
          alt="Luxury Villa Plan"
          fill
          className="object-cover transition-all duration-700"
        />

        {/* ── Top Toggle Buttons ── */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-[14px]"
          style={{ height: '48.72px' }}>
          {/* Button 1: w-181.9, px-19.49, gap-13.92 */}
          <button
            onClick={() => setActiveTab('villas')}
            style={{ height: '48.72px', paddingTop: '12.53px', paddingBottom: '12.53px', paddingLeft: '19.49px', paddingRight: '19.49px', gap: '13.92px', borderRadius: '8.35px' }}
            className={`flex items-center justify-center transition-all shrink-0 backdrop-blur-md ${activeTab === 'villas' ? 'bg-[#2D3E50] text-white shadow-lg' : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
          >
            {/* White square: 14.4×14.4px, collapses to w-0 when inactive so text never touches border */}
            <div style={{ height: '14.4px', borderRadius: '2px', flexShrink: 0 }}
              className={`bg-white transition-all duration-300 overflow-hidden ${activeTab === 'villas' ? 'w-[14.4px] opacity-100' : 'w-0 opacity-0'}`} />
            <span className="font-sans font-normal whitespace-nowrap" style={{ fontSize: '19.49px', lineHeight: '19.49px' }}>Kiwano Villas</span>
          </button>

          {/* Button 2: w-191.84, px-13.92 */}
          <button
            onClick={() => setActiveTab('villaments')}
            style={{ height: '48.72px', paddingTop: '12.53px', paddingBottom: '12.53px', paddingLeft: '19.49px', paddingRight: '19.49px', gap: '13.92px', borderRadius: '8.35px' }}
            className={`flex items-center justify-center transition-all shrink-0 backdrop-blur-md ${activeTab === 'villaments' ? 'bg-[#2D3E50] text-white shadow-lg' : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
          >
            {/* White square: 14.4×14.4px, collapses to w-0 when inactive so text never touches border */}
            <div style={{ height: '14.4px', borderRadius: '2px', flexShrink: 0 }}
              className={`bg-white transition-all duration-300 overflow-hidden ${activeTab === 'villaments' ? 'w-[14.4px] opacity-100' : 'w-0 opacity-0'}`} />
            <span className="font-sans font-normal whitespace-nowrap" style={{ fontSize: '19.49px', lineHeight: '19.49px' }}>Kiwano Villaments</span>
          </button>
        </div>
      {/* ------------------ */}
      
      {/* ── Bottom Content Overlay ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[80px] bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="flex flex-col items-center gap-[18.9px] pt-[37.79px]">
            {/* Text: Geist 400, 20px, lh 19.6, ls -0.06, centered */}
            <p
              className="text-center text-white font-sans font-normal text-[20px] leading-[19.6px] tracking-[-0.06px]"
              style={{ width: '575.74px', height: '79px', paddingRight: '0.35px', paddingLeft: '0.36px' }}
            >
              Discover crafted living spaces where modern design meets timeless comfort for every family with smart layouts bright views and premium details built to inspire daily today always now us
            </p>

            {/* Button: w-167 h-52, #6B859E */}
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
        </div>
        {/* -------------------- */}
        </div>
      </div>
    </section>
  );
};

export default VillaPlansSection;
