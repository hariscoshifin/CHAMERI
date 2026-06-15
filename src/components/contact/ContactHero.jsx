'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContactHero() {
  return (
    <section 
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        height: 'clamp(500px, 55.69vw, 802px)', // 802/1440 = 55.69vw
      }}
    >
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/dummyimages/ChatGPT Image Jun 12, 2026, 11_00_29 AM 1.svg"
          alt="Contact Hero Background"
          fill
          sizes="100vw"
          className="object-cover object-[center_top]"
          priority
        />
        {/* Gradients */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 48.75%, rgba(102, 102, 102, 0) 100%)`
          }}
        />
      </div>

      {/* STICKY LOGO LAYER (centered in Navbar placeholder) */}
      {/* <div
        className="absolute top-0 left-0 w-full pointer-events-none z-50 flex justify-center"
        style={{
          paddingTop: '14px', // Match navbar padding top
        }}
      >
        <div style={{ height: '68.38px' }} className="flex items-center justify-center">
          <Link
            href="/"
            className="pointer-events-auto flex flex-col items-center justify-center"
            style={{
              gap: '6px',
            }}
          >
            <div style={{ position: 'relative', width: '34px', height: '38px' }}>
              <Image src="/icons/logo (6).svg" alt="Chameri mark" fill sizes="40px" style={{ objectFit: 'contain' }} priority />
            </div>
            <div style={{ position: 'relative', width: '100px', height: '13px' }}>
              <Image src="/icons/logo (7).svg" alt="CHAMERI" fill sizes="120px" style={{ objectFit: 'contain' }} priority />
            </div>
          </Link>
        </div>
      </div> */}

      {/* Main Text */}
      <div 
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          width: 'clamp(300px, 34.375vw, 495px)',
        }}
      >
        <h1 
          className="text-white whitespace-pre-wrap"
          style={{
            fontFamily: "var(--font-roundo), 'Roundo', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(32px, 3.47vw, 50px)",
            lineHeight: "clamp(42px, 4.59vw, 66.14px)",
            letterSpacing: "clamp(-1.5px, -0.21vw, -3.05px)",
            margin: 0,
            padding: 0
          }}
        >
          {"Let's Create\nSomething Exceptional."}
        </h1>
      </div>
    </section>
  );
}
