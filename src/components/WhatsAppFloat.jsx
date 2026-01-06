import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  
  const phoneNumber = "13472573951"; 
  const message = "Hello Skyland! I'm interested in your services."; 

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppFloat;