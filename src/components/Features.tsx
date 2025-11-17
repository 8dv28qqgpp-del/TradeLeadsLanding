import { Phone, MapPin, Smartphone, Calendar, DollarSign, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Phone,
      title: 'Never Miss a Call',
      description: 'AI receptionist answers 24/7, books appointments, handles emergencies',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Dominate Local Search',
      description: 'Show up first when customers search for tradies in your area',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: '90% of customers search on phones - your site looks perfect on every device',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Automatic Booking',
      description: 'Customers book appointments while you\'re on the job - no back and forth',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: DollarSign,
      title: 'Qualified Leads Only',
      description: 'AI asks the right questions so you only get serious inquiries',
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Analytics',
      description: 'See exactly how many leads your website generates every month',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built Specifically for Trade Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not another generic website builder. Purpose-built tools designed to get you more jobs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
