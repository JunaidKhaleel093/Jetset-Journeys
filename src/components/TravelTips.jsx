import { FiCompass, FiCamera, FiDollarSign, FiHome } from 'react-icons/fi';

const tips = [
  {
    icon: <FiCompass size={24} />,
    title: "Plan Smart",
    description: "Research local customs, weather patterns, and peak seasons to make the most of your journey."
  },
  {
    icon: <FiCamera size={24} />,
    title: "Capture Moments",
    description: "Document your adventures but don't forget to live in the moment and experience the culture."
  },
  {
    icon: <FiDollarSign size={24} />,
    title: "Budget Wisely",
    description: "Track expenses, look for deals, and always have a financial buffer for unexpected situations."
  },
  {
    icon: <FiHome size={24} />,
    title: "Stay Local",
    description: "Choose accommodations that immerse you in the local community for authentic experiences."
  }
];

export default function TravelTips() {
  return (
    <section className="py-16 bg-[#acacac]">
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-center mb-8">
      <div className="flex-grow h-[1px] bg-black mr-4 mb-10"></div>
        <h2 style={{ fontFamily: 'Philosopher , sans-serif' }}  className="text-3xl font-bold text-dark mb-12 text-center">Essential Travel Tips</h2>
   <div className="flex-grow h-[1px] bg-black ml-4 mb-10"></div>
   </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-[#d3d3d3] hover:bg-gray-100 transition duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
                {tip.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}