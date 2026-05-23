// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import Image from "next/image";
// import Navbar from "../common/Navbar";

// // ─── Easing helpers ────────────────────────────────────────────────────────────
// const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// const mapRange = (value, inMin, inMax, outMin, outMax) => {
//   const t = clamp((value - inMin) / (inMax - inMin), 0, 1);
//   return outMin + t * (outMax - outMin);
// };

// const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
// const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
// const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

// export default function HeroSection() {
//   const sectionRef = useRef(null);

//   const [progress, setProgress] = useState(0);
//   const [animState, setAnimState] = useState("intro"); // "intro", "waiting", "outro", "done"

//   // 1. Intro Animation Effect (0 to 60% automatically on mount)
//   useEffect(() => {
//     if ('scrollRestoration' in window.history) {
//       window.history.scrollRestoration = 'manual';
//     }
//     window.scrollTo(0, 0);

//     document.body.style.overflow = "hidden";

//     let start;
//     const duration = 2500;

//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const elapsed = timestamp - start;
//       const t = clamp(elapsed / duration, 0, 1);

//       const easedT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
//       setProgress(easedT * 0.6);

//       if (t < 1.0) {
//         requestAnimationFrame(step);
//       } else {
//         setAnimState("waiting");
//       }
//     };

//     requestAnimationFrame(step);

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   // 2. Outro Animation (60 to 100% on click)
//   const handleClick = () => {
//     if (animState !== "waiting") return;
//     setAnimState("outro");

//     let start;
//     const duration = 2800; // 2.8 seconds for super smooth, majestic zoom

//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const elapsed = timestamp - start;
//       const t = clamp(elapsed / duration, 0, 1);

//       const easedT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
//       setProgress(0.6 + easedT * 0.4);

//       if (t < 1.0) {
//         requestAnimationFrame(step);
//       } else {
//         setAnimState("done");
//         document.body.style.overflow = ""; // Unlock scroll!
//       }
//     };

//     requestAnimationFrame(step);
//   };

//   // ── Derived values ────────────────────────────────────────────────────────────
//   const pct = Math.round(progress * 100);

//   // Animation phases
//   // Phase 1 (0.00 - 0.40): Logo scales UP. (Solid blue screen)
//   const phase1T = easeOutCubic(mapRange(progress, 0.0, 0.4, 0, 1));
//   // Phase 2 (0.40 - 0.60): Beige screen slides up from bottom to 140px. Logo moves up and scales down.
//   const phase2T = easeInOutCubic(mapRange(progress, 0.4, 0.6, 0, 1));
//   // Phase 3 (0.60 - 1.00): House scales smoothly across the entire outro duration.
//   const phase3T = mapRange(progress, 0.6, 1.0, 0, 1); // Linear interpolation, inherits the smooth easedT from handleClick!
//   // Phase 4 (0.80 - 1.00): Text fades in.
//   const phase4T = easeOutCubic(mapRange(progress, 0.80, 1.0, 0, 1));

//   // 1. Logo Morph
//   const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
//   const vh = typeof window !== "undefined" ? window.innerHeight : 1110;
//   const effectiveVw = clamp(vw, 320, 1440);

//   const scaleCenter = effectiveVw / 1440;
//   const scaleNavbar = 117.08 / 600;

//   // Instead of scaling the group up from 0 to 40%, we hold it at scaleCenter,
//   // and animate the intrinsic widths and heights below to handle the different aspect ratio changes.
//   const groupScale = progress <= 0.4
//     ? scaleCenter
//     : scaleCenter - phase2T * (scaleCenter - scaleNavbar);

//   // Interpolate intrinsic sizes from State 0 (140px width) to State 1 (Max zoom)
//   const markWidth = 140 + phase1T * (201.61 - 140);
//   const markHeight = 156.95 + phase1T * (226.03 - 156.95);

//   const textWidth = 140 + phase1T * (600 - 140);
//   const textHeight = 17.82 + phase1T * (76.39 - 17.82);

//   const logoGap = 11.31 + phase1T * (31.09 - 11.31);

//   const figmaCenterY = vh * 0.4056;
//   const navbarCenterY = 48.19;
//   const driftToNavbar = navbarCenterY - figmaCenterY;
//   const driftStart = vh * 0.05;

//   const groupY = progress <= 0.4
//     ? driftStart * (1 - phase1T)
//     : phase2T * driftToNavbar;

//   // 2. The Beige Curtain & House Scale
//   // The dark blue background is static. The beige background slides UP to cover it.
//   let beigeClipTopPx = vh;
//   if (progress > 0.4 && progress <= 0.6) {
//     beigeClipTopPx = vh - phase2T * (vh - 140);
//   } else if (progress > 0.6) {
//     beigeClipTopPx = 140 - phase3T * 140;
//   }
//   const beigeClipPath = `inset(${beigeClipTopPx}px 0 0 0)`;

//   // House image scales UP from 0.5 to 1.0 during Phase 3
//   const bgScale = 0.5 + phase3T * 0.5;

//   // Waves gently drift
//   const waveDrift = mapRange(progress, 0.0, 0.6, 20, -20);

//   // 3. Staggered Content Reveal
//   const head1T = easeOutQuart(mapRange(progress, 0.78, 0.90, 0, 1));
//   const head2T = easeOutQuart(mapRange(progress, 0.81, 0.92, 0, 1));
//   const lineT = easeOutQuart(mapRange(progress, 0.84, 0.94, 0, 1));
//   const sub1T = easeOutQuart(mapRange(progress, 0.87, 0.96, 0, 1));
//   const sub2T = easeOutQuart(mapRange(progress, 0.90, 0.98, 0, 1));

//   // Navbar elements fade in while the beige curtain covers the blue bar (Phase 3)
//   const navOpacity = phase3T;

//   // Percentage Counter fades out at the very end
//   const counterOpacity = progress < 0.95 ? 1 : mapRange(progress, 0.95, 1.0, 1, 0);

//   return (
//     <>
//       {/* ── Sticky Background (House Image) ───────────────────────────────────── */}
//       <div
//         className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none -z-10"
//       >

//         {/* Layer 0: Static Dark Blue Background & Waves */}
//         <div className="absolute inset-0 w-full h-full -z-30 overflow-hidden pointer-events-none bg-[#2A3A4A]">
//           <svg
//             viewBox="0 0 1440 1110"
//             preserveAspectRatio="xMidYMid slice"
//             className="absolute inset-0 w-full h-full opacity-50"
//             style={{ transform: `translateY(${waveDrift}px)` }}
//           >
//             <image href="/icons/Vector (1).svg" x="-15.98" y="-110" width="1453.91" height="313.69" />
//             <image href="/icons/Vector (2).svg" x="-16" y="53.02" width="1455.59" height="482.03" />
//             <image href="/icons/Vector (3).svg" x="-16" y="382.24" width="1456" height="482.43" />
//             <image href="/icons/Vector (4).svg" x="658.34" y="711.44" width="781.16" height="298.4" />
//           </svg>
//         </div>

//         {/* Layer 1: Sliding Beige Curtain & House Image */}
//         <div
//           className="absolute inset-0 w-full h-full -z-20 bg-[#EDE7DE]"
//           style={{ clipPath: beigeClipPath, WebkitClipPath: beigeClipPath }}
//         >
//           {/* House Image Container scales from center bottom */}
//           <div
//             className="absolute inset-0 w-full h-full origin-bottom"
//             style={{ transform: `scale3d(${bgScale}, ${bgScale}, 1)`, transformOrigin: "center bottom" }}
//           >
//             <Image
//               src="/dummyimages/Frame 2121454280.png"
//               alt="Chameri villa exterior"
//               fill
//               sizes="100vw"
//               className="object-cover object-[center_top]"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* ── Sticky Header (Logo & Navbar) ─────────────────────────────────────── */}
//       <div
//         className="sticky top-0 left-0 w-full h-screen pointer-events-none z-50 overflow-visible"
//         style={{ marginTop: "-100vh" }}
//       >
//         <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
//           {/* Layer 2: The Animated Logo Group */}
//           <div
//             className="absolute z-30 flex flex-col items-center"
//             style={{
//               left: "50%",
//               top: "40.56vh",
//               gap: `${logoGap}px`,
//               transform: `translate(-50%, -50%) translateY(${groupY}px) scale(${groupScale})`,
//               transformOrigin: "center center",
//             }}
//           >
//             <div style={{ position: "relative", width: `${markWidth}px`, height: `${markHeight}px` }}>
//               <Image src="/icons/logo (6).svg" alt="Chameri mark" fill sizes="400px" style={{ objectFit: "contain" }} priority />
//             </div>
//             <div style={{ position: "relative", width: `${textWidth}px`, height: `${textHeight}px` }}>
//               <Image src="/icons/logo (7).svg" alt="CHAMERI" fill sizes="800px" style={{ objectFit: "contain" }} priority />
//             </div>
//           </div>

//         </div>

//         {/* Layer 3: Navbar Header Layer (Menu, Contact) */}
//         <Navbar opacity={navOpacity} />
//       </div>

//       {/* ── Scrolling Content (Text) ────────────────────────────────────────── */}
//       <section
//         id="hero"
//         ref={sectionRef}
//         className={`relative w-full z-20 pointer-events-auto ${animState === 'waiting' ? 'cursor-pointer' : ''}`}
//         style={{
//           marginTop: "-100vh",
//           /* Figma canvas is 1440×1024 — use a 1024/1440 aspect ratio for the section */
//           height: "100vh",
//         }}
//         onClick={handleClick}
//       >
//         {/* ── Bottom gradient for text readability ── */}
//         <div
//           className="absolute inset-x-0 bottom-0 pointer-events-none"
//           style={{
//             height: "45%",
//             background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)",
//             opacity: head1T,
//           }}
//         />

//         {/* ══════════════════════════════════════════════════════════
//             GROUP DIV  — Figma: w:1043.5 h:387.55  top:602.47 left:329.5
//             Canvas: 1440×1024  →  top=58.83%  left=22.88%
//             ══════════════════════════════════════════════════════════ */}
//         <div
//           className="absolute pointer-events-none"
//           style={{
//             /* Position as % of the 1440×1024 canvas */
//             top: "58.83%",
//             left: "22.88%",
//             width: "72.47%",     /* 1043.5/1440 */
//             /* height intentionally auto — children define it */
//             opacity: head1T,
//             transform: `translateY(${40 * (1 - head1T)}px)`,
//           }}
//         >
//           {/* ── Heading line 1: "Premium residence for those"
//               Figma: w:780 h:65  top:602.47 left:329.5
//               Relative to group top-left → offset = 0,0
//               font: Roundo 500 60.41px / 64.08px / ls:-1.92px ── */}
//           <h1
//             style={{
//               fontFamily: "var(--font-roundo), 'Roundo', system-ui, sans-serif",
//               fontWeight: 500,
//               /* clamp: mobile 28px → tablet 42px → desktop ~60px based on vw */
//               fontSize: "clamp(28px, 4.195vw, 60.41px)",
//               lineHeight: "1.06",
//               letterSpacing: "-0.032em",
//               color: "#ffffff",
//               textAlign: "left",
//               margin: 0,
//               padding: 0,
//               whiteSpace: "nowrap",
//               textShadow: "0 2px 16px rgba(0,0,0,0.25)",
//             }}
//           >
//             Premium residence for those
//           </h1>

//           {/* ── Heading line 2: "who seek refined living."
//               Figma: w:611 h:65  top:667.01 left:414.19
//               Relative to group (top:602.47, left:329.5):
//                 offsetTop = 667.01-602.47 = 64.54px  → ~64.08px (≈ 1 line-height)
//                 offsetLeft = 414.19-329.5 = 84.69px  → 8.09% of 1440
//               ── */}
//           <h1
//             style={{
//               fontFamily: "var(--font-roundo), 'Roundo', system-ui, sans-serif",
//               fontWeight: 500,
//               fontSize: "clamp(28px, 4.157vw, 59.86px)",
//               lineHeight: "1.07",
//               letterSpacing: "-0.032em",
//               color: "#ffffff",
//               textAlign: "left",
//               margin: 0,
//               padding: 0,
//               paddingLeft: "clamp(12px, 5.88vw, 84.69px)",   /* 84.69/1440 = 5.88% */
//               whiteSpace: "nowrap",
//               textShadow: "0 2px 16px rgba(0,0,0,0.25)",
//             }}
//           >
//             who seek refined living.
//           </h1>
//         </div>

//         {/* ══════════════════════════════════════════════════════════
//             HORIZONTAL DIVIDER
//             Figma: w:701 h:1  top:866 left:672
//             Canvas: 1440×1024  →  top=84.57%  left=46.67%  width=48.68%
//             ══════════════════════════════════════════════════════════ */}
//         <div
//           className="absolute pointer-events-none"
//           style={{
//             top: "84.57%",
//             left: "46.67%",
//             width: "48.68%",    /* 701/1440 */
//             height: "1px",
//             backgroundColor: "rgba(255,255,255,0.4)",
//             opacity: lineT,
//           }}
//         />

//         {/* ══════════════════════════════════════════════════════════
//             LABEL: "YOUR VILLA PARTNER"
//             Figma: w:170 h:17  top:884.38 left:674.79
//             Canvas: 1440×1024  →  top=86.36%  left=46.86%
//             font: Geist 600 14px / 16.38px / ls:1.26px  uppercase  center
//             ══════════════════════════════════════════════════════════ */}
//         <div
//           className="absolute pointer-events-none"
//           style={{
//             top: "86.36%",
//             left: "46.86%",
//             width: "11.81%",   /* 170/1440 */
//             opacity: sub1T,
//             transform: `translateY(${20 * (1 - sub1T)}px)`,
//           }}
//         >
//           <span
//             style={{
//               fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
//               fontWeight: 600,
//               fontSize: "clamp(10px, 0.972vw, 14px)",
//               lineHeight: "16.38px",
//               letterSpacing: "1.26px",
//               textTransform: "uppercase",
//               textAlign: "center",
//               color: "rgba(255,255,255,0.9)",
//               display: "block",
//               whiteSpace: "nowrap",
//             }}
//           >
//             Your Villa Partner
//           </span>
//         </div>

//         {/* ══════════════════════════════════════════════════════════
//             DESCRIPTION CONTAINER
//             Figma: w:270.75 h:105  top:885.02 left:1102.25
//             Canvas: 1440×1024  →  top=86.43%  left=76.54%  width=18.80%
//             text: Geist 400 15.4px / 21px / ls:0%
//             ══════════════════════════════════════════════════════════ */}
//         <div
//           className="absolute pointer-events-none"
//           style={{
//             top: "86.43%",
//             left: "76.54%",
//             width: "18.80%",   /* 270.75/1440 */
//             opacity: sub2T,
//             transform: `translateY(${20 * (1 - sub2T)}px)`,
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
//               fontWeight: 400,
//               fontSize: "clamp(11px, 1.069vw, 15.4px)",
//               lineHeight: "21px",
//               letterSpacing: "0",
//               color: "rgba(255,255,255,0.85)",
//               margin: 0,
//               padding: 0,
//             }}
//           >
//             We design and install bespoke glass systems for ambitious architectural projects. Every pane reflects our commitment to clarity, quality, and collaboration.
//           </p>
//         </div>

//         {/* ── Percentage Counter ── */}
//         <div
//           className="absolute pointer-events-none"
//           style={{
//             top: "85vh",
//             right: "6vw",
//             opacity: counterOpacity,
//           }}
//         >
//           <span className="font-outfit font-light text-white/90 leading-none tabular-nums"
//             style={{ fontSize: "clamp(34px,3.61vw,80px)", letterSpacing: "-0.06vw" }}>
//             {pct}%
//           </span>
//         </div>

//       </section>
//     </>
//   );
// }


// -----------------------------------------------------

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../common/Navbar";

// ─── Easing helpers ────────────────────────────────────────────────────────────
const clampVal = (v, min, max) => Math.min(Math.max(v, min), max);

const mapRange = (value, inMin, inMax, outMin, outMax) => {
  const t = clampVal((value - inMin) / (inMax - inMin), 0, 1);
  return outMin + t * (outMax - outMin);
};

const easeOutCubic  = (t) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutQuart  = (t) => 1 - Math.pow(1 - t, 4);

export default function HeroSection() {
  const sectionRef = useRef(null);

  const [progress,  setProgress]  = useState(0);
  const [animState, setAnimState] = useState("intro"); // "intro" | "waiting" | "outro" | "done"

  // 1. Intro Animation (0 → 60%) on mount
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    let start;
    const duration = 2500;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = clampVal(elapsed / duration, 0, 1);
      const easedT = easeInOutCubic(t);
      setProgress(easedT * 0.6);

      if (t < 1.0) requestAnimationFrame(step);
      else          setAnimState("waiting");
    };

    requestAnimationFrame(step);
    return () => { document.body.style.overflow = ""; };
  }, []);

  // 2. Outro Animation (60 → 100%) on click
  const handleClick = () => {
    if (animState !== "waiting") return;
    setAnimState("outro");

    let start;
    const duration = 2800;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = clampVal(elapsed / duration, 0, 1);
      const easedT = easeInOutCubic(t);
      setProgress(0.6 + easedT * 0.4);

      if (t < 1.0) {
        requestAnimationFrame(step);
      } else {
        setAnimState("done");
        document.body.style.overflow = "";
      }
    };

    requestAnimationFrame(step);
  };

  // ── Derived values ─────────────────────────────────────────────────────────
  const pct = Math.round(progress * 100);

  const phase1T = easeOutCubic   (mapRange(progress, 0.00, 0.40, 0, 1));
  const phase2T = easeInOutCubic (mapRange(progress, 0.40, 0.60, 0, 1));
  const phase3T =                 mapRange(progress, 0.60, 1.00, 0, 1);

  // ── Logo morph ─────────────────────────────────────────────────────────────
  const vw = typeof window !== "undefined" ? window.innerWidth  : 1440;
  const vh = typeof window !== "undefined" ? window.innerHeight : 1110;
  const effectiveVw = clampVal(vw, 320, 1440);

  const scaleCenter = effectiveVw / 1440;
  const scaleNavbar = 117.08 / 600;

  const groupScale = progress <= 0.4
    ? scaleCenter
    : scaleCenter - phase2T * (scaleCenter - scaleNavbar);

  // Intrinsic logo sizes — interpolated with phase1T
  // clamp ensures they never exceed Figma max on very wide viewports
  const markWidth  = 140 + phase1T * (201.61 - 140);
  const markHeight = 156.95 + phase1T * (226.03 - 156.95);
  const textWidth  = 140 + phase1T * (600 - 140);
  const textHeight = 17.82 + phase1T * (76.39 - 17.82);
  const logoGap    = 11.31 + phase1T * (31.09 - 11.31);

  // Logo Y drift
  const figmaCenterY  = vh * 0.4056;
  const navbarCenterY = 48.19;
  const driftToNavbar = navbarCenterY - figmaCenterY;
  const driftStart    = vh * 0.05;

  const groupY = progress <= 0.4
    ? driftStart * (1 - phase1T)
    : phase2T * driftToNavbar;

  // ── Beige curtain ──────────────────────────────────────────────────────────
  let beigeClipTopPx = vh;
  if (progress > 0.4 && progress <= 0.6) {
    beigeClipTopPx = vh - phase2T * (vh - 140);
  } else if (progress > 0.6) {
    beigeClipTopPx = 140 - phase3T * 140;
  }
  const beigeClipPath = `inset(${beigeClipTopPx}px 0 0 0)`;

  // ── House image scale (0.5 → 1.0) ─────────────────────────────────────────
  const bgScale = 0.5 + phase3T * 0.5;

  // ── Waves ──────────────────────────────────────────────────────────────────
  const waveDrift = mapRange(progress, 0.0, 0.6, 20, -20);

  // ── Staggered content reveal ───────────────────────────────────────────────
  const head1T = easeOutQuart(mapRange(progress, 0.78, 0.90, 0, 1));
  const lineT  = easeOutQuart(mapRange(progress, 0.84, 0.94, 0, 1));
  const sub1T  = easeOutQuart(mapRange(progress, 0.87, 0.96, 0, 1));
  const sub2T  = easeOutQuart(mapRange(progress, 0.90, 0.98, 0, 1));

  const navOpacity     = phase3T;
  const counterOpacity = progress < 0.95 ? 1 : mapRange(progress, 0.95, 1.0, 1, 0);

  return (
    <>
      {/* ── Sticky Background ─────────────────────────────────────────────── */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none -z-10">

        {/* Layer 0: Dark blue + waves */}
        <div className="absolute inset-0 w-full h-full -z-30 overflow-hidden pointer-events-none bg-[#2A3A4A]">
          <svg
            viewBox="0 0 1440 1110"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full opacity-50"
            style={{ transform: `translateY(${waveDrift}px)` }}
          >
            <image href="/icons/Vector (1).svg" x="-15.98" y="-110"    width="1453.91" height="313.69" />
            <image href="/icons/Vector (2).svg" x="-16"    y="53.02"   width="1455.59" height="482.03" />
            <image href="/icons/Vector (3).svg" x="-16"    y="382.24"  width="1456"    height="482.43" />
            <image href="/icons/Vector (4).svg" x="658.34" y="711.44"  width="781.16"  height="298.4"  />
          </svg>
        </div>

        {/* Layer 1: Beige curtain + house */}
        <div
          className="absolute inset-0 w-full h-full -z-20 bg-[#EDE7DE]"
          style={{ clipPath: beigeClipPath, WebkitClipPath: beigeClipPath }}
        >
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `scale3d(${bgScale}, ${bgScale}, 1)`,
              transformOrigin: "center bottom",
            }}
          >
            <Image
              src="/dummyimages/Frame 2121454280.png"
              alt="Chameri villa exterior"
              fill
              sizes="100vw"
              className="object-cover object-[center_top]"
              priority
            />
          </div>
        </div>
      </div>

      {/* ── Sticky Header (Logo & Navbar) ─────────────────────────────────── */}
      <div
        className="sticky top-0 left-0 w-full h-screen pointer-events-none z-50 overflow-visible"
        style={{ marginTop: "-100vh" }}
      >
        <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">

          {/* Layer 2: Animated logo group */}
          <div
            className="absolute z-30 flex flex-col items-center"
            style={{
              left: "50%",
              top:  "40.56vh",
              gap:  `${logoGap}px`,
              transform: `translate(-50%, -50%) translateY(${groupY}px) scale(${groupScale})`,
              transformOrigin: "center center",
            }}
          >
            <div style={{ position: "relative", width: `${markWidth}px`, height: `${markHeight}px` }}>
              <Image
                src="/icons/logo (6).svg"
                alt="Chameri mark"
                fill
                sizes="400px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div style={{ position: "relative", width: `${textWidth}px`, height: `${textHeight}px` }}>
              <Image
                src="/icons/logo (7).svg"
                alt="CHAMERI"
                fill
                sizes="800px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Layer 3: Navbar */}
        <Navbar opacity={navOpacity} />
      </div>

      {/* ── Scrolling Content ─────────────────────────────────────────────── */}
      <section
        id="hero"
        ref={sectionRef}
        className={`relative w-full z-20 pointer-events-auto ${animState === "waiting" ? "cursor-pointer" : ""}`}
        style={{ marginTop: "-100vh", height: "100vh" }}
        onClick={handleClick}
      >

        {/* Bottom gradient for text readability */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "45%",
            background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)",
            opacity: head1T,
          }}
        />

        {/* ══ Heading group ══
            Figma: w:1043.5 h:387.55  top:602.47 left:329.5
            → top=58.83%  left=22.88%  width=72.47%
        ════════════════════════════════════════════════════════════ */}
        <div
          className="absolute pointer-events-none"
          style={{
            top:       "58.83%",
            left:      "22.88%",
            width:     "72.47%",
            opacity:   head1T,
            transform: `translateY(${40 * (1 - head1T)}px)`,
          }}
        >
          {/* Line 1 */}
          <h1
            style={{
              fontFamily:    "var(--font-roundo), 'Roundo', system-ui, sans-serif",
              fontWeight:    500,
              fontSize:      "clamp(28px, 4.195vw, 60.41px)",
              lineHeight:    1.06,
              letterSpacing: "-0.032em",
              color:         "#ffffff",
              textAlign:     "left",
              margin:        0,
              padding:       0,
              whiteSpace:    "nowrap",
              textShadow:    "0 2px 16px rgba(0,0,0,0.25)",
            }}
          >
            Premium residence for those
          </h1>

          {/* Line 2 — indented */}
          <h1
            style={{
              fontFamily:    "var(--font-roundo), 'Roundo', system-ui, sans-serif",
              fontWeight:    500,
              fontSize:      "clamp(28px, 4.157vw, 59.86px)",
              lineHeight:    1.07,
              letterSpacing: "-0.032em",
              color:         "#ffffff",
              textAlign:     "left",
              margin:        0,
              padding:       0,
              // 84.69px at 1440px → 5.88vw, floor at 12px mobile
              paddingLeft:   "clamp(12px, 5.88vw, 84.69px)",
              whiteSpace:    "nowrap",
              textShadow:    "0 2px 16px rgba(0,0,0,0.25)",
            }}
          >
            who seek refined living.
          </h1>
        </div>

        {/* ══ Horizontal divider ══
            Figma: top:866 left:672  → top=84.57%  left=46.67%  width=48.68%
        ════════════════════════════════════════════════════════════ */}
        <div
          className="absolute pointer-events-none"
          style={{
            top:             "84.57%",
            left:            "46.67%",
            width:           "48.68%",
            height:          "1px",
            backgroundColor: "rgba(255,255,255,0.4)",
            opacity:         lineT,
          }}
        />

        {/* ══ Label: "YOUR VILLA PARTNER" ══
            Figma: top:884.38 left:674.79  → top=86.36%  left=46.86%  width=11.81%
            font: 600 14px / ls:1.26px  uppercase
        ════════════════════════════════════════════════════════════ */}
        <div
          className="absolute pointer-events-none"
          style={{
            top:       "86.36%",
            left:      "46.86%",
            width:     "11.81%",
            opacity:   sub1T,
            transform: `translateY(${20 * (1 - sub1T)}px)`,
          }}
        >
          <span
            style={{
              fontFamily:     "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
              fontWeight:     600,
              // 14px at 1440px → 0.972vw, floor at 10px
              fontSize:       "clamp(10px, 0.972vw, 14px)",
              lineHeight:     "clamp(12px, 1.138vw, 16.38px)",
              letterSpacing:  "clamp(0.8px, 0.0875vw, 1.26px)",
              textTransform:  "uppercase",
              textAlign:      "center",
              color:          "rgba(255,255,255,0.9)",
              display:        "block",
              whiteSpace:     "nowrap",
            }}
          >
            Your Villa Partner
          </span>
        </div>

        {/* ══ Description ══
            Figma: top:885.02 left:1102.25  → top=86.43%  left=76.54%  width=18.80%
            font: 400 15.4px / 21px
        ════════════════════════════════════════════════════════════ */}
        <div
          className="absolute pointer-events-none"
          style={{
            top:       "86.43%",
            left:      "76.54%",
            width:     "18.80%",
            opacity:   sub2T,
            transform: `translateY(${20 * (1 - sub2T)}px)`,
          }}
        >
          <p
            style={{
              fontFamily:    "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
              fontWeight:    400,
              // 15.4px at 1440px → 1.069vw, floor at 11px
              fontSize:      "clamp(11px, 1.069vw, 15.4px)",
              // 21px at 1440px → 1.458vw, floor at 15px
              lineHeight:    "clamp(15px, 1.458vw, 21px)",
              letterSpacing: "0",
              color:         "rgba(255,255,255,0.85)",
              margin:        0,
              padding:       0,
            }}
          >
            We design and install bespoke glass systems for ambitious architectural
            projects. Every pane reflects our commitment to clarity, quality, and
            collaboration.
          </p>
        </div>

        {/* ══ Percentage counter ══ */}
        <div
          className="absolute pointer-events-none"
          style={{
            // 85vh / 6vw are already viewport-relative — no change needed
            top:     "85vh",
            right:   "6vw",
            opacity: counterOpacity,
          }}
        >
          <span
            className="font-outfit font-light text-white/90 leading-none tabular-nums"
            style={{
              // Already uses clamp — preserved as-is
              fontSize:      "clamp(34px, 3.61vw, 80px)",
              letterSpacing: "-0.06vw",
            }}
          >
            {pct}%
          </span>
        </div>

      </section>
    </>
  );
}
