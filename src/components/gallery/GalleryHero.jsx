'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const galleryData = [
  {
    id: 1,
    image: "/dummyimages/image 14 (3) 1.svg",
    text: "Crafting Timeless Villas &\nLandmark Spaces",
  },
  {
    id: 2,
    image: "/dummyimages/image 14 (3) 3.svg",
    text: "Building Elegant Homes,\nDesigning Lasting Impressions",
  },
  {
    id: 3,
    image: "/dummyimages/Overlay.png",
    text: "Crafting Timeless Villas &\nLandmark Spaces",
  }
];

function Slide({ slide, index, totalSlides, scrollYProgress }) {
  const start = index / totalSlides;
  const end = start + (1 / totalSlides);

  let opacityInput, opacityValues;

  // Crossfade logic: fade in slightly before `start` and fade out slightly before `end`
  if (index === 0) {
    opacityInput = [0, end - 0.05, end];
    opacityValues = [1, 1, 0];
  } else if (index === totalSlides - 1) {
    opacityInput = [start - 0.05, start, 1];
    opacityValues = [0, 1, 1];
  } else {
    opacityInput = [start - 0.05, start, end - 0.05, end];
    opacityValues = [0, 1, 1, 0];
  }

  const opacity = useTransform(scrollYProgress, opacityInput, opacityValues);
  // Slight zoom effect as user scrolls
  const scale = useTransform(scrollYProgress, [start, end], [1, 1.05]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
      style={{ opacity }}
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 w-full h-full -z-20" style={{ scale }}>
        <Image
          src={slide.image}
          alt={`Gallery Slide ${index + 1}`}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={index === 0}
        />
      </motion.div>

      {/* Dark Overlay (#00000033 = 20% opacity black) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none -z-10"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
      />

      {/* Main Container */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center"
        style={{
          width: 'clamp(300px, 65.27vw, 940px)',
          // Removed height clamp to allow content to dictate natural height, but added padding to mimic spacing
        }}
      >
        <h2
          className="text-white whitespace-pre-wrap"
          style={{
            fontFamily: "var(--font-roundo), 'Roundo', system-ui, sans-serif",
            fontWeight: 500,
            width: 'clamp(300px, 46.36vw, 667.67px)',
            fontSize: 'clamp(32px, 4.16vw, 60px)',
            lineHeight: 'clamp(40px, 4.59vw, 66.14px)',
            letterSpacing: 'clamp(-3.05px, -0.21vw, -1px)',
            margin: 0,
            padding: 0
          }}
        >
          {slide.text}
        </h2>
      </div>
    </motion.div>
  );
}

export default function GalleryHero() {
  const containerRef = useRef(null);

  // The scroll area height. 300vh gives a 100vh scrub area per slide.
  const heightStr = `${galleryData.length * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: heightStr }}>
      {/* Sticky section that stays pinned to viewport */}
      <section
        className="sticky top-0 w-full flex items-center justify-center overflow-hidden bg-black"
        style={{ height: '100vh' }}
      >
        {/* Navbar Layout Placeholder (Mimicking Figma specs) */}
        <div
          className="absolute top-0 left-0 w-full z-50 flex items-center justify-between"
          style={{
            height: 'clamp(60px, 6.69vw, 96.38px)',
            paddingTop: 'clamp(10px, 0.97vw, 14px)',
            paddingBottom: 'clamp(10px, 0.97vw, 14px)',
            paddingLeft: 'clamp(20px, 5.55vw, 80px)',
            paddingRight: 'clamp(20px, 5.55vw, 80px)',
            gap: '10px'
          }}
        >
          {/* Logo / Menu would go here */}
        </div>

        {galleryData.map((slide, index) => (
          <Slide
            key={slide.id}
            slide={slide}
            index={index}
            totalSlides={galleryData.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </section>
    </div>
  );
}
