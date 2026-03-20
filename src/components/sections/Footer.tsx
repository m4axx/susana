
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-headline italic">Palmira Garden</h3>
          <p className="text-muted-foreground leading-relaxed">
            Tu refugio de bienestar consciente. Belleza natural inspirada en la esencia de la vida.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-secondary rounded-full hover:bg-accent transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="p-2 bg-secondary rounded-full hover:bg-accent transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Navegación</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li><a href="#sobre-mi" className="hover:text-accent transition-colors">Sobre Mí</a></li>
            <li><a href="#productos" className="hover:text-accent transition-colors">Productos</a></li>
            <li><a href="#promociones" className="hover:text-accent transition-colors">Promociones</a></li>
            <li><a href="#blog" className="hover:text-accent transition-colors">Blog</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contacto</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> contacto@palmiragarden.com</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> España, Unión Europea</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Palmira Garden. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Aviso Legal</a>
          <a href="#" className="hover:underline">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
