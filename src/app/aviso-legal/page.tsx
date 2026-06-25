import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { LegalShell, LegalH2, LegalP } from "@/components/sections/LegalShell";

export const metadata = { title: "Aviso Legal | Palmira Garde" };

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LegalShell title="Aviso Legal" updated="Última actualización: junio 2026">
        <LegalH2>1. Titular del sitio web</LegalH2>
        <LegalP>
          Este sitio web es titularidad de Palmira Garde, asesora independiente
          de cosmética natural Ringana. Contacto:{" "}
          <a href="mailto:concierge@palmiragarde.com" className="text-accent underline">
            concierge@palmiragarde.com
          </a>{" "}
          · WhatsApp +34 619 51 64 12.
        </LegalP>

        <LegalH2>2. Objeto</LegalH2>
        <LegalP>
          La web tiene carácter informativo y comercial: dar a conocer los
          productos de cosmética fresca Ringana y permitir solicitar un código de
          bienvenida. El acceso y uso del sitio implican la aceptación de las
          presentes condiciones.
        </LegalP>

        <LegalH2>3. Propiedad intelectual</LegalH2>
        <LegalP>
          Los textos, imágenes, marcas y diseño del sitio están protegidos por
          derechos de propiedad intelectual e industrial. “Ringana” es una marca
          de su titular; Palmira Garde actúa como asesora independiente. Queda
          prohibida su reproducción sin autorización.
        </LegalP>

        <LegalH2>4. Responsabilidad</LegalH2>
        <LegalP>
          El titular no se responsabiliza del mal uso del sitio ni de la
          información de webs de terceros enlazadas. La información sobre los
          productos tiene carácter orientativo y no sustituye el consejo de un
          profesional sanitario.
        </LegalP>

        <LegalH2>5. Legislación aplicable</LegalH2>
        <LegalP>
          Las presentes condiciones se rigen por la legislación española. Para
          cualquier controversia, las partes se someten a los juzgados y
          tribunales que correspondan conforme a la normativa de consumidores.
        </LegalP>
      </LegalShell>
      <Footer />
    </main>
  );
}
