import { useEffect } from 'react';
import React from 'react'

function AmericaPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-[#f9f9f9] dark:bg-[#1b1b1b] pt-20">
  <div className="max-w-4xl mx-auto px-4 py-12">
    <div className="flex items-center justify-center mb-8">
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 mr-4"></div>
      <h1
        style={{ fontFamily: "Philosopher, sans-serif" }}
        className="text-4xl font-bold text-dark dark:text-light mb-8 text-center"
      >
        Exploring America: A Land of Endless Adventures
      </h1>
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
    </div>

    {/* Hero Image */}
    <div className="mb-12">
      <img
        src="https://cdn.pixabay.com/photo/2023/04/14/08/34/grand-canyon-7924473_640.jpg"
        alt="Grand Canyon, USA"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      <p>
        America is a continent of contrasts, offering travelers everything from bustling cities to awe-inspiring natural wonders. Whether you're drawn to the vibrant streets of New York, the serene beauty of the Rockies, or the cultural charm of Latin America, there’s something for everyone. Here's your guide to experiencing the best of this incredible region.
      </p>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Destinations in America</h2>
      <ul className="list-disc ml-8 mt-2">
        <li>
          <strong>New York City, USA:</strong> The "Big Apple" is home to iconic landmarks like Times Square, Central Park, and Broadway theaters.
        </li>
        <li>
          <strong>Grand Canyon, USA:</strong> A natural wonder showcasing breathtaking vistas carved by the Colorado River.
        </li>
        <li>
          <strong>Rio de Janeiro, Brazil:</strong> Famous for its beaches, Christ the Redeemer statue, and vibrant Carnival festival.
        </li>
        <li>
          <strong>Patagonia, Argentina/Chile:</strong> A haven for outdoor enthusiasts with glaciers, mountain ranges, and diverse wildlife.
        </li>
        <li>
          <strong>Machu Picchu, Peru:</strong> A mystical Incan citadel nestled in the Andes mountains.
        </li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2015/07/30/19/52/machu-picchu-867803_640.jpg"
          alt="Machu Picchu, Peru"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Machu Picchu: A symbol of ancient Incan engineering and mystery.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Cultural Highlights</h2>
      <ul className="list-disc ml-8 mt-2">
        <li>Experience jazz and Creole culture in New Orleans, USA.</li>
        <li>Attend a traditional tango show in Buenos Aires, Argentina.</li>
        <li>Marvel at the Mayan ruins of Chichen Itza in Mexico.</li>
        <li>Savor authentic ceviche in Peru or barbecue in Texas.</li>
        <li>Visit the historic sites of Havana, Cuba, for a trip back in time.</li>
      </ul>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Visit</h2>
      <p>
        The best time to visit America depends on your destination. Fall (September-November) is ideal for the USA, while Latin American countries offer pleasant weather from May to October.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default AmericaPost
