'use client';

import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const inputBase = {
  fontFamily: 'var(--font-geist-sans), sans-serif',
  fontWeight: 400,
  fontSize: '16px',
  color: '#334454',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(51,68,84,0.35)',
  outline: 'none',
  width: '100%',
  height: '54px',
  paddingBottom: '4px',
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="w-full bg-[#EDE7DE] flex justify-center">
      {/* Main row: space-between, exact spec padding, centered container */}
      <div
        className="flex flex-row justify-between"
        style={{
          width: '1440px',
          height: '739px',
          paddingTop: '80px',
          paddingRight: '88px',
          paddingBottom: '51px',
          paddingLeft: '80px',
        }}
      >

        {/* ══ LEFT — w 450, h 510, space-between ═══════════════════════ */}
        <div
          className="flex flex-col justify-between"
          style={{ width: '450px', height: '510px' }}
        >

          {/* TOP block — contact badge + description: w 450, h 123.8, gap 15 */}
          <div className="flex flex-col" style={{ width: '450px', height: '123.8px', gap: '15px' }}>
            {/* Badge */}
            <div className="flex items-center gap-[7.2px]">
              <div className="w-[14px] h-[14px] bg-[#334454] rounded-[3px] flex-shrink-0" />
              <span
                className="uppercase text-[#334454]"
                style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontWeight: 400, fontSize: '14px', letterSpacing: '1px' }}
              >
                Contact Us
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-geist-sans), sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '-0.4px',
                color: '#334454',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consecteturLorem ipsum dolor
            </p>
          </div>

          {/* BOTTOM block — phone + email: w 450, h 146, gap 22 */}
          <div className="flex flex-col" style={{ width: '450px', height: '146px', gap: '22px' }}>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334454" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.53 2 2 0 0 1 3.6 1.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '18px', fontWeight: 400, color: '#334454' }}>
                  Phone number
                </span>
              </div>
              <a href="tel:+919876543210" style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '16px', color: '#6B859E', paddingLeft: '26px', textDecoration: 'none' }}
                className="hover:underline transition-all">
                +91 987654321
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334454" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '18px', fontWeight: 400, color: '#334454' }}>
                  Drop us a Email at
                </span>
              </div>
              <a href="mailto:Chameri@gmail.com" style={{ fontFamily: 'var(--font-geist-sans), sans-serif', fontSize: '16px', color: '#6B859E', paddingLeft: '26px', textDecoration: 'none' }}
                className="hover:underline transition-all">
                Chameri@gmail.com
              </a>
            </div>

          </div>
        </div>

        {/* ══ RIGHT — w 635, h 608, gap 10 ═══════════════════════════ */}
        <div className="flex flex-col" style={{ width: '635px', height: '608px', gap: '10px' }}>

          {/* Heading row: w 332, h 60 */}
          <div style={{ width: '332px', height: '60px' }}>
            <h2
              className="font-roundo font-medium text-[#334454]"
              style={{ fontSize: '48px', lineHeight: '60px', letterSpacing: '-0.9px' }}
            >
              Contact Us
            </h2>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col bg-[#EDE7DE]"
            style={{
              width: '635px',
              height: '538px',
              paddingTop: '27px',
              paddingBottom: '27px',
              gap: '40px',
              borderRadius: '6px',
            }}
          >
            {/* Name — h 54, gap 8 */}
            <div style={{ height: '54px', gap: '8px' }}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={form.name}
                onChange={handleChange}
                style={{ ...inputBase }}
                className="placeholder-[#334454]/40 focus:border-[#334454] transition-colors"
              />
            </div>

            {/* Email — h 54, gap 8 */}
            <div style={{ height: '54px', gap: '8px' }}>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                style={{ ...inputBase }}
                className="placeholder-[#334454]/40 focus:border-[#334454] transition-colors"
              />
            </div>

            {/* Phone with country flag — h 54, gap 8 */}
            <div style={{ height: '54px', gap: '8px' }}>
              <div
                style={{ ...inputBase, paddingBottom: '4px', display: 'flex', alignItems: 'center' }}
              >
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={form.phone}
                  onChange={(val) => setForm({ ...form, phone: val })}
                  placeholder="Phone number"
                  className="contact-phone-input"
                  style={{ width: '100%', outline: 'none' }}
                />
              </div>
            </div>

            {/* Message — h 54, gap 8 */}
            <div style={{ height: '54px', gap: '8px' }}>
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={form.message}
                onChange={handleChange}
                rows={2}
                className="placeholder-[#334454]/40 focus:border-[#334454] transition-colors resize-none"
                style={{ ...inputBase, height: '54px', paddingTop: '8px' }}
              />
            </div>

            {/* Submit row — w 635, h 52 → button w 167, h 52 */}
            <div style={{ height: '52px', display: 'flex', alignItems: 'center' }}>
              <button
                type="submit"
                className="group relative w-[167px] h-[52px] flex items-center bg-[#6B859E] hover:bg-[#334454] transition-colors duration-500 rounded-[12px] overflow-hidden cursor-pointer border-none"
              >
                {/* Sliding text container */}
                <div className="absolute top-[14px] left-[12px] w-[97px] h-[23px] overflow-hidden">
                  <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
                    <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }} className="text-[15px] font-medium text-white whitespace-nowrap h-[23px] flex items-center">
                      Contact Us
                    </span>
                    <span style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }} className="text-[15px] font-medium text-white whitespace-nowrap h-[23px] flex items-center">
                      Contact Us
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

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
