import { motion } from 'motion/react';
import { IMAGES, FALLBACK_IMAGES, RESTAURANT_INFO } from '../data';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${IMAGES.interior}'), url('${FALLBACK_IMAGES.interior}')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center text-white mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-white/80">
            {RESTAURANT_INFO.tagline}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            A Cultivated <br/> Dining Experience
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/80 font-light mb-12">
            Indulge in modern culinary excellence and crafted cocktails at Victoria Island's premier destination.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-[#D4AF37] text-white border border-[#D4AF37] font-medium tracking-wider uppercase text-sm w-full sm:w-auto hover:bg-[#B5952F] hover:border-[#B5952F] transition-colors"
            >
              Reserve a Table
            </a>
            <a 
              href="#menu" 
              className="px-8 py-4 bg-transparent border border-white text-white font-medium tracking-wider uppercase text-sm w-full sm:w-auto hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              Explore Menu
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <ChevronDown className="w-4 h-4 opacity-70" />
      </motion.div>
    </section>
  );
}
