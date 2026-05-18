import Image from "next/image";

/**
 * HeroSection — sticky full-viewport hero for the CHAMERI home page.
 *
 * Design canvas: 1440 × 1110 px
 * All absolute positions are expressed as percentages of that canvas so the
 * section scales proportionally on different viewport widths.
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full aspect-[1440/1110] z-0 overflow-visible"
    >
      {/* ── Absolute Content Layer (Scrolls upwards naturally) ──────────────── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">

        {/* ── Header Layer ───────────────────────────────────────────────────── */}
        <div className="absolute top-0 left-0 w-full px-12 py-8 flex items-center justify-between pointer-events-auto z-20">
          {/* Menu Button */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-lg text-white cursor-pointer hover:bg-black/30 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-sm font-medium">Menu</span>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center w-[120px] h-[80px]">
            <Image 
              src="/dummyimages/logo (2).svg" 
              alt="CHAMERI" 
              width={120} 
              height={80} 
              className="w-full h-full object-contain brightness-0 invert" 
            />
          </div>

          {/* Contact Button */}
          <div className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-100 transition-all cursor-pointer">
            <span>Contact Us</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* ── Headline: "Premium residence for those" ────────────────────────── */}
        <p className="absolute font-roundo font-medium text-white text-center whitespace-nowrap top-[54.2766%] left-[22.8819%] w-[54.1667%] text-[clamp(28px,4.2vw,60.41px)] leading-[64.08px] tracking-[-1.92px] pointer-events-auto">
          Premium residence for those
        </p>

        {/* ── Headline: "who seek refined living." ───────────────────────────── */}
        <p className="absolute font-roundo font-medium text-white text-center whitespace-nowrap top-[60.0910%] left-[28.7632%] w-[42.4306%] text-[clamp(28px,4.16vw,59.86px)] leading-[64.08px] tracking-[-1.92px] pointer-events-auto">
          who seek refined living.
        </p>

        {/* ── Horizontal divider ─────────────────────────────────────────────── */}
        <div className="absolute h-[1px] bg-white/45 top-[78.0180%] left-[46.6667%] w-[48.6806%]" />

        {/* ── "YOUR VILLA PARTNER" label ─────────────────────────────────────── */}
        <p className="absolute font-sans font-semibold text-white text-center uppercase whitespace-nowrap top-[79.6739%] left-[46.8604%] w-[11.8056%] text-[clamp(10px,0.97vw,14px)] leading-[16.38px] tracking-[1.26px] pointer-events-auto">
          Your Villa Partner
        </p>

        {/* ── Description text (bottom-right) ────────────────────────────────── */}
        <p className="absolute font-sans font-normal text-white/85 top-[78.0180%] left-[76.3889%] w-[17.7778%] text-[clamp(11px,1.07vw,15.4px)] leading-[21px] tracking-normal pointer-events-auto">
          We design and install bespoke glass systems for ambitious architectural
          projects. Every pane reflects our commitment to clarity, quality, and
          collaboration.
        </p>

      </div>
    </section>
  );
}
