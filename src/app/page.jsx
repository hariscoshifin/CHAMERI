import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LogoMarquee from "@/components/LogoMarquee";
import VillaPlansSection from "@/components/VillaPlansSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <LogoMarquee />
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
