import React from "react";
import { motion } from "framer-motion";
import { Layers, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Discovery & Blueprint",
    desc: "We analyze your needs and map out a scalable component architecture.",
    icon: <Layers className="w-6 h-6 text-white" />
  },
  {
    title: "Development Sprint",
    desc: "We build your assets using React 19 & Tailwind v4, ensuring pixel-perfect execution.",
    icon: <Code2 className="w-6 h-6 text-white" />
  },
  {
    title: "Deploy & Scale",
    desc: "You receive production-ready code, documentation, and full ownership.",
    icon: <Rocket className="w-6 h-6 text-white" />
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm">How it works</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
            From concept to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">deployed product.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Skip the hiring headache. We function as your specialized engineering unit, delivering results in days, not months.
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 group">
            Start a Project 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-6 group"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                  {step.icon}
                </div>
                {/* Vertical Line Connector */}
                {i !== steps.length - 1 && (
                  <div className="absolute top-14 left-7 w-px h-full bg-white/10 -z-10" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-100">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;