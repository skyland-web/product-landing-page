import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Building2, Code2, ArrowRight } from 'lucide-react';

export default function Services() {
  
  const services = [
    {
      id: 1,
      title: "E-Commerce",
      description: "We build high-converting online stores. From headless Shopify setups to custom MERN stack marketplaces with secure payment gateways and inventory management.",
      icon: <ShoppingBag size={32} />,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "hover:border-pink-500/50"
    },
    {
      id: 2,
      title: "Real Estate",
      description: "Complete property solutions. We develop listing platforms with advanced search filters, virtual tour integrations, and CRM tools for agents and agencies.",
      icon: <Building2 size={32} />,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/50"
    },
    {
      id: 3,
      title: "Custom Solutions",
      description: "Have a unique idea? We engineer tailored software solutions, SaaS platforms, and mobile apps designed specifically for your business logic and goals.",
      icon: <Code2 size={32} />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/50"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 font-semibold tracking-wider uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl font-bold text-white"
          >
            Industries We Transform
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-lg"
          >
            Specialized technical solutions designed to scale your business in competitive markets.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`group relative p-8 rounded-3xl bg-slate-800/50 border border-slate-700 transition-all duration-300 hover:-translate-y-2 ${service.border}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.bg} ${service.color}`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link / Action */}
              <div className="flex items-center gap-2 text-white font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span>Learn more</span>
                <ArrowRight size={16} className={service.color} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}