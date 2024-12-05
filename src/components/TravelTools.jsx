import { FiCalendar, FiMap, FiList, FiSun } from 'react-icons/fi';

const tools = [
  {
    id: 1,
    icon: <FiCalendar size={32} />,
    title: "Trip Planner",
    description: "Plan your perfect itinerary with our day-by-day trip planner",
  },
  {
    id: 2,
    icon: <FiMap size={32} />,
    title: "Interactive Maps",
    description: "Explore destinations with our detailed interactive maps",
  },
  {
    id: 3,
    icon: <FiList size={32} />,
    title: "Packing Lists",
    description: "Never forget essential items with our smart packing lists",
  },
  {
    id: 4,
    icon: <FiSun size={32} />,
    title: "Weather Guide",
    description: "Check the weather forecast for your destination",
  }
];

export default function TravelTools() {
  return (
    <section className="py-16 bg-[#acacac] text-white">
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-center mb-8">
      <div className="flex-grow h-[1px] bg-black mr-4 mb-10"></div>
        <h2 style={{ fontFamily: 'Philosopher , sans-serif' }}  className="text-3xl font-bold mb-12 text-center text-black/80">Travel Planning Tools</h2>
        <div className="flex-grow h-[1px] bg-black ml-4 mb-10"></div>
   </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map(tool => (
            <div key={tool.id} className="rounded-lg p-6 text-center bg-[#d3d3d3] hover:bg-gray-100 transition duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black/70">{tool.title}</h3>
              <p className="text-black/55 mb-4">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}