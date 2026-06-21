import KiwanoHero from '@/components/kiwano/KiwanoHero';
import KiwanoFeatures from '@/components/kiwano/KiwanoFeatures';

export const metadata = {
  title: 'Kiwano — Chameri Premium Villa Residences',
  description:
    'Elegant spaces built for refined views. Experience Chameri Kiwano — a scroll-driven visual journey into premium living.',
};

export default function KiwanoPage() {
  return (
    <main style={{ background: '#EDE7DE', minHeight: '100vh' }}>
      {/* ── Hero: Scroll-driven video + text reveal ───────────────── */}
      <KiwanoHero />

      {/* ── Features: Horizontal swipable cards ───────────────────── */}
      <KiwanoFeatures />
    </main>
  );
}
