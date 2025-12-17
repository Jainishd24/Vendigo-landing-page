import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CriticalAreas from "./components/CriticalAreas";
import Process from "./components/Process";
import Documentation from "./components/Documentation";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      <Navbar />
      <Hero />
      <CriticalAreas />
      <Process />
      <Documentation />
      <CTA />
      <Footer />
    </div>
  );
}
