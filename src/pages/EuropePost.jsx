import React from 'react'
import { useEffect } from 'react';

function EuropePost() {
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
            style={{ fontFamily: "Philosopher , sans-serif" }}
            className="text-4xl font-bold text-dark dark:text-light mb-8 text-center"
          >
            The Ultimate Guide to Backpacking Europe
          </h1>
          <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/17/23/00/europe-1264062_640.jpg"
            alt="Backpacking Europe"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <p>
            Europe is a dream destination for many travelers, offering a
            blend of history, culture, architecture, and natural beauty. From
            bustling cities to picturesque villages, Europe is full of
            unforgettable experiences.
          </p>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Destinations</h2>
          <ul className="list-disc ml-8">
            <li className='mt-2'>
              <strong>Paris, France:</strong> The City of Light is perfect for
              romantic getaways and art enthusiasts. Don't miss the Eiffel
              Tower, the Louvre, and a stroll along the Seine.
            </li>
            <li>
              <strong>Rome, Italy:</strong> Explore ancient landmarks like the
              Colosseum, Roman Forum, and Vatican City. Indulge in authentic
              Italian pasta and gelato.
            </li>
            <li>
              <strong>Barcelona, Spain:</strong> Admire Gaudí's stunning
              architecture, relax on sunny beaches, and enjoy vibrant nightlife.
            </li>
          </ul>

          <div className="my-8">
            <img
              src="https://cdn.pixabay.com/photo/2019/02/21/18/36/city-4011922_640.jpg"
              alt="Rome"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              The historic Colosseum in Rome, Italy.
            </p>
          </div>

          <h2 className="text-2xl font-semibold dark:text-light">Packing Essentials</h2>
          <p className="mt-2">
            Packing smart is essential for a successful European adventure.
            Here's a checklist to get you started:
          </p>
          <ul className="list-disc ml-8 mt-2">
            <li>Comfortable walking shoes</li>
            <li>A compact backpack or suitcase</li>
            <li>Travel-sized toiletries</li>
            <li>Universal power adapter</li>
            <li>Layered clothing for varying climates</li>
            <li>Reusable water bottle</li>
          </ul>

          <div className="my-8">
            <img
              src="https://cdn.pixabay.com/photo/2020/09/06/17/52/island-5549660_640.jpg"
              alt="Packing for travel"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              Travel light and stay organized for your European journey.
            </p>
          </div>

          <h2 className="text-2xl font-semibold dark:text-light">Travel Tips</h2>
          <ul className="list-disc ml-8 mt-2">
            <li>
              Plan your route: Use a mix of trains, budget airlines, and buses
              to save time and money.
            </li>
            <li>
              Stay in hostels: Great for meeting other travelers and saving on
              accommodation.
            </li>
            <li>
              Learn basic phrases: A little effort to speak the local language
              goes a long way.
            </li>
            <li>
              Book in advance: Secure tickets for popular attractions to avoid
              long lines.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Sustainable Travel</h2>
          <p className='mt-2'>
            Be mindful of your impact while exploring Europe. Choose
            eco-friendly accommodations, reduce plastic usage, and support
            local businesses. Sustainable travel helps preserve the beauty of
            these destinations for future generations.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
          <h2
            className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
            style={{ fontFamily: "Philosopher , sans-serif" }}
          >
            Ready to Start Your European Adventure?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Share your thoughts, ask questions, or start planning your trip by
            exploring more guides on this blog!
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default EuropePost
