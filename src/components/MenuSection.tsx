import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_CATEGORIES, MENU_ITEMS, IMAGES } from '../data';
import { cn } from '../lib/utils';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

  const displayedItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#E4E3E0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_2fr] gap-16">
        
        {/* Left Column: Categories */}
        <div className="space-y-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37] mb-4 block">
              Discover
            </span>
            <h2 className="font-serif text-5xl font-bold text-primary mb-8">Our Menu</h2>
            
            {/* Category Navigation */}
            <div className="flex flex-col space-y-4 border-l border-gray-300 pl-4">
              {MENU_CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "text-left uppercase tracking-widest text-sm font-medium transition-all duration-300",
                    activeCategory === category 
                      ? "text-[#D4AF37] opacity-100 translate-x-2" 
                      : "text-gray-500 opacity-60 hover:opacity-100 hover:text-[#D4AF37] hover:translate-x-1"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Menu Items */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm min-h-[600px] flex flex-col">
          <h3 className="font-serif text-3xl font-bold mb-8 italic">{activeCategory}</h3>
          
          <div className="space-y-8 flex-grow">
            <AnimatePresence mode="popLayout">
              {displayedItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-xl font-semibold text-primary">
                      {item.name}
                      {item.popular && (
                        <span className="ml-3 text-[10px] uppercase tracking-widest bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-2 py-1 rounded-full align-middle">
                          Popular
                        </span>
                      )}
                    </h4>
                    <div className="hidden sm:block flex-grow border-b border-dotted border-gray-300 mx-4 opacity-50 relative top-[-4px]"></div>
                    <span className="font-serif font-medium whitespace-nowrap text-lg text-[#D4AF37]">{item.price}</span>
                  </div>
                  <p className="text-gray-500 font-light text-sm max-w-[85%] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>

            {displayedItems.length === 0 && (
              <p className="text-gray-400 italic">Exploring this category soon...</p>
            )}
          </div>
          
          <div className="mt-12 text-center pt-8 border-t border-gray-100">
            <a href="#" className="inline-block text-sm uppercase tracking-widest font-semibold border-b border-primary pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              Download Full PDF Menu
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
