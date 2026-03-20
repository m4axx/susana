import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-32 px-6 border-t border-muted">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="space-y-10 md:col-span-2">
          <div className="text-3xl font-headline font-bold">
            Palmira <span className="italic font-normal text-accent">Garde</span>
          </div>
          <p className="text-muted-foreground font-light text-xl leading-relaxed max-w-md">
            Un refugio donde la ciencia de la naturaleza se encuentra con la estética de alta gama. Belleza sin compromisos.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="p-3 border border-muted hover:border-accent hover:text-accent transition-all"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="p-3 border border-muted hover:border-accent hover:text-accent transition-all"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="space-y-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Navegación</h4>
          <ul className="space-y-6 text-muted-foreground text-sm tracking-wide font-medium">
            <li><a href="#sobre-mi" className="hover:text-accent transition-colors uppercase">El Ritual</a></li>
            <li><a href="#productos" className="hover:text-accent transition-colors uppercase">Colecciones</a></li>
            <li><a href="#limelife-detalles" className="hover:text-accent transition-colors uppercase">Tienda</a></li>
            <li><a href="#blog" className="hover:text-accent transition-colors uppercase">Editorial</a></li>
          </ul>
        </div>

        <div className="space-y-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Contacto</h4>
          <ul className="space-y-6 text-muted-foreground text-sm tracking-wide font-medium">
            <li className="flex items-center gap-4"><Mail className="h-4 w-4 text-accent" /> concierge@palmiragarde.com</li>
            <li className="flex items-center gap-4"><MapPin className="h-4 w-4 text-accent" /> Madrid / Barcelona</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
        <p>&copy; {new Date().getFullYear()} Palmira Garde Elite Beauty. Todos los derechos reservados.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-accent">Aviso Legal</a>
          <a href="#" className="hover:text-accent">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}