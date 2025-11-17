import { PhoneOff, SearchX, FolderX } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: PhoneOff,
      title: 'Missing Emergency Calls',
      description: 'Customers call at 9PM, you\'re busy, they call the next roofer. Every missed call is money in a competitor\'s pocket.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: SearchX,
      title: 'Invisible on Google',
      description: '"Plumber near me" brings up everyone except you. Your competitors are capturing jobs while you\'re completely invisible.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FolderX,
      title: 'Outdated Web Presence',
      description: 'Your 2010 website (or no website) screams unprofessional. Customers judge your work quality by your online presence.',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Every Day You're Invisible Online,<br />
            <span className="text-amber-400">You're Losing Jobs to Competitors</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The harsh reality: While you're working hard on the job, potential customers are finding and hiring your competitors online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all transform hover:-translate-y-2 hover:shadow-2xl">
              <div className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-lg flex items-center justify-center mb-6`}>
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-gray-300 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-xl">
            We fix all three problems in one complete package
          </div>
        </div>
      </div>
    </section>
  );
}
