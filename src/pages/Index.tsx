
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { DownloadSection } from "@/components/DownloadSection"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="unmask-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
