import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Import your images (Keep your existing imports)
import vaImage from '../assets/va.png';
import convertImage from '../assets/convert.png';
import marriageImage from '../assets/marriage.png';
import workplaceImage from '../assets/workplace.png';

const products = [
  {
    title: "Virtual Agent Platform",
    description: "AI-powered virtual assistant solution for automation, task handling, and business support.",
    image: vaImage,
    link: "https://va.skylandweb.com",
  },
  {
    title: "Muslim Marriage Platform",
    description: "A modern matrimonial website for Muslim singles with profile matching & verification.",
    image: marriageImage,
    link: "https://matrimonial.skylandweb.com/",
  },
  {
    title: "PDF to Word Converter",
    description: "Fast and accurate document conversion tool supporting PDF, DOCX, and more.",
    image: convertImage,
    link: "https://convert.skylandweb.com/",
  },
  {
    title: "Workplace Timer",
    description: "Simple time tracking tool for productivity and session management.",
    image: workplaceImage,
    link: "https://workplace-timer.skylandweb.com",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delays each child by 0.2s
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 10 } 
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.4 } },
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 5, transition: { type: "spring", stiffness: 300 } },
};

export default function OurProducts() {
  const [showAll, setShowAll] = useState(false);

  // Determine which items to show based on state
  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="container mx-auto px-6 py-20 overflow-hidden">
      {/* Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Our Products
        </h2>
        <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          Explore our productized solutions designed to empower teams, automate workflows,
          and deliver high-quality digital experiences.
        </p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="mt-12 grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <AnimatePresence mode="popLayout">
          {visibleProducts.map((item, index) => (
            <motion.div
              key={item.title} // Use unique ID/Title instead of index for better animation
              layout // This prop makes the grid reshuffle smoothly
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover="hover" // Triggers children variants (image & arrow)
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col h-full group"
            >
              {/* Image Container */}
              <div className="h-40 overflow-hidden relative">
                <motion.img
                  variants={imageVariants}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Optional Overlay on Hover */}
                <motion.div 
                   className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2 flex-grow">
                  {item.description}
                </p>

                <motion.a
                  href={item.link}
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-2 text-accent font-medium"
                >
                  View Product 
                  <motion.span variants={arrowVariants}>
                    <FiArrowRight />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View More Button */}
      {!showAll && products.length > 3 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <motion.button
            onClick={() => setShowAll(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-accent text-white rounded-lg font-medium shadow hover:shadow-accent/40 transition-shadow cursor-pointer"
          >
            View More
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}