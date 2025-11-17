import { ArrowRight, CheckCircle2, Phone, Globe, Zap } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>Setup in 2 Weeks, Leads for Life</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get More Jobs.<br />
              Never Miss a Call.<br />
              <span className="text-blue-800">Dominate Your Local Market.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete digital presence + AI phone system for Australian trade businesses. Setup in 2 weeks, leads for life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={onContactClick}
                className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center"
              >
                Get Your Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToFeatures}
                className="bg-white text-blue-800 border-2 border-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center"
              >
                See How It Works
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">15+</div>
                <div className="text-sm text-gray-600">Trade Businesses Launched</div>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <div className="text-2xl font-bold text-blue-800">100%</div>
                <div className="text-sm text-gray-600">Aussie Owned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">2-Week</div>
                <div className="text-sm text-gray-600">Setup Guarantee</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                24/7 Available
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-800 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">AI Receptionist</div>
                    <div className="text-sm text-gray-600">Never miss an emergency call again</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-800 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Google Domination</div>
                    <div className="text-sm text-gray-600">Show up first in local searches</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-blue-800 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Premium Website</div>
                    <div className="text-sm text-gray-600">Mobile-first, fast, professional</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">Trusted by tradies across Adelaide</div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-orange-200 rounded-2xl transform -rotate-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
