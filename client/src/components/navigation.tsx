import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/logo_1750096917228.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src={logoPath} 
              alt="Studio Nan" 
              className="h-32 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-charcoal hover:text-gold transition-colors duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-charcoal hover:text-gold transition-colors duration-300">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-charcoal hover:text-gold transition-colors duration-300">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-charcoal hover:text-gold transition-colors duration-300">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gold text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-gold"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-charcoal hover:text-gold transition-colors duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-charcoal hover:text-gold transition-colors duration-300">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-charcoal hover:text-gold transition-colors duration-300">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-charcoal hover:text-gold transition-colors duration-300">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 bg-gold text-white rounded-full mx-3 mt-2 text-center hover:bg-opacity-90 transition-all duration-300">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
