import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Do I own the code once delivered?", a: "Yes, 100%. Once we deliver the project, you have full intellectual property rights to the codebase. We do not lock you in." },
  { q: "Can you work with my existing repo?", a: "Absolutely. We can clone your existing Github/Gitlab repository and work on a specific branch, or start fresh." },
  { q: "Do you offer post-launch support?", a: "We include 2 weeks of bug-fix support after delivery. For ongoing maintenance, we offer separate retainer packages." },
  { q: "What tech stack do you use?", a: "We specialize in the React ecosystem: Next.js or Vite, Tailwind CSS, Framer Motion, and Typescript." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <span className={`p-2 rounded-full transition-colors ${activeIndex === i ? 'bg-[var(--color-accent)] text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {activeIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;