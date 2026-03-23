
import { Header } from "@/components/sections/Header";
import { ProfessionalServices } from "@/components/sections/ProfessionalServices";
import { Footer } from "@/components/sections/Footer";

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Header />
      <div className="pt-24 md:pt-32">
        <ProfessionalServices />
      </div>
      <Footer />
    </main>
  );
}
