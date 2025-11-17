import { CheckCircle2, ArrowRight } from 'lucide-react';

interface PackageProps {
  onContactClick: () => void;
}

export default function Package({ onContactClick }: PackageProps) {
  const features = [
    'Professional Website (Mobile-First Design)',
    'Google Maps & Apple Maps Optimization',
    'AI Phone Receptionist (Answers Calls 24/7)',
    'Automatic Appointment Booking',
    'Lead Qualification System',
    'Service Area SEO (Rank for "[Your Suburb] + [Trade]")',
    'Before/After Photo Gallery',
    'Review Management & Monitoring',
    'Monthly Updates & Support'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Complete Digital Presence Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to capture leads 24/7 — nothing you don't
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Package Includes:</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-sm font-semibold text-blue-200 mb-2">INVESTMENT</div>
                <div className="text-5xl font-bold mb-2">$3,500</div>
                <div className="text-xl text-blue-200 mb-6">setup (one-time)</div>

                <div className="border-t border-blue-400 pt-6 mb-6">
                  <div className="text-4xl font-bold mb-2">$200</div>
                  <div className="text-xl text-blue-200">per month</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <div className="text-sm text-blue-200 mb-1">RETURN ON INVESTMENT</div>
                  <div className="text-2xl font-bold">One extra job pays for itself</div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={onContactClick}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center group"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onContactClick}
                    className="w-full bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all"
                  >
                    View Sample Websites
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-700">24/7</div>
                <div className="text-sm text-gray-600">Always Available</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-700">2 Weeks</div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
