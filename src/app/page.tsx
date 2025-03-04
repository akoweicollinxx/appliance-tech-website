import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  );
}
