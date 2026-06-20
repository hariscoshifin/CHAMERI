import NewNavbar from '@/components/common/NewNavbar';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutOriginStory from '@/components/about/AboutOriginStory';
import AboutFounderNote from '@/components/about/AboutFounderNote';
import AboutLogoSection from '@/components/about/AboutLogoSection';
import AboutSpecialSection from '@/components/about/AboutSpecialSection';
import AboutVisionMissionSection from '@/components/about/AboutVisionMissionSection';
import AboutBoardSection from '@/components/about/AboutBoardSection';
import AboutTestimonialSection from '@/components/about/AboutTestimonialSection';
import Footer from '@/components/common/Footer';

export const metadata = {
  title: 'About Us — Chameri Premium Villa Residences',
  description:
    'Learn about Chameri — our story, our values, and the people behind every premium villa we build. Crafting timeless villas and landmark spaces since 1985.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#EFEDE7] relative">
      {/* ── Navbar ────────────────────────────────────────────────────── */}
      <NewNavbar />

      {/* ── Hero: Full-width image + headline ─────────────────────────── */}
      <AboutHeroSection />

      {/* ── Origin Story ──────────────────────────────────────────────── */}
      <AboutOriginStory />

      {/* ── Founder Note ──────────────────────────────────────────────── */}
      <AboutFounderNote />

      {/* ── Logo Marquee ──────────────────────────────────────────────── */}
      <AboutLogoSection />

      {/* ── Vision & Mission (Scroll Stack Cards) ─────────────────────── */}
      <AboutVisionMissionSection />

      {/* ── What Makes Us Special (Scroll Interactive) ────────────────── */}
      <AboutSpecialSection />

      {/* ── Board of Directors ────────────────────────────────────────── */}
      <AboutBoardSection />

      {/* ── Testimonials ──────────────────────────────────────────────── */}
      <AboutTestimonialSection />

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
