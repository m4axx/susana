import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { LegalShell, LegalH2, LegalP } from "@/components/sections/LegalShell";

export const metadata = { title: "Política de Privacidad | Palmira Garde" };

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LegalShell title="Política de Privacidad" updated="Última actualización: junio 2026">
        <LegalH2>1. Responsable del tratamiento</LegalH2>
        <LegalP>
          El responsable del tratamiento de tus datos es Palmira Garde
          (en adelante, “el Responsable”), asesora independiente de cosmética
          natural Ringana. Puedes contactar en cualquier momento escribiendo a{" "}
          <a href="mailto:concierge@palmiragarde.com" className="text-accent underline">
            concierge@palmiragarde.com
          </a>{" "}
          o por WhatsApp al +34 619 51 64 12.
        </LegalP>

        <LegalH2>2. Qué datos recogemos</LegalH2>
        <LegalP>
          A través del formulario de esta web recogemos únicamente los datos que
          nos facilitas voluntariamente: tu <strong>nombre</strong> y un{" "}
          <strong>medio de contacto</strong> (email o número de teléfono /
          WhatsApp). No recogemos datos especialmente protegidos.
        </LegalP>

        <LegalH2>3. Con qué finalidad</LegalH2>
        <LegalP>
          Tratamos tus datos para gestionar tu solicitud del código de
          bienvenida de 20€, atenderte de forma personalizada por WhatsApp o
          email, y resolver tus dudas sobre los productos Ringana. Si nos das tu
          consentimiento, también para enviarte información sobre novedades y
          ofertas.
        </LegalP>

        <LegalH2>4. Base jurídica</LegalH2>
        <LegalP>
          La base legal es tu <strong>consentimiento</strong>, que otorgas al
          enviar el formulario o iniciar la conversación por WhatsApp, y el
          interés en atender tu solicitud previa. Puedes retirar el
          consentimiento en cualquier momento.
        </LegalP>

        <LegalH2>5. Conservación</LegalH2>
        <LegalP>
          Conservamos tus datos durante el tiempo necesario para atender tu
          solicitud y, si procede, mientras mantengas una relación comercial con
          nosotros. Después se eliminarán o anonimizarán.
        </LegalP>

        <LegalH2>6. Destinatarios y terceros</LegalH2>
        <LegalP>
          No cedemos tus datos a terceros salvo obligación legal. La
          comunicación se realiza a través de <strong>WhatsApp</strong> (Meta
          Platforms Ireland Ltd.). Esta web utiliza el <strong>píxel de Meta</strong>{" "}
          con fines de medición publicitaria, que solo se activa si aceptas las
          cookies. Consulta la{" "}
          <a href="/cookies" className="text-accent underline">política de cookies</a>.
        </LegalP>

        <LegalH2>7. Tus derechos</LegalH2>
        <LegalP>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación y portabilidad escribiendo a{" "}
          <a href="mailto:concierge@palmiragarde.com" className="text-accent underline">
            concierge@palmiragarde.com
          </a>
          . También tienes derecho a reclamar ante la Agencia Española de
          Protección de Datos (
          <a href="https://www.aepd.es" target="_blank" rel="noopener" className="text-accent underline">
            aepd.es
          </a>
          ) si consideras que el tratamiento no es conforme a la normativa.
        </LegalP>
      </LegalShell>
      <Footer />
    </main>
  );
}
