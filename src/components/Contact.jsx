import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send,
  Loader2,
  CheckCircle,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sourceUrl, setSourceUrl] = useState("");
  const form = useRef();


  // Make sure these exist in your .env file
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC;

  useEffect(() => {
    // Optional: Log warning if keys are missing (helps debugging)
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn("EmailJS environment variables are missing! Check your .env file.");
    }

    if (typeof window !== "undefined") {
      setSourceUrl(window.location.href);
    }
  }, [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      setSuccess(true);
      e.target.reset();

      // Restore hidden source_url if needed
      setTimeout(() => {
        const input = document.querySelector('input[name="source_url"]');
        if (input) input.value = window.location.href;
      }, 50);

      // Auto-hide success message after 8s
      setTimeout(() => setSuccess(false), 8000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="relative py-4 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Get in touch
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-xl mx-auto">
            Have a project in mind or want to discuss a partnership?
            Send us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            
            {/* Hidden source_url field */}
            <input type="hidden" name="source_url" value={sourceUrl} />

            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-400">
                    <User className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    name="name" // Matches {{name}} in your EmailJS template
                    required
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none"
                  />
                </div>
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-400">
                    <Mail className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    name="email" // Matches {{email}} in your EmailJS template
                    required
                    placeholder="john@example.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none"
                  />
                </div>
              </motion.div>
            </div>

            {/* Message Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-slate-400">
                  <MessageSquare className="w-5 h-5" />
                </span>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none resize-none"
                ></textarea>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 active:scale-[0.98] transition-all flex justify-center items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin text-xl" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </motion.div>
          </form>

          {/* Success Message Banner */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="bg-green-50 border border-green-100 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3"
              >
                <CheckCircle className="text-xl flex-shrink-0" />
                <div>
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm text-green-600">
                    We'll get back to you shortly.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}