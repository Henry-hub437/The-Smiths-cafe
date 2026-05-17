import { motion } from 'motion/react';
import { GlassWater, UtensilsCrossed, Star, Clock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <UtensilsCrossed className="w-8 h-8" strokeWidth={1.5} />,
      title: "Exquisite Menu",
      description: "From brunch bowls to premium steaks and seafood, crafted with the finest ingredients.",
    },
    {
      icon: <GlassWater className="w-8 h-8" strokeWidth={1.5} />,
      title: "Signature Cocktails",
      description: "Our mixologists combine premium spirits with house-made syrups and fresh botanicals.",
    },
    {
      icon: <Star className="w-8 h-8" strokeWidth={1.5} />,
      title: "Premium Ambiance",
      description: "Dine under crystal chandeliers in a meticulously designed space perfect for any occasion.",
    },
    {
      icon: <Clock className="w-8 h-8" strokeWidth={1.5} />,
      title: "Late Night Dining",
      description: "Keep the evening going. We're open pouring drinks and serving meals until 2 am.",
    }
  ];

  return (
    <section className="py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-white/70 font-light">
            We believe that a great meal is more than just food—it's an experience built on atmosphere, service, and extraordinary flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border border-[#D4AF37]/50 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
