import Contact from "./components/contact";
import FAQ from "./components/FAQ";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurProducts from "./components/OurProducts";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Services from "./components/Services";
import Stats from "./components/Stats";
import TrustedBy from "./components/TrustedBy";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-200 via-white to-gray-100 text-slate-900">
      <Navbar />
      <WhatsAppFloat />
      <Hero />
      <TrustedBy />
      <Services />
      <OurProducts />
      <Process />
      <Stats />
      <Pricing />
      <FindUs />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
