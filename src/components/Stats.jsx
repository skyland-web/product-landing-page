import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Clock, Zap } from "lucide-react";

const stats = [
  { label: "Products Shipped", value: "120+", icon: <Trophy className="w-5 h-5" /> },
  { label: "Happy Clients", value: "98%", icon: <Users className="w-5 h-5" /> },
  { label: "Avg Turnaround", value: "4 Days", icon: <Clock className="w-5 h-5" /> },
  { label: "Performance Score", value: "100", icon: <Zap className="w-5 h-5" /> },
];

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
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;