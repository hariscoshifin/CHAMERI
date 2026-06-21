"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import NewNavbar from "../common/NewNavbar";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * KiwanoHero — Scroll-driven video hero section
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Layout (from Figma specs):
 *   Section  : 1440 × 905.55px
 *
 *   Text div : w:667.67  h:133  top:386.69  left:385.68
 *              font: Roundo 500  60px / 66.14px  ls:-3.05px  center
 *              Visible only when scroll progress ≥ 80%
 *
 *   Video div: w:1440  h:905.55  left:0  background:#00000033
 *              Plays as the user scrolls (currentTime driven by scrollProgress)
 *
 * Scroll mechanics:
 *   - The section is made tall (300vh) so the user scrolls through it while
 *     the visual hero stays sticky (100vh).
 *   - scrollProgress = 0 → 1 over those 300vh.
 *   - video.currentTime = scrollProgress × video.duration.
 *   - Text opacity: 0 when progress < 0.80, fades in from 0.80 → 0.95.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default function KiwanoHero() {
  const wrapperRef = useRef(null);   // the tall scroll wrapper
  const videoRef   = useRef(null);   // the <video> element
  const rafRef     = useRef(null);   // requestAnimationFrame id

  const [scrollProgress, setScrollProgress] = useState(0);

  // ── Clamp helper ────────────────────────────────────────────────────────────
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  // ── Smooth easing for text reveal ───────────────────────────────────────────
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  // ── Scroll handler ─────────────────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    if (!wrapperRef.current) return;

    const wrapper = wrapperRef.current;
    const rect    = wrapper.getBoundingClientRect();
    const vh      = window.innerHeight;

    // scrollable distance = total height of wrapper − one viewport
    const totalScroll = wrapper.offsetHeight - vh;

    // how far the top of wrapper has scrolled above the viewport top
    const scrolled = clamp(-rect.top, 0, totalScroll);

    const progress = totalScroll > 0 ? scrolled / totalScroll : 0;

    setScrollProgress(progress);

    // Drive the video
    const video = videoRef.current;
    if (video && video.duration && !isNaN(video.duration)) {
      video.currentTime = progress * video.duration;
    }
  }, []);

  // ── Attach / detach scroll listener ────────────────────────────────────────
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to seed correct state
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  // ── Pause video (we control playback via currentTime, not play/pause) ──────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("canplay", () => video.pause());

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, []);

  // ── Derived: text visibility ────────────────────────────────────────────────
  // Text appears only after 80% scroll; fades in between 80% → 95%
  const textProgress = clamp((scrollProgress - 0.8) / 0.15, 0, 1);
  const textOpacity  = easeOutCubic(textProgress);

  // ── Section dimensions (pixel-perfect from Figma) ──────────────────────────
  // The sticky visual is 1440 × 905.55; we replicate it as 100vw × 100vh
  // The wrapper is made 300vh tall to give scroll room.

  return (
    <>
      {/* ── NewNavbar ─────────────────────────────────────────────────────── */}
      <NewNavbar />

      {/*
       * ── SCROLL WRAPPER ────────────────────────────────────────────────────
       * 300vh tall → gives the user enough scroll distance to play the video
       * from start to end.
       */}
      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          width:    "100%",
          height:   "300vh",   // scroll travel
        }}
      >
        {/*
         * ── STICKY VISUAL ─────────────────────────────────────────────────
         * Stays fixed in the viewport while the user scrolls through the
         * 300vh wrapper above.
         *
         * Figma: w:1440  h:905.55  angle:0  opacity:1
         */}
        <div
          style={{
            position:       "sticky",
            top:            0,
            left:           0,
            width:          "100%",
            height:         "100vh",
            overflow:       "hidden",
          }}
        >
          {/* ── SECOND DIV: Video + dark overlay ─────────────────────────── */}
          {/*
           * Figma: background:#00000033  w:1440  h:905.55  left:0  opacity:1
           */}
          <div
            style={{
              position:   "absolute",
              top:        0,
              left:       0,
              width:      "100%",
              height:     "100%",
              background: "#00000033",
              zIndex:     1,
            }}
          />

          {/* ── VIDEO ELEMENT ─────────────────────────────────────────────── */}
          <video
            ref={videoRef}
            src="/videos/kiwano-hero.mp4"
            muted
            playsInline
            preload="auto"
            loop={false}
            style={{
              position:   "absolute",
              top:        0,
              left:       0,
              width:      "100%",
              height:     "100%",
              objectFit:  "cover",
              zIndex:     0,
            }}
          />

          {/* ── FIRST DIV: Text ───────────────────────────────────────────── */}
          {/*
           * Figma:
           *   w:667.67  h:133  angle:0  opacity:0 (controlled by scroll)
           *   top:386.69  left:385.68
           *
           * Converted to % of 1440×905.55 canvas:
           *   top  = 386.69 / 905.55 = 42.70%
           *   left = 385.68 / 1440   = 26.78%
           *   width = 667.67 / 1440  = 46.37%
           *
           * Font: Roundo 500  60px / 66.14px  ls:-3.05px  center  middle
           */}
          <div
            style={{
              position:        "absolute",
              top:             "42.70%",
              left:            "26.78%",
              width:           "clamp(280px, 46.37vw, 667.67px)",
              height:          "133px",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              zIndex:          2,
              opacity:         textOpacity,
              transform:       `translateY(${(1 - textOpacity) * 24}px)`,
              transition:      "opacity 0.05s linear, transform 0.05s linear",
              pointerEvents:   "none",
            }}
          >
            <h1
              style={{
                fontFamily:    "var(--font-roundo), 'Roundo', system-ui, sans-serif",
                fontWeight:    500,
                fontStyle:     "normal",
                fontSize:      "clamp(28px, 4.167vw, 60px)",
                lineHeight:    "66.14px",
                letterSpacing: "-3.05px",
                textAlign:     "center",
                color:         "#ffffff",
                margin:        0,
                padding:       0,
                textShadow:    "0 4px 24px rgba(0,0,0,0.45)",
              }}
            >
              Elegant Spaces For Built&nbsp;
              <br />
              Views Photo Frame
            </h1>
          </div>

          {/* ── SCROLL PROGRESS INDICATOR (dev aid, remove in prod) ──────── */}
          {/* Uncomment below to debug scroll progress
          <div
            style={{
              position:   "absolute",
              bottom:     24,
              right:      24,
              zIndex:     10,
              color:      "white",
              fontFamily: "monospace",
              fontSize:   14,
              background: "rgba(0,0,0,0.5)",
              padding:    "4px 10px",
              borderRadius: 6,
            }}
          >
            {Math.round(scrollProgress * 100)}%
          </div>
          */}
        </div>
      </div>
    </>
  );
}
