'use client';

import React, { useState } from 'react';

const COUNTRIES = [
  { code: 'IN', flag: '🇮🇳', dial: '+91', name: 'India' },
  { code: 'US', flag: '🇺🇸', dial: '+1', name: 'USA' },
  { code: 'GB', flag: '🇬🇧', dial: '+44', name: 'UK' },
  { code: 'AE', flag: '🇦🇪', dial: '+971', name: 'UAE' },
  { code: 'SG', flag: '🇸🇬', dial: '+65', name: 'Singapore' },
];

const ContactSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="w-full bg-[#EDE7DE] px-[40px] md:px-[80px] lg:px-[88px] pt-[80px] pb-[51px] flex flex-col lg:flex-row justify-between gap-[60px] lg:gap-0">

      {/* ── LEFT SIDE ── */}
      <div className="flex flex-col justify-between w-full lg:w-[450px] lg:h-[510px]">

        {/* Top block: badge + description */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="flex items-center gap-[7.2px]">
            <div className="w-[14px] h-[14px] bg-[#334454] rounded-[3px] flex-shrink-0" />
            <span className="font-sans font-normal text-[16.2px] leading-[19.44px] tracking-[-0.32px] uppercase text-[#334454]">
              Contact Us
            </span>
          </div>

          {/* Description */}
          <p className="font-sans font-normal text-[20px] leading-[100%] tracking-[-1px] text-[#334454] max-w-[365px]">
            Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consecteturLorem ipsum dolor
          </p>
        </div>

        {/* Bottom block: phone + email */}
        <div className="flex flex-col gap-6 mt-10 lg:mt-0">
          {/* Phone */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334454" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.53 2 2 0 0 1 3.6 1.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="font-sans font-normal text-[20px] leading-[100%] tracking-[-1px] text-[#334454]">
                Phone number
              </span>
            </div>
            <a href="tel:+919876543210" className="font-sans text-[16px] text-[#6B859E] hover:underline transition-all pl-[28px]">
              +91 987654321
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334454" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="font-sans font-normal text-[20px] leading-[100%] tracking-[-1px] text-[#334454]">
                Drop us a Email at
              </span>
            </div>
            <a href="mailto:Chameri@gmail.com" className="font-sans text-[16px] text-[#6B859E] hover:underline transition-all pl-[28px]">
              Chameri@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ── RIGHT SIDE: FORM ── */}
      <div className="w-full lg:w-[635px] flex flex-col gap-[10px]">
        {/* Heading */}
        <h2 className="font-roundo font-medium text-[48px] md:text-[65px] leading-[60px] tracking-[-0.9px] capitalize text-[#334454] mb-4">
          Contact Us
        </h2>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#334454]/40 pb-3 font-sans text-[16px] text-[#334454] placeholder-[#334454]/40 outline-none focus:border-[#334454] transition-colors"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#334454]/40 pb-3 font-sans text-[16px] text-[#334454] placeholder-[#334454]/40 outline-none focus:border-[#334454] transition-colors"
            />
          </div>

          {/* Phone with Country Selector */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 border-b border-[#334454]/40 pb-3">
              {/* Country Dropdown */}
              <div className="relative flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-[18px] hover:opacity-80 transition-opacity"
                >
                  <span>{selectedCountry.flag}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#334454" strokeWidth="2">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute top-8 left-0 bg-white shadow-xl rounded-[8px] z-50 overflow-hidden min-w-[160px] border border-[#334454]/10">
                    {COUNTRIES.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => { setSelectedCountry(c); setDropdownOpen(false); }}
                        className="flex items-center gap-2 w-full px-4 py-2 text-left text-[14px] text-[#334454] hover:bg-[#EDE7DE] transition-colors"
                      >
                        <span>{c.flag}</span>
                        <span>{c.name}</span>
                        <span className="ml-auto text-[#334454]/60">{c.dial}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <span className="font-sans text-[16px] text-[#334454]/60">{selectedCountry.dial}</span>

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className="flex-1 bg-transparent font-sans text-[16px] text-[#334454] placeholder-[#334454]/40 outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border-b border-[#334454]/40 pb-3 font-sans text-[16px] text-[#334454] placeholder-[#334454]/40 outline-none focus:border-[#334454] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="flex items-center gap-3 px-6 py-3 bg-[#6B859E] text-white font-sans text-[16px] font-medium rounded-[10px] hover:bg-[#334454] transition-all duration-300 group"
            >
              <span>Contact Us</span>
              <div className="w-7 h-7 bg-white/20 rounded-[6px] flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
