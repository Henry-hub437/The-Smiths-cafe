import { IMAGES, FALLBACK_IMAGES } from '../data';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 md:order-1"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
              Where Culinary Art Meets <span className="italic font-light">Elegance</span>
            </h2>
            <div className="space-y-6 text-gray-600 font-light text-lg">
              <p>
                Situated in the heart of Victoria Island, The Smiths is more than a restaurant—it is an immersive dining experience. We blend exquisite interior design with an innovative approach to modern cuisine.
              </p>
              <p>
                From our signature Bourbon Burger to our carefully curated cocktail program, every detail is considered to provide our guests with unforgettable moments. Whether it's a casual lunch or an evening of celebration, our kitchen and cocktail room await you.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <span className="block font-serif text-3xl font-bold text-[#D4AF37] mb-1">4.5★</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">500+ Reviews</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-[#D4AF37] mb-1">2am</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Late Night</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[700px] order-1 md:order-2"
          >
            {/* The oval mask technique from Recipe 12 for luxury feel */}
            <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[40px]">
              <img 
                src={IMAGES.storefront} 
                onError={(e) => { e.currentTarget.src = FALLBACK_IMAGES.storefront }}
                alt="The Smiths exterior" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#f5f2ed] rounded-full z-[-1]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
