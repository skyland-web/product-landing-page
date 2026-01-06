import React from "react";
import { Mail, Phone, ArrowUpRight, Heart, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const ecosystemLinks = {
    tools: [
      { name: "Virtual Agent", href: "https://va.skylandweb.com" },
      { name: "Matrimonial", href: "https://matrimonial.skylandweb.com" },
      { name: "PDF Converter", href: "https://convert.skylandweb.com" },
      {
        name: "Workplace Timer",
        href: "https://workplace-timer.skylandweb.com",
      },
    ],
    solutions: [
      { name: "Product Studio", href: "https://products.skylandweb.com" },
      { name: "Leads Platform", href: "https://leads.skylandweb.com" },
      { name: "Outreach Tools", href: "https://outreach.skylandweb.com" },
      { name: "Software Solutions", href: "https://software.skylandweb.com" },
    ],
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-12 pb-6 overflow-hidden font-sans">
      {/* Decorative Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 & 2: Mother Company Identity */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                {/* Optional: Add your Logo here */}
                <Globe size={24} className="text-blue-500" />
                <h2 className="text-2xl font-bold tracking-tight">
                  Skyland Web LLC
                </h2>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                The parent company behind your favorite digital growth tools. We
                build the ecosystem that helps businesses scale, automate, and
                succeed.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:info@skylandweb.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group w-fit"
              >
                <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">
                  info@skylandweb.com
                </span>
              </a>
              <div className="flex items-center gap-3 text-slate-400 w-fit">
                <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <span>+1 (347) 815-1556</span>
              </div>
            </div>
          </div>

          {/* Column 3: Utility Tools */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-b border-slate-800 pb-2 inline-block">
              Our Products
            </h3>
            <ul className="space-y-3">
              {ecosystemLinks.tools.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Main Solutions (The 4 Websites) */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-b border-slate-800 pb-2 inline-block">
              Our Solutions
            </h3>
            <ul className="space-y-3">
              {ecosystemLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-blue-500"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Skyland Web LLC. All rights reserved.</p>

          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart
              size={12}
              className="text-red-500 fill-red-500 animate-pulse"
            />
            <span>by Skyland Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
