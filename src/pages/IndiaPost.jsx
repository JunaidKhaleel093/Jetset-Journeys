import React from 'react'
import { useEffect } from 'react';

function IndiaPost() {
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
        Discover India: A Tapestry of Cultures and Heritage
      </h1>
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
    </div>

    {/* Hero Image */}
    <div className="mb-12">
      <img
        src="https://cdn.pixabay.com/photo/2019/12/28/14/29/tajmahal-4724799_640.jpg"
        alt="Taj Mahal, India"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      <p>
        India, a land of vibrant traditions, ancient history, and natural beauty, offers an unparalleled travel experience. From the snow-capped Himalayas to the sun-kissed beaches of Goa, every corner of India has a story to tell. Here’s a guide to exploring the wonders of this diverse country.
      </p>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Destinations in India</h2>
      <ul className="list-disc ml-8 mt-2">
        <li className="mt-2">
          <strong>Agra:</strong> Home to the iconic Taj Mahal, one of the Seven Wonders of the World, and a symbol of eternal love.
        </li>
        <li>
          <strong>Jaipur, Rajasthan:</strong> Known as the "Pink City," it boasts magnificent forts, palaces, and vibrant bazaars.
        </li>
        <li>
          <strong>Kerala:</strong> The "God’s Own Country" offers serene backwaters, lush greenery, and Ayurvedic wellness retreats.
        </li>
        <li>
          <strong>Varanasi:</strong> One of the oldest cities in the world, it is the spiritual capital of India, renowned for its ghats and temples.
        </li>
        <li>
          <strong>Leh-Ladakh:</strong> A paradise for adventure enthusiasts, featuring stunning landscapes, monasteries, and high-altitude treks.
        </li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2022/01/28/08/13/hawa-mahal-6973938_640.jpg"
          alt="Hawa Mahal, Jaipur"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Hawa Mahal, Jaipur: A stunning blend of art and architecture.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Cultural Highlights</h2>
      <p className="mt-2">
        India is a land where traditions, festivals, and art thrive. These are some must-have cultural experiences:
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Witness the grandeur of Diwali, the festival of lights.</li>
        <li>Explore the intricate carvings of Khajuraho temples.</li>
        <li>Attend a classical dance performance, such as Kathak or Bharatanatyam.</li>
        <li>Ride a houseboat in Kerala's tranquil backwaters.</li>
        <li>Indulge in a traditional Rajasthani thali for a culinary delight.</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/26/16/05/trees-2789096_640.jpg"
          alt="Kerala Backwaters"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Kerala Backwaters: A serene escape into nature.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Travel Tips for India</h2>
      <ul className="list-disc ml-8 mt-2">
        <li>Respect local traditions and dress modestly, especially in religious places.</li>
        <li>Stay hydrated and carry medicines for common ailments.</li>
        <li>Opt for bottled water and eat from hygienic places.</li>
        <li>Explore beyond major cities to discover India's true essence.</li>
        <li>Plan visits during festivals to experience the vibrant culture.</li>
      </ul>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Visit</h2>
      <p className="mt-2">
        India’s vast geography means the best time to visit varies by region. October to March is ideal for most destinations, offering pleasant weather across the country. The monsoon season (June to September) transforms Kerala and Western Ghats into a lush paradise, perfect for nature lovers.
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
        style={{ fontFamily: "Philosopher, sans-serif" }}
      >
        Ready to Experience India's Vibrancy?
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Begin your journey through India’s rich tapestry of culture and history. Discover more travel guides and tips on this blog!
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default IndiaPost
