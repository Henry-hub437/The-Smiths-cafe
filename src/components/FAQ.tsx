import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const FAQS = [
  {
    question: "Do I need a reservation?",
    answer: "While reservations are highly recommended, especially for dinners and weekends, we also welcome walk-in guests subject to availability."
  },
  {
    question: "Is there a dress code?",
    answer: "Our dress code is smart casual. We kindly ask our guests to avoid athletic wear, beachwear, and flip-flops to match the ambiance."
  },
  {
    question: "Do you offer vegetarian/vegan options?",
    answer: "Yes, our menu features several vegetarian and plant-based dishes, carefully prepared to offer a premium dining experience for all preferences."
  },
  {
    question: "Can you accommodate large groups or private events?",
    answer: "Absolutely. We offer tailored experiences for large groups and private events. Please contact us directly to discuss arrangements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#E4E3E0] text-primary">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={cn(
                  "border border-gray-300 bg-white rounded-xl overflow-hidden transition-all duration-300",
                  isOpen ? "shadow-md ring-1 ring-primary/5" : "hover:border-gray-400"
                )}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="font-serif text-xl font-medium">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    isOpen ? "bg-[#D4AF37] text-white" : "bg-gray-100 text-primary"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
