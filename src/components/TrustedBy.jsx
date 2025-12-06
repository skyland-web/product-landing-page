import React from "react";
import { motion } from "framer-motion";

const brands = [
  "Next.js", "Stripe", "Supabase", "Vercel", "Tailwind CSS", "React", "Node.js", "AWS"
];

const TrustedBy = () => {
  return (
    <section className="py-10 border-y border-gray-100 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-6">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted tech stacks we build with
        </p>
      </div>
      
      <div className="relative flex mask-linear-fade">
        {/* Gradient Masks for fading edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* Scrolling Container */}
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Duplicate list 3 times to ensure seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className="text-xl font-bold text-gray-300 hover:text-[var(--color-accent)] transition-colors duration-300 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;