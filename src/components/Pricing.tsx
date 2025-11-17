import { CheckCircle2, CreditCard, ArrowRight } from 'lucide-react';

interface PricingProps {
  onContactClick: () => void;
}

export default function Pricing({ onContactClick }: PricingProps) {
  const setupFeatures = [
    'Professional website',
    'Google Business Profile optimization',
    'AI phone receptionist setup',
    'Custom copywriting',
    'Before/after gallery',
    'All technical setup'
  ];

  const monthlyFeatures = [
    'Website hosting & security',
    'AI receptionist service (24/7)',
    'Monthly Google posts',
    'Review monitoring',
    'Unlimited updates',
    'Priority support'
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing. No Hidden Fees.
          </h2>
          <p className="text-xl text-gray-600">
            Simple, straightforward pricing designed for trade businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-4 font-bold text-lg">
              Complete Digital Presence Package
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-amber-400 font-bold text-sm mb-2">SETUP (ONE-TIME)</div>
                  <div className="text-5xl font-bold text-white mb-6">$3,500</div>
                  <div className="space-y-3">
                    {setupFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-amber-400 font-bold text-sm mb-2">ONGOING (MONTHLY)</div>
                  <div className="text-5xl font-bold text-white mb-6">$200</div>
                  <div className="space-y-3">
                    {monthlyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 mb-8 text-center">
                <div className="text-white font-bold text-lg mb-2">Return on Investment</div>
                <div className="text-white text-3xl font-bold">One extra job pays for itself</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onContactClick}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onContactClick}
                  className="flex-1 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                >
                  Request Custom Quote
                </button>
              </div>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-4 text-white/80 text-sm">
                  <span className="flex items-center">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Bank Transfer & Card Accepted
                  </span>
                  <span>•</span>
                  <span>Payment Plans Available</span>
                </div>
                <p className="text-white/60 text-sm mt-2">Australian businesses only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
