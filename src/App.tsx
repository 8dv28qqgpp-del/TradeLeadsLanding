import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Package from './components/Package';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={() => setIsContactFormOpen(true)} />
      <Hero onContactClick={() => setIsContactFormOpen(true)} />
      <Problem />
      <Package onContactClick={() => setIsContactFormOpen(true)} />
      <Features />
      <HowItWorks onContactClick={() => setIsContactFormOpen(true)} />
      <Testimonials />
      <Pricing onContactClick={() => setIsContactFormOpen(true)} />
      <FAQ />
      <FinalCTA onContactClick={() => setIsContactFormOpen(true)} />
      <Footer />
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </div>
  );
}

export default App;
