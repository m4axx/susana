
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MessageSquare, Star, ArrowRight, Camera, Brush, Heart, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "social",
    title: "Eventos & Social",
    description: "Realza tu belleza natural con un look sofisticado para cualquier ocasión especial.",
    includes: "Preparación de piel + Pestañas postizas",
    duration: "60 min",
    modality: "Presencial",
    price: "Desde 75€",
    icon: <Star className="h-5 w-5 text-accent" />,
    imageId: "ll-maquillaje"
  },
  {
    id: "bridal",
    title: "Novias Elite",
    description: "Un servicio exclusivo y personalizado para que brilles con luz propia en tu gran día.",
    includes: "Prueba previa + Kit de retoque VIP",
    duration: "Variable",
    modality: "A domicilio / Presencial",
    price: "Desde 150€",
    icon: <Heart className="h-5 w-5 text-accent" />,
    imageId: "service-bridal"
  },
  {
    id: "artistic",
    title: "Maquillaje Artístico",
    description: "Creatividad sin límites para sesiones de fotos, moda y proyectos conceptuales.",
    includes: "Diseño personalizado + Caracterización",
    duration: "90 - 120 min",
    modality: "Estudio / Exterior",
    price: "Desde 100€",
    icon: <Brush className="h-5 w-5 text-accent" />,
    imageId: "service-artistic"
  },
  {
    id: "workshop",
    title: "Clases de Automaquillaje",
    description: "Sesiones VIP donde aprenderás las técnicas profesionales adaptadas a tu rostro.",
    includes: "Asesoría de productos + Guía de pasos",
    duration: "2h aprox.",
    modality: "Individual / Grupo / Online",
    price: "Precio variable",
    icon: <Camera className="h-5 w-5 text-accent" />,
    imageId: "ll-colecciones"
  }
];

const PORTFOLIO = [
  { id: "p1", imageId: "portfolio-1", category: "Artístico" },
  { id: "p2", imageId: "portfolio-2", category: "Glam" },
  { id: "p3", imageId: "portfolio-3", category: "Editorial" },
  { id: "p4", imageId: "hero-bg", category: "Social" },
  { id: "p5", imageId: "service-artistic", category: "Creativo" },
];

export function ProfessionalServices() {
  const whatsappUrl = "https://wa.me/qr/4JSUW45MSRMZM1";

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#050505] text-white overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="space-y-3 md:space-y-4">
              <span className="text-accent uppercase tracking-[0.4em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-bold block">Artistry & Precision</span>
              <h2 className="text-4xl md:text-8xl font-headline leading-[1.1]">Arte en el <br /><span className="italic font-normal">Rostro.</span></h2>
            </div>
            <p className="text-white/40 text-base md:text-xl font-light leading-relaxed max-w-lg">
              Como maquilladora profesional, mi misión es fusionar la técnica de alta definición con una visión artística única. Cada trazo es una declaración de estilo y frescura.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden group order-1 md:order-2">
            <Image
              src={PlaceHolderImages.find(img => img.id === "service-artistic")?.imageUrl || ""}
              alt="Maquillaje Profesional"
              fill
              className="object-cover transition-transform duration-[3s] group-hover:scale-110 opacity-80"
              unoptimized
            />
            <div className="absolute inset-0 border border-white/20 m-4 md:m-6" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 md:pb-12">
            <h3 className="text-3xl md:text-5xl font-headline italic">Tarifas & Servicios</h3>
            <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase">Excelencia y flexibilidad profesional</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white/5 p-6 md:p-8 border border-white/5 hover:border-accent/30 transition-all duration-500 flex flex-col justify-between min-h-[450px]">
                <div className="space-y-6">
                  <div className="p-2.5 bg-accent/10 w-fit">
                    {service.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-headline italic">{service.title}</h4>
                  <p className="text-white/40 text-xs md:text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <div className="flex items-start gap-2 text-[10px] text-white/60">
                      <CheckCircle2 className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                      <span>{service.includes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-white/60">
                      <Clock className="h-3 w-3 text-accent shrink-0" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-[9px] uppercase tracking-tighter text-accent/80 font-medium">
                      {service.modality}
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 space-y-6">
                  <div className="text-accent font-bold tracking-[0.2em] text-lg uppercase">
                    {service.price}
                  </div>
                  <Button 
                    variant="link" 
                    className="p-0 text-white hover:text-accent h-auto text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold"
                    asChild
                  >
                    <a href={whatsappUrl} target="_blank">Reservar Ahora <ArrowRight className="ml-2 h-3 w-3" /></a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery */}
        <div className="space-y-12 md:space-y-16">
          <div className="text-center space-y-3 md:space-y-4">
            <span className="text-accent uppercase tracking-[0.4em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-bold">The Portfolio</span>
            <h3 className="text-3xl md:text-6xl font-headline">Galería Creativa</h3>
          </div>
          
          <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-3 md:gap-4 pb-6 md:pb-0 scrollbar-hide snap-x">
            {PORTFOLIO.map((item) => (
              <div key={item.id} className="relative flex-shrink-0 w-64 md:w-auto aspect-[3/4] overflow-hidden snap-center group cursor-pointer shadow-lg md:shadow-none">
                <Image
                  src={PlaceHolderImages.find(img => img.id === item.imageId)?.imageUrl || ""}
                  alt={item.category}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold border-b border-accent pb-1">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Services CTA */}
        <div className="text-center pt-12 md:pt-20">
          <div className="inline-block p-8 md:p-20 border border-white/10 relative w-full md:w-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-4 md:px-6">
               <Star className="h-5 w-5 md:h-6 md:w-6 text-accent" />
            </div>
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-5xl font-headline italic leading-tight">¿Lista para tu transformación?</h3>
              <p className="text-white/40 max-w-md mx-auto font-light text-sm md:text-base">
                Consultas personalizadas para eventos, bodas y proyectos artísticos. Plazas limitadas por temporada para garantizar la máxima exclusividad.
              </p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-white text-black rounded-none h-14 md:h-16 px-8 md:px-12 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold transition-all flex items-center gap-3 md:gap-4 mx-auto w-full sm:w-auto"
                asChild
              >
                <a href={whatsappUrl} target="_blank">
                  <MessageSquare className="h-4 w-4" /> Solicitar Presupuesto
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
