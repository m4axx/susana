"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star, Clock, CheckCircle2, Heart, Brush, Camera, X, Maximize2, Eye, Sparkles, Footprints } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const MAKEUP_SERVICES = [
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
    title: "Automaquillaje VIP",
    description: "Sesiones donde aprenderás las técnicas profesionales adaptadas a tu rostro.",
    includes: "Asesoría de productos + Guía de pasos",
    duration: "2h aprox.",
    modality: "Individual / Online",
    price: "Consultar",
    icon: <Camera className="h-5 w-5 text-accent" />,
  }
];

const TREATMENT_SERVICES = [
  {
    id: "lashes",
    title: "Lifting & Tinte",
    description: "Eleva y acentúa tu mirada de forma natural sin necesidad de extensiones.",
    includes: "Rizado permanente + Color intenso",
    duration: "45 - 60 min",
    price: "Desde 45€",
    icon: <Eye className="h-6 w-6 text-accent" />,
  },
  {
    id: "manicure",
    title: "Manicura Elite",
    description: "Cuidado profesional para tus manos con productos de alta gama y duraderos.",
    includes: "Básica (15€) / Semi-permanente (18€)",
    duration: "40 - 50 min",
    price: "15€ - 18€",
    icon: <Sparkles className="h-6 w-6 text-accent" />,
  },
  {
    id: "pedicure",
    title: "Pedicura Spa",
    description: "Tratamiento completo para unos pies perfectos, suaves e hidratados.",
    includes: "Sin esmaltar (25€) / Con esmalte (30€)",
    duration: "60 min",
    price: "25€ - 30€",
    icon: <Footprints className="h-6 w-6 text-accent" />,
  }
];

const CAROUSEL_IMAGES = [
  "/1.JPEG",
  "/1.JPG",
  "/2.JPG",
  "/3.JPG",
  "/4.JPG",
  "/5.JPG",
  "/6.JPG",
  "/7.JPG",
  "/8.JPG",
  "/9.JPG",
  "/10.JPG",
  "/11.JPG",
  "/12.JPG",
  "/13.jpg",
];

export function ProfessionalServices() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const whatsappUrl = "https://wa.me/qr/4JSUW45MSRMZM1";

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#050505] text-white overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-40">
        
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 items-center">
          <div className="space-y-8 md:space-y-12 order-2 md:order-1 text-center md:text-left">
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold block">Master Artistry</span>
              <h2 className="text-4xl md:text-8xl lg:text-9xl font-headline leading-[0.9] tracking-tighter">Arte en el <br /><span className="italic font-normal text-accent">Rostro.</span></h2>
            </div>
            <p className="text-white/40 text-base md:text-2xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
              Como maquilladora profesional, mi misión es fusionar la técnica de alta definición con una visión artística única. Cada trazo es una declaración de estilo y sofisticación.
            </p>
            <div className="pt-4">
               <Button 
                size="lg"
                className="bg-accent text-black hover:bg-white rounded-none h-16 px-12 text-[10px] tracking-[0.4em] uppercase font-bold transition-all w-full sm:w-auto"
                asChild
              >
                <a href={whatsappUrl} target="_blank">Consultar Agenda</a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden group order-1 md:order-2 shadow-2xl">
            <Image
              src="/sus.jpeg"
              alt="Maquillaje Profesional por Palmira Garde"
              fill
              className="object-cover transition-transform duration-[4s] group-hover:scale-110 opacity-90"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 border-[10px] md:border-[20px] border-white/5 m-4 md:m-6 pointer-events-none" />
          </div>
        </div>

        {/* Makeup Services Grid */}
        <div className="space-y-12 md:space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8 md:pb-12">
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">The Portfolio</span>
              <h3 className="text-3xl md:text-6xl font-headline italic">Maquillaje de Autor</h3>
            </div>
            <p className="text-white/40 text-[10px] md:text-sm tracking-[0.3em] uppercase max-w-xs md:text-right">Técnicas PRO para resultados de alfombra roja</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {MAKEUP_SERVICES.map((service) => (
              <div key={service.id} className="group bg-white/[0.02] p-8 md:p-10 border border-white/5 hover:border-accent/40 transition-all duration-700 flex flex-col justify-between hover:bg-white/[0.04] min-h-[400px]">
                <div className="space-y-8">
                  <div className="p-3 bg-accent/10 w-fit rounded-full group-hover:bg-accent group-hover:text-black transition-all duration-500">
                    {service.icon}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl md:text-3xl font-headline italic">{service.title}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{service.description}</p>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-white/5 text-[11px] text-white/60">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{service.includes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent shrink-0" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8 flex items-center justify-between">
                  <div className="text-white text-xl font-headline italic">{service.price}</div>
                  <a href={whatsappUrl} target="_blank" className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold border-b border-accent/30 hover:border-accent transition-all">Reservar</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treatments Section (The Sanctuary) */}
        <div className="bg-white/5 border border-white/10 relative overflow-hidden py-20 md:py-32 px-6 md:px-12">
           <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] -mr-48 -mt-48" />
           <div className="max-w-6xl mx-auto space-y-20 relative z-10">
              <div className="text-center space-y-4">
                 <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold">The Sanctuary</span>
                 <h3 className="text-4xl md:text-7xl font-headline italic">Tratamientos & Bienestar</h3>
                 <p className="text-white/40 max-w-xl mx-auto font-light text-sm md:text-lg">
                    Un espacio dedicado a revitalizar tu esencia a través del cuidado minucioso y la estética de alta gama.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                 {TREATMENT_SERVICES.map((treat) => (
                    <div key={treat.id} className="bg-[#0A0A0A] p-10 border border-white/5 hover:border-accent transition-all duration-700 group flex flex-col justify-between">
                       <div className="space-y-10">
                          <div className="flex items-center gap-6">
                             <div className="p-4 bg-accent/10 rounded-full text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500 shrink-0">
                                {treat.icon}
                             </div>
                             <h4 className="text-2xl font-headline italic">{treat.title}</h4>
                          </div>
                          
                          <p className="text-white/40 text-sm font-light leading-relaxed min-h-[60px]">
                             {treat.description}
                          </p>

                          <ul className="space-y-4 text-[11px] text-white/60 pt-6 border-t border-white/5">
                             <li className="flex gap-3">
                                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                                {treat.includes}
                             </li>
                             <li className="flex gap-3">
                                <Clock className="h-4 w-4 text-accent shrink-0" />
                                {treat.duration}
                             </li>
                          </ul>
                       </div>

                       <div className="pt-10 flex items-center justify-between border-t border-white/5 mt-8">
                          <span className="text-2xl font-headline text-accent italic">{treat.price}</span>
                          <Button 
                             size="sm" 
                             className="bg-accent text-black hover:bg-white rounded-none h-12 px-8 text-[9px] font-bold tracking-[0.3em] uppercase transition-all" 
                             asChild
                          >
                             <a href={whatsappUrl} target="_blank">Cita VIP</a>
                          </Button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Portfolio Gallery */}
        <div className="space-y-16 md:space-y-24">
          <div className="text-center space-y-4">
            <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold">The Portfolio</span>
            <h3 className="text-4xl md:text-8xl font-headline">Galería Creativa</h3>
          </div>
          
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-12 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

            <div className="flex">
              <motion.div 
                className="flex gap-4 md:gap-8 py-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" } }}
              >
                {[...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES].map((src, index) => (
                  <button
                    key={`${src}-${index}`} 
                    onClick={() => setSelectedImage(src)}
                    className="relative flex-shrink-0 w-[240px] md:w-[400px] aspect-[3/4] overflow-hidden group cursor-pointer shadow-2xl bg-white/5 border-none outline-none"
                  >
                    <Image
                      src={src}
                      alt={`Portfolio item ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center gap-4">
                       <Maximize2 className="h-8 w-8 text-accent animate-pulse" />
                       <span className="text-[10px] tracking-[0.5em] uppercase font-bold border border-white/40 px-6 py-3">Ver Detalle</span>
                    </div>
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Modal for viewing images */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-[95vw] md:max-w-[90vw] lg:max-w-4xl p-0 bg-transparent border-none shadow-none flex items-center justify-center overflow-hidden">
            <DialogTitle className="sr-only">Visualización de Obra Artística</DialogTitle>
            <div className="relative w-full h-[80vh] flex items-center justify-center group">
              {selectedImage && (
                <div className="relative w-full h-full">
                  <Image src={selectedImage} alt="Detalle de maquillaje" fill className="object-contain" unoptimized />
                </div>
              )}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full z-[100]"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Final Services CTA */}
        <div className="text-center pt-20">
          <div className="inline-block p-10 md:p-32 border border-white/10 relative w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-8">
               <div className="flex gap-3">
                 {[1, 2, 3].map(i => <Star key={i} className="h-6 w-6 text-accent fill-accent" />)}
               </div>
            </div>
            <div className="space-y-10 md:space-y-16">
              <h3 className="text-3xl md:text-7xl lg:text-8xl font-headline italic leading-tight">Tu transformación.</h3>
              <p className="text-white/40 max-w-3xl mx-auto font-light text-xl md:text-3xl leading-relaxed">
                Cada rostro cuenta una historia diferente. Permíteme ayudarte a contar la tuya con el cuidado y el arte que mereces.
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
