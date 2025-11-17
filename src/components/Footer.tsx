import { Phone, Mail, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Trade Leads Digital</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Complete Digital Presence for Australian Tradies. We help trade businesses dominate their local market with professional websites, Google optimization, and AI phone systems.
            </p>
            <div className="space-y-3">
              <a href="tel:+61400000000" className="flex items-center text-gray-300 hover:text-white transition group">
                <Phone className="w-5 h-5 mr-3 text-blue-400 group-hover:text-blue-300" />
                1300 XXX XXX
              </a>
              <a href="mailto:contact@tradeleadsdigital.com.au" className="flex items-center text-gray-300 hover:text-white transition group">
                <Mail className="w-5 h-5 mr-3 text-blue-400 group-hover:text-blue-300" />
                contact@tradeleadsdigital.com.au
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Trade Leads Digital. Australian Business ABN XX XXX XXX XXX
            </p>
            <p className="text-gray-500 text-sm">
              Made with care in Adelaide, South Australia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
