import Contact from "./components/contact"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OurProducts from "./components/OurProducts"
import Pricing from "./components/Pricing"
import Process from "./components/Process"
import Stats from "./components/Stats"
import TrustedBy from "./components/TrustedBy"

function App() {

  return (
<div className="min-h-screen bg-linear-to-b from-slate-200 via-white to-gray-100 text-slate-900">
<Navbar/>
<Hero/>
<TrustedBy/>
<OurProducts/>
<Process/>
<Stats/>
<Pricing/>
<Contact/>
<FAQ/>
<Footer/>
</div>  )
}

export default App
