import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import LogoMarquee from "@/components/home/LogoMarquee";
import VillaPlansSection from "@/components/home/VillaPlansSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GallerySection from "@/components/home/GallerySection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Wrapper for Hero and About sections to share the sticky background image */}
      <div className="relative w-full overflow-visible z-0">
        {/* Sticky Background Image container (absolute to not take up document space) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
          <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
            <Image
              src="/dummyimages/Frame 2121454280.png"
              alt="Chameri villa exterior"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_top]"
            />
          </div>
        </div>

        <HeroSection />
        <AboutSection />
        <LogoMarquee />
      </div>
      <VillaPlansSection />
      <WhyChooseUs />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
