import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: '2 weeks from deposit to launch. We handle everything - website design, content writing, Google optimization, and AI receptionist setup. You just review and approve before we go live.'
    },
    {
      question: 'What if I already have a website?',
      answer: 'We can upgrade your existing site or build a new one from scratch. Often starting fresh gives better results, but we\'ll assess your current setup and recommend the best approach for your business.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel the monthly service with 30 days notice. The setup fee is one-time and non-refundable. Most clients see ROI within the first month and stay with us long-term.'
    },
    {
      question: 'Do you work with trades outside Adelaide?',
      answer: 'Yes! We started in Adelaide but are expanding nationally. We work with plumbers, electricians, roofers, HVAC techs, landscapers, and other trade businesses across Australia.'
    },
    {
      question: 'What happens if I get too many leads?',
      answer: 'That\'s a great problem to have! You can adjust your availability settings, raise your prices, or we can help you implement a booking waitlist. You\'re always in control of your capacity.'
    },
    {
      question: 'Is the AI receptionist really good?',
      answer: 'Yes! We train it specifically for your business with your services, pricing, and availability. It handles common questions, books appointments, and escalates emergencies. Customers often don\'t realize they\'re talking to AI.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-800 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
