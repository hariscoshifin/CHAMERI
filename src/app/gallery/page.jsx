import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryContactUs from "@/components/gallery/GalleryContactUs";

export const metadata = {
  title: "Gallery — Chameri Premium Villa Residences",
  description: "Explore our collection of timeless villas and landmark spaces.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen relative bg-[#EDE7DE]">
      <Navbar />
      
      <GalleryHero />

      <GalleryGrid />

      <GalleryContactUs />

      <Footer />
    </main>
  );
}
