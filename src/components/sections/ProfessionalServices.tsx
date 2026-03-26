
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
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
  }
];

const CAROUSEL_IMAGES = [
  "/(1).JPEG",
  "/(1).JPG",
  "/(2).JPG",
  "/(3).JPG",
  "/(4).JPG",
  "/(5).JPG",
  "/(6).JPG",
  "/(7).JPG",
  "/(8).JPG",
  "/(9).JPG",
  "/(10).JPG",
  "/(11).JPG",
  "/(12).JPG",
  "/(13).jpg",
];

export function ProfessionalServices() {
  const whatsappUrl = "https://wa.me/qr/4JSUW45MSRMZM1";

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#050505] text-white overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-40">
        
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 items-center">
          <div className="space-y-8 md:space-y-12 order-2 md:order-1 text-center md:text-left">
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold block">Master Artistry</span>
              <h2 className="text-5xl md:text-9xl font-headline leading-[0.9] tracking-tighter">Arte en el <br /><span className="italic font-normal text-accent">Rostro.</span></h2>
            </div>
            <p className="text-white/40 text-lg md:text-2xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
              Como maquilladora profesional, mi misión es fusionar la técnica de alta definición con una visión artística única. Cada trazo es una declaración de estilo, sofisticación y frescura absoluta.
            </p>
            <div className="pt-4">
               <Button 
                size="lg"
                className="bg-white text-black hover:bg-accent hover:text-white rounded-none h-16 px-12 text-[10px] tracking-[0.4em] uppercase font-bold transition-all"
                asChild
              >
                <a href={whatsappUrl} target="_blank">Consultar Agenda</a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden group order-1 md:order-2 shadow-2xl">
            <Image
              src="/(1).JPG"
              alt="Maquillaje Profesional Destacado"
              fill
              className="object-cover transition-transform duration-[4s] group-hover:scale-110 opacity-90"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 border-[20px] border-white/5 m-6 pointer-events-none" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-16 md:space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">The Offerings</span>
              <h3 className="text-4xl md:text-6xl font-headline italic">Tarifas & Servicios</h3>
            </div>
            <p className="text-white/40 text-[10px] md:text-sm tracking-[0.3em] uppercase max-w-xs md:text-right">Excelencia técnica para resultados de alfombra roja</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white/[0.03] p-8 md:p-10 border border-white/5 hover:border-accent/40 transition-all duration-700 flex flex-col justify-between min-h-[500px] hover:bg-white/[0.05] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
                
                <div className="space-y-8 relative z-10">
                  <div className="p-3 bg-accent/10 w-fit rounded-full group-hover:bg-accent group-hover:text-black transition-all duration-500">
                    {service.icon}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl md:text-3xl font-headline italic tracking-tight">{service.title}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <div className="flex items-start gap-3 text-[11px] text-white/60">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{service.includes}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-white/60">
                      <Clock className="h-4 w-4 text-accent shrink-0" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                      {service.modality}
                    </div>
                  </div>
                </div>
                
                <div className="pt-10 space-y-6 relative z-10">
                  <div className="text-white text-2xl font-headline italic">
                    {service.price}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full rounded-none border-white/20 hover:border-accent hover:bg-accent hover:text-black h-14 text-[10px] tracking-[0.3em] uppercase font-bold transition-all"
                    asChild
                  >
                    <a href={whatsappUrl} target="_blank">Reservar</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Portfolio Gallery */}
        <div className="space-y-16 md:space-y-24">
          <div className="text-center space-y-4">
            <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold">The Portfolio</span>
            <h3 className="text-4xl md:text-8xl font-headline">Galería Creativa</h3>
            <p className="text-white/30 text-sm md:text-xl font-light max-w-2xl mx-auto">Un viaje visual por mis creaciones más impactantes. Arte, color y precisión en cada detalle.</p>
          </div>
          
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

            <div className="flex overflow-hidden">
              <motion.div 
                className="flex gap-4 md:gap-12 py-8"
                animate={{
                  x: [0, -100 * CAROUSEL_IMAGES.length],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                }}
              >
                {[...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES].map((src, index) => (
                  <div 
                    key={index} 
                    className="relative flex-shrink-0 w-[300px] md:w-[500px] aspect-[3/4] overflow-hidden group cursor-crosshair shadow-2xl"
                  >
                    <Image
                      src={src}
                      alt={`Portfolio item ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                       <span className="text-[10px] tracking-[0.5em] uppercase font-bold border border-white/40 px-8 py-4 backdrop-blur-md">View Artistry</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Final Services CTA */}
        <div className="text-center pt-20">
          <div className="inline-block p-10 md:p-32 border border-white/10 relative w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-8">
               <div className="flex gap-3">
                 {[1, 2, 3].map(i => <Star key={i} className="h-6 w-6 text-accent fill-accent" />)}
               </div>
            </div>
            <div className="space-y-10 md:space-y-16">
              <h3 className="text-3xl md:text-8xl font-headline italic leading-tight">¿Lista para tu transformación?</h3>
              <p className="text-white/40 max-w-3xl mx-auto font-light text-xl md:text-3xl leading-relaxed">
                Cada rostro cuenta una historia diferente. Permíteme ayudarte a contar la tuya con el maquillaje que siempre soñaste. Plazas limitadas por temporada.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 pt-8">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-white text-black rounded-none h-20 px-16 text-[11px] tracking-[0.4em] uppercase font-bold transition-all flex items-center gap-4 w-full sm:w-auto shadow-2xl"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank">
                    <MessageSquare className="h-5 w-5" /> Reservar Cita VIP
                  </a>
                </Button>
                <a href={whatsappUrl} target="_blank" className="text-white text-[11px] tracking-[0.4em] uppercase font-bold border-b-2 border-white/10 pb-2 hover:text-accent hover:border-accent transition-all">
                  Solicitar Presupuesto
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
