import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Within the first month, we got 3 new roofing jobs directly from the website. The AI receptionist has been a game-changer for after-hours calls.',
      author: 'Mark Thompson',
      business: 'Adelaide Northern Roofing',
      rating: 5
    },
    {
      text: 'I was skeptical about the price, but one $8,000 job paid for the entire year. Best business investment I\'ve made.',
      author: 'Sarah Chen',
      business: 'Precision Plumbing Adelaide',
      rating: 5
    },
    {
      text: 'Trade Leads Digital understood exactly what electricians need. Professional setup, no tech headaches on my end.',
      author: 'James Wilson',
      business: 'Wilson Electrical Services',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Trade Businesses Across Adelaide
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real Australian tradies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <Quote className="w-10 h-10 text-blue-200 mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.business}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto">
          Results may vary. Based on real client feedback from Adelaide trade businesses.
        </p>
      </div>
    </section>
  );
}
