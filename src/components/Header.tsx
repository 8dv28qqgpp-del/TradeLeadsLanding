import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TL</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Trade Leads Digital</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Australian Trade Business Experts</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-800 transition">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-blue-800 transition">
              How It Works
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-800 transition">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-800 transition">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-800 transition">
              FAQ
            </button>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <a href="tel:+61400000000" className="flex items-center hover:text-blue-800 transition">
                <Phone className="w-4 h-4 mr-1" />
                <span className="hidden xl:inline">1300 XXX XXX</span>
              </a>
            </div>
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Get Free Demo
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-700 hover:text-blue-800 py-2">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-700 hover:text-blue-800 py-2">
                How It Works
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 hover:text-blue-800 py-2">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 hover:text-blue-800 py-2">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-blue-800 py-2">
                FAQ
              </button>
              <a href="tel:+61400000000" className="flex items-center text-gray-700 hover:text-blue-800 py-2">
                <Phone className="w-4 h-4 mr-2" />
                1300 XXX XXX
              </a>
              <button
                onClick={onContactClick}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-center"
              >
                Get Free Demo
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
