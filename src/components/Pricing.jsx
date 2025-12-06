import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "499",
    desc: "Perfect for MVPs and simple landing pages.",
    features: ["1 Landing Page", "React + Tailwind Code", "Mobile Responsive", "2 Revisions"],
    highlight: false
  },
  {
    name: "Growth",
    price: "999",
    desc: "For businesses scaling their digital presence.",
    features: ["3 Page Site", "CMS Integration", "SEO Optimization", "Basic Animations", "Priority Support"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "2499",
    desc: "Full-scale custom platform development.",
    features: ["Custom Web App", "Database Design", "Auth & Payments", "Advanced Animations", "24/7 Support"],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-500">No hidden fees. 100% code ownership.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl border flex flex-col ${
                plan.highlight 
                  ? "border-[var(--color-accent)] bg-white shadow-2xl shadow-purple-200 z-10 scale-105" 
                  : "border-gray-200 bg-gray-50/50"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-bold tracking-tight">${plan.price}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{plan.desc}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className={`p-1 rounded-full ${plan.highlight ? 'bg-purple-100 text-purple-600' : 'bg-gray-200 text-gray-600'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.highlight 
                  ? "bg-[var(--color-accent)] text-white hover:opacity-90 shadow-lg shadow-purple-500/30" 
                  : "bg-white border border-gray-200 text-gray-900 hover:border-gray-300"
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;