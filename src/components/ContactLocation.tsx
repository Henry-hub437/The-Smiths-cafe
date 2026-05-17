import { Phone, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';
import { motion } from 'motion/react';

export default function ContactLocation() {
  const whatsappUrl = `https://wa.me/234${RESTAURANT_INFO.whatsapp.replace(/\s+/g, '').substring(1)}`;

  return (
    <section id="contact" className="py-0 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Info Side */}
        <div className="bg-[#1a1a1a] text-white py-24 px-6 md:px-16 lg:px-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mb-4 block">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Contact & Location</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6">
                <MapPin className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                <div>
                  <h4 className="font-serif text-xl font-medium mb-1">Address</h4>
                  <p className="text-white/70 font-light leading-relaxed max-w-sm">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <Clock className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                <div>
                  <h4 className="font-serif text-xl font-medium mb-1">Hours</h4>
                  <p className="text-white/70 font-light leading-relaxed">
                    {RESTAURANT_INFO.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <Phone className="w-6 h-6 text-[#D4AF37] mt-1 shrink-0" />
                <div>
                  <h4 className="font-serif text-xl font-medium mb-1">Contact</h4>
                  <p className="text-white/70 font-light leading-relaxed">
                    {RESTAURANT_INFO.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium tracking-wider uppercase text-sm hover:bg-[#20b858] transition-colors rounded-sm"
              >
                Chat on WhatsApp
              </a>
              <a 
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white text-[#D4AF37] font-medium tracking-wider uppercase text-sm transition-colors rounded-sm"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Map Side */}
        <div id="location" className="h-[400px] lg:h-auto min-h-[500px] bg-gray-200 relative">
          <iframe 
            src={`https://maps.google.com/maps?q=${encodeURIComponent(RESTAURANT_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location for The Smiths"
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
