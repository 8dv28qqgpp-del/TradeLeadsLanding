import { Calendar, Wrench, Rocket, TrendingUp } from 'lucide-react';

interface HowItWorksProps {
  onContactClick: () => void;
}

export default function HowItWorks({ onContactClick }: HowItWorksProps) {
  const steps = [
    {
      icon: Calendar,
      day: 'Day 0',
      title: 'Book Free Demo',
      description: 'See examples, discuss your business, get custom mockup',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wrench,
      day: 'Days 1-10',
      title: 'We Build Everything',
      description: 'Professional website, Google optimization, AI setup - all handled',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Rocket,
      day: 'Days 11-14',
      title: 'Review & Launch',
      description: 'You approve, we launch, customers start finding you',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      day: 'Day 15+',
      title: 'Leads Roll In',
      description: 'Sit back and watch the phone ring with qualified jobs',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Invisible to Unavoidable in 14 Days
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, proven process. No technical knowledge required on your end.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -ml-4"></div>
                )}
                <div className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-500 mb-2">{step.day}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-lg font-bold text-xl hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center group"
            >
              Get Your Free Demo Website
              <Calendar className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <p className="text-gray-500 mt-4">No credit card required. See your business online in 48 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
