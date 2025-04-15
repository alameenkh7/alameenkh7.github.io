import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Testimonials from "../components/sections/Testimonials";
import ScrollToTop from "../components/ui/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, no need to observe any more
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with reveal-animation class
    document.querySelectorAll('.reveal-animation').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal-animation').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
