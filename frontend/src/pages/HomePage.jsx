import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Journey from "../components/Journey";
import Testimonials from "../components/Testimonials";
import Insights from "../components/Insights";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#F7FBF8]">
      <Navbar />

      <Hero />

      <Services />

      <About />

      <Journey />

      <Testimonials />

      <Insights />

      <CTA />

      <Footer />
    </main>
  );
};

export default HomePage;