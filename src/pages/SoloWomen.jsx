import React from 'react'
import { useEffect } from 'react';

function SoloWomen() {
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
            Solo Travel for Women: Empowering Adventures
          </h1>
          <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://cdn.pixabay.com/photo/2019/04/06/03/21/beach-4106586_640.jpg"
            alt="Solo Travel for Women"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <p>
            Solo travel is an enriching and empowering experience, especially for women. It offers the opportunity to explore the world on your own terms, gain confidence, and discover new perspectives. Here’s a guide to help you embark on safe and unforgettable solo journeys.
          </p>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Destinations for Solo Female Travelers</h2>
          <ul className="list-disc ml-8 mt-2">
            <li className='mt-2'>
              <strong>Kyoto, Japan:</strong> Known for its serene temples, safe streets, and rich culture, Kyoto is a fantastic destination for solo travelers seeking tranquility and tradition.
            </li>
            <li>
              <strong>Reykjavik, Iceland:</strong> Explore stunning landscapes, geothermal spas, and a vibrant city that is consistently ranked as one of the safest in the world.
            </li>
            <li>
              <strong>Lisbon, Portugal:</strong> With its friendly locals, picturesque neighborhoods, and delicious cuisine, Lisbon is perfect for solo adventures.
            </li>
            <li>
              <strong>New Zealand:</strong> Whether you're trekking in Fiordland or exploring vibrant cities like Wellington, New Zealand offers breathtaking nature and a safe environment.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Safety Tips</h2>
          <ul className="list-disc ml-8 mt-2">
            <li>Share your itinerary with a trusted friend or family member.</li>
            <li>Research local customs and laws to blend in and avoid conflicts.</li>
            <li>Stay in well-reviewed accommodations that prioritize safety.</li>
            <li>Trust your instincts and avoid situations that make you uncomfortable.</li>
            <li>Keep copies of important documents, like your passport, both digitally and physically.</li>
          </ul>

          <div className="my-8">
            <img
              src="https://cdn.pixabay.com/photo/2023/06/07/16/18/vietnam-8047523_640.jpg"
              alt="Backpacking Solo"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              Embrace the freedom and adventure of traveling solo.
            </p>
          </div>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Packing Tips</h2>
          <ul className="list-disc ml-8 mt-2">
            <li>Carry a lightweight and secure anti-theft backpack.</li>
            <li>Pack versatile clothing suitable for different climates.</li>
            <li>Include a personal safety alarm or pepper spray for emergencies.</li>
            <li>Carry a compact first-aid kit and necessary medications.</li>
            <li>Don't forget power banks and universal travel adapters.</li>
          </ul>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Empowering Insights</h2>
          <p className="mt-2">
            Traveling solo as a woman is not just about exploring new places—it's about discovering your inner strength and independence. Each step you take builds confidence, and every encounter enriches your life. Remember, the world is full of beauty and kindness waiting to be explored.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
          <h2
            className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
            style={{ fontFamily: "Philosopher, sans-serif" }}
          >
            Ready to Start Your Solo Journey?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Explore more solo travel tips and guides to make your journey unforgettable. Share your thoughts or questions with us!
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SoloWomen
