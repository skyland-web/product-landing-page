import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi"; // Assuming you have react-icons installed

export default function Hero() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger text appearance
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50 } 
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -15, 0], // Floating up and down
      rotate: [0, 1, 0], // Slight rotation
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="pt-16 pb-4 overflow-hidden relative">
      {/* Background Gradient Blob (Optional Polish) */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Column: Content --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-4">
             <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide">
                v2.0 Now Live
             </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900"
          >
            Productized digital experiences that{" "}
            <span className="text-accent">scale</span> with you.
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed">
            We ship design-first product blocks, landing pages, and dashboards so
            you can validate faster and iterate with confidence.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold shadow-lg shadow-accent/20 transition-all"
            >
              Book a demo <FiArrowRight />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:border-slate-300 transition-colors"
            >
              View Pricing
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500 font-medium">
            {["MVP • 4–6 weeks", "Design system included", "React + Tailwind"].map((tag, i) => (
               <div key={i} className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  {tag}
               </div>
            ))}
          </motion.div>
        </motion.div>

        {/* --- Right Column: Visual --- */}
        <div className="hidden md:block relative">
           {/* Main Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="relative z-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 p-8 shadow-2xl ring-1 ring-slate-900/5"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                 </div>
                 <div className="h-2 w-20 bg-slate-100 rounded-full" />
              </div>

              {/* Internal Mock UI */}
              <div className="rounded-xl bg-slate-50 p-6 border border-slate-100">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <div className="text-sm font-semibold text-slate-700">Analytics Report</div>
                        <div className="text-xs text-slate-400 mt-1">Weekly growth</div>
                    </div>
                    <div className="text-2xl font-bold text-accent">+24%</div>
                </div>
                
                {/* Bars Animation */}
                <div className="flex items-end gap-2 h-32 mt-4">
                  {[40, 70, 45, 90, 60].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: 0.8 + (i * 0.1) }}
                      className={`w-full rounded-t-md ${i === 3 ? 'bg-accent' : 'bg-slate-200'}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating Badge (Decorative) */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-6 top-1/2 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
              >
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-lg">✓</div>
                      <div>
                          <div className="text-xs text-slate-400">Status</div>
                          <div className="text-sm font-bold text-slate-800">Deployed</div>
                      </div>
                  </div>
              </motion.div>

            </motion.div>
          </motion.div>
          
          {/* Decorative Back Blob */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-400/20 blur-2xl -z-10 rounded-full scale-90" />
        </div>

      </div>
    </section>
  );
}