import { useEffect } from 'react';
import React from 'react'

function BeachPost() {
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
        Top Beaches to Visit: A Paradise Awaits
      </h1>
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
    </div>

    {/* Hero Image */}
    <div className="mb-12">
      <img
        src="https://cdn.pixabay.com/photo/2020/06/05/22/21/beach-5264739_1280.jpg"
        alt="Beautiful Beach"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      <p>
        The world is home to some of the most stunning beaches, where soft sand, clear waters, and vibrant marine life make for the perfect getaway. Here are some of the top beaches you should consider visiting for your next vacation.
      </p>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Beaches to Visit</h2>
      <ul className="list-disc ml-8 mt-2">
        <li className="mt-2">
          <strong>Grace Bay, Turks and Caicos:</strong> A pristine, powdery white sand beach with crystal-clear waters.
        </li>
        <li>
          <strong>Bondi Beach, Australia:</strong> Famous for surfing, it's a vibrant spot with lively atmosphere.
        </li>
        <li>
          <strong>Navagio Beach, Zakynthos, Greece:</strong> Known for its dramatic cliffs and shipwrecked boat.
        </li>
        <li>
          <strong>Whitehaven Beach, Australia:</strong> A stunning stretch of silica sand and turquoise waters.
        </li>
        <li>
          <strong>Mauna Kea Beach, Hawaii:</strong> A peaceful, secluded beach surrounded by lush greenery.
        </li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/03/20/54/bondi-beach-587813_640.jpg"
          alt="Bondi Beach"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Bondi Beach in Australia: A hub for beachgoers and surfers alike.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Things to Do at the Beach</h2>
      <p className="mt-2">
        Whether you're looking to relax, surf, or explore, these beaches offer something for everyone. Don’t miss:
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Snorkeling and scuba diving: Discover the vibrant underwater world.</li>
        <li>Beach volleyball: Many beaches have courts for fun and friendly matches.</li>
        <li>Surfing: Catch some waves at the best surf spots.</li>
        <li>Sunbathing and relaxing: Simply unwind and enjoy the sun and sea breeze.</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2022/04/04/16/06/seagulls-7111718_640.jpg"
          alt="Beach Relaxation"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Enjoy a day of relaxation on the beach, perfect for unwinding.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Visit</h2>
      <p className="mt-2">
        The ideal time to visit most beaches is during the dry season, typically from late spring to early autumn. Be sure to check the specific climate and peak seasons for each destination before booking your trip.
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
        style={{ fontFamily: "Philosopher, sans-serif" }}
      >
        Ready to Hit the Beach?
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Start planning your beach getaway today! Check out more travel guides for the best vacation spots.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default BeachPost
