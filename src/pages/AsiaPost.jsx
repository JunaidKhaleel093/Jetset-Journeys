import { useEffect } from 'react';
import React from 'react'

function AsiaPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
          <>
<div className="min-h-screen bg-[#f9f9f9] dark:bg-[#1b1b1b] pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 mr-4"></div>
          <h1
            style={{ fontFamily: "Philosopher, sans-serif" }}
            className="text-4xl font-bold text-dark dark:text-light mb-8 text-center"
          >
            Exploring Asia: A Continent of Wonders
          </h1>
          <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://cdn.pixabay.com/photo/2022/01/18/23/31/farm-6948514_640.jpg"
            alt="Asia Landscape"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <p>
            Asia, the largest continent in the world, is a land of diverse cultures, breathtaking landscapes, and rich history. From the majestic temples of Southeast Asia to the futuristic skylines of East Asia, there's something for every traveler to discover. Here's a guide to exploring some of the best destinations in Asia.
          </p>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Destinations in Asia</h2>
          <ul className="list-disc ml-8 mt-2">
            <li className="mt-2">
              <strong>Tokyo, Japan:</strong> A city blending ancient traditions with cutting-edge technology, featuring Shinto shrines, neon-lit streets, and world-class cuisine.
            </li>
            <li>
              <strong>Bali, Indonesia:</strong> Known as the "Island of Gods," Bali offers pristine beaches, lush rice terraces, and vibrant Hindu temples.
            </li>
            <li>
              <strong>Bangkok, Thailand:</strong> A bustling city with golden temples, floating markets, and street food that will tantalize your taste buds.
            </li>
            <li>
              <strong>Beijing, China:</strong> Discover the Forbidden City, walk along the Great Wall, and dive into China's rich imperial history.
            </li>
            <li>
              <strong>Kyoto, Japan:</strong> A serene destination known for its Zen gardens, tea ceremonies, and cherry blossoms in spring.
            </li>
          </ul>

          <div className="my-8">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/27/18/44/lanterns-2792988_640.jpg"
              alt="Kyoto, Japan"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              Kyoto, Japan: A tranquil blend of tradition and natural beauty.
            </p>
          </div>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Cultural Highlights</h2>
          <p className="mt-2">
            Asia is a melting pot of cultures, religions, and traditions. Here are some experiences you shouldn’t miss:
          </p>
          <ul className="list-disc ml-8 mt-2">
            <li>Participate in a traditional tea ceremony in Japan.</li>
            <li>Explore the Angkor Wat temples in Cambodia.</li>
            <li>Celebrate Holi, the festival of colors, in India.</li>
            <li>Admire the colorful lantern festivals of Taiwan.</li>
            <li>Take part in a meditation retreat in Thailand or Sri Lanka.</li>
          </ul>

          <div className="my-8">
            <img
              src="https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469_640.jpg"
              alt="Angkor Wat, Cambodia"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              Angkor Wat, Cambodia: One of the most awe-inspiring temples in the world.
            </p>
          </div>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Travel Tips for Asia</h2>
          <ul className="list-disc ml-8 mt-2">
            <li>Plan your trip based on the climate as Asia has diverse weather conditions.</li>
            <li>Learn a few basic phrases in the local language to connect with locals.</li>
            <li>Try street food but choose vendors with good hygiene practices.</li>
            <li>Respect local customs and dress modestly when visiting religious sites.</li>
            <li>Carry cash, as many places may not accept credit cards.</li>
          </ul>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Visit</h2>
          <p className="mt-2">
            The best time to explore Asia depends on your destination. Southeast Asia is ideal from November to February, while East Asia's cherry blossoms bloom in spring (March to May). For South Asia, visit between October and March to enjoy pleasant weather.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
          <h2
            className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
            style={{ fontFamily: "Philosopher, sans-serif" }}
          >
            Ready to Experience Asia's Wonders?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Start planning your Asian adventure today! Dive deeper into travel guides, tips, and destination highlights on this blog.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default AsiaPost
