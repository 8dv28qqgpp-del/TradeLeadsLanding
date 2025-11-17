import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react';

interface FinalCTAProps {
  onContactClick: () => void;
}

export default function FinalCTA({ onContactClick }: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Stop Losing Jobs to Competitors?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Get your free demo website and see what you're missing
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto mb-12">
            <div className="text-gray-900 text-left">
              <h3 className="text-2xl font-bold mb-6 text-center">What happens next?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-800 font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Fill out the quick form</div>
                    <div className="text-sm text-gray-600">Takes less than 2 minutes</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-800 font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">We call you within 24 hours</div>
                    <div className="text-sm text-gray-600">Discuss your business and goals</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-800 font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Get your custom demo</div>
                    <div className="text-sm text-gray-600">See exactly what your business could look like online</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onContactClick}
            className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-5 rounded-lg font-bold text-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all inline-flex items-center mb-8"
          >
            Get My Free Demo
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>2-Week Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>100% Australian</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
