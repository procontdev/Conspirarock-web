import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/hero/HeroSection";
import TrailerSection from "../components/trailer/TrailerSection";
import EpisodesSection from "../components/episodes/EpisodesSection";
import ThemesSection from "../components/themes/ThemesSection";
import AboutSection from "../components/about/AboutSection";
import HostsSection from "../components/hosts/HostsSection";
import GuestsSection from "../components/guests/GuestsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--cr-black)] text-[var(--cr-text)]">
      <Header />
      <HeroSection />
      <TrailerSection />
      <EpisodesSection />
      <ThemesSection />
      <AboutSection />
      <HostsSection />
      <GuestsSection />
      <Footer />
    </main>
  );
}