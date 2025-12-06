import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Trophy, Users, Clock, Zap } from "lucide-react";

const stats = [
  { label: "Products Shipped", value: "120+", icon: <Trophy className="w-5 h-5" /> },
  { label: "Happy Clients", value: "98%", icon: <Users className="w-5 h-5" /> },
  { label: "Avg Turnaround", value: "4 Days", icon: <Clock className="w-5 h-5" /> },
  { label: "Performance Score", value: "100", icon: <Zap className="w-5 h-5" /> },
];

// Sub-component to handle the number animation
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  
  // 1. Parse the numeric part and the non-numeric suffix
  // regex: looks for the first number sequence. 
  // "120+" -> number: 120, suffix: "+"
  // "4 Days" -> number: 4, suffix: " Days"
  const numericValue = parseInt(value.match(/\d+/)[0], 10);
  const suffix = value.replace(/\d+/, '').trim();
  const hasSpace = value.includes(' '); // preserve spacing for "4 Days"

  // 2. Motion hooks
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 30, 
    stiffness: 100, 
    duration: 3 // Slower duration
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // Round the number so we don't see decimals during animation
        ref.current.textContent = `${Math.floor(latest)}${hasSpace ? ' ' : ''}${suffix}`;
      }
    });
  }, [springValue, suffix, hasSpace]);

  return <span ref={ref}>{0}{hasSpace ? ' ' : ''}{suffix}</span>;
};

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-100 group text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4 text-gray-400 group-hover:text-[var(--color-accent)] group-hover:scale-110 transition-all">
                {stat.icon}
              </div>
              
              {/* Wrapped the value in our new component */}
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                <AnimatedCounter value={stat.value} />
              </h3>
              
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;