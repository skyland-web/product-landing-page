import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function FindUs() {
  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: "Call Us",
      content: "+1 (929) 769-2349",
      link: "tel:+13478151556",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: <Mail size={28} />,
      title: "Send an E-mail",
      content: "info@skylandweb.com",
      link: "mailto:info@skylandweb.com",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <MapPin size={28} />,
      title: "Office Address",
      content: "9717 105TH ST 2ND FLR, OZONE PARK NY, 11416",
      link: "https://maps.google.com/?q=9717+105TH+ST+2ND+FLR+OZONE+PARK+NY+11416",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden" id="contact">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 tracking-tight"
          >
            Let's Start a Conversation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-600 text-lg"
          >
            Ready to start your project? We are here to help.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.title === "Office Address" ? "_blank" : "_self"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon Bubble */}
              <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                {item.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed max-w-[250px]">
                {item.content}
              </p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}