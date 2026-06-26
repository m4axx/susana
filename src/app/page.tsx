import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutMe } from "@/components/sections/AboutMe";
import { ProductGateway } from "@/components/sections/ProductGateway";
import { Testimonials } from "@/components/sections/Testimonials";
import { OfferForm } from "@/components/sections/OfferForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloating } from "@/components/sections/WhatsAppFloating";
import { MobileStickyBar } from "@/components/sections/MobileStickyBar";
import { ViewContentTracker } from "@/components/sections/ViewContentTracker";

// Orden definitivo de la landing de campaña (brief BreoganOnline):
// 1 Hero · 2 Palmira · 3 Diferencial · 4 Testimonios · 5 Oferta+Form · 6 WhatsApp · 7 Footer
export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <TrustStrip />
      <AboutMe />
      <ProductGateway />
      <Testimonials />
      <OfferForm />
      <FinalCTA />
      <Footer />
      <WhatsAppFloating />
      <MobileStickyBar />
      <ViewContentTracker />
    </main>
  );
}
