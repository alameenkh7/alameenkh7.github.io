
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-rearway-navy/95 backdrop-blur-md py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">Rearway</span>
          <span className="text-lg font-medium">Technologies</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <Link to="/case-studies" className="nav-link">
            Case Studies
          </Link>
          <Link to="/ai-solutions" className="nav-link">
            AI Solutions
          </Link>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-rearway-navy shadow-lg">
          <div className="container mx-auto py-6 flex flex-col gap-4">
            <a
              href="#services"
              className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <Link
              to="/case-studies"
              className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              to="/ai-solutions"
              className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Solutions
            </Link>
            <a
              href="#contact"
              className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
