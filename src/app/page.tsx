
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { WellnessTip } from "@/components/sections/WellnessTip";
import { AboutMe } from "@/components/sections/AboutMe";
import { ProductGateway } from "@/components/sections/ProductGateway";
import { LimeLifeShowcase } from "@/components/sections/LimeLifeShowcase";
import { Promotions } from "@/components/sections/Promotions";
import { Publications } from "@/components/sections/Publications";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WellnessTip />
      <AboutMe />
      <ProductGateway />
      <LimeLifeShowcase />
      <Promotions />
      <Publications />
      <FinalCTA />
      <Footer />
    </main>
  );
}
