import { useEffect } from 'react';
import React from 'react'

function BangkokPost() {
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
            Exploring Bangkok: The City of Angels
          </h1>
          <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://cdn.pixabay.com/photo/2020/02/20/13/25/city-4864747_640.jpg"
            alt="Bangkok Skyline"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <p>
            Bangkok, the bustling capital of Thailand, is a city of contrasts where ancient traditions meet modern innovations. Known for its glittering temples, vibrant street markets, and electrifying nightlife, Bangkok promises an unforgettable experience.
          </p>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Attractions</h2>
          <ul className="list-disc ml-8 mt-2">
            <li className="mt-2">
              <strong>Grand Palace:</strong> A dazzling complex of royal buildings, including the iconic Wat Phra Kaew (Temple of the Emerald Buddha).
            </li>
            <li>
              <strong>Wat Arun:</strong> The Temple of Dawn offers stunning views, especially at sunrise or sunset.
            </li>
            <li>
              <strong>Chatuchak Market:</strong> One of the largest weekend markets in the world, perfect for shopping and sampling local street food.
            </li>
            <li>
              <strong>Chao Phraya River:</strong> Enjoy a boat ride and see Bangkok's iconic landmarks from the water.
            </li>
            <li>
              <strong>Khao San Road:</strong> A backpacker haven filled with bars, shops, and vibrant energy.
            </li>
          </ul>

          <div className="my-8">
            <img
              src="https://cdn.pixabay.com/photo/2023/01/06/13/33/palace-7701252_1280.jpg"
              alt="Grand Palace"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              The Grand Palace: A stunning display of Thai architecture and history.
            </p>
          </div>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Street Food Paradise</h2>
          <p className="mt-2">
            Bangkok is famous for its street food scene, offering a variety of flavors to suit every palate. Don't miss:
          </p>
          <ul className="list-disc ml-8 mt-2">
            <li>Pad Thai: Stir-fried noodles with shrimp, tofu, or chicken.</li>
            <li>Mango Sticky Rice: A sweet treat made with glutinous rice, fresh mango, and coconut milk.</li>
            <li>Tom Yum Goong: A spicy and sour shrimp soup.</li>
            <li>Grilled Satay: Skewered meat served with peanut sauce.</li>
          </ul>

          <div className="my-8">
            <img
              src="https://cdn.pixabay.com/photo/2022/09/09/03/42/thailand-7442285_1280.jpg"
              alt="Bangkok Street Food"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              Bangkok's street food is a culinary adventure you can't miss.
            </p>
          </div>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Travel Tips for Bangkok</h2>
          <ul className="list-disc ml-8 mt-2">
            <li>Dress modestly when visiting temples, covering shoulders and knees.</li>
            <li>Use the BTS Skytrain or MRT for quick and affordable transportation.</li>
            <li>Carry cash, as many street vendors and small businesses don’t accept cards.</li>
            <li>Stay hydrated and avoid tap water; opt for bottled water instead.</li>
          </ul>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Visit</h2>
          <p className="mt-2">
            The ideal time to visit Bangkok is during the cool season, from November to February, when the weather is more pleasant and suitable for sightseeing.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
          <h2
            className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
            style={{ fontFamily: "Philosopher, sans-serif" }}
          >
            Ready to Explore Bangkok's Wonders?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Start planning your Bangkok adventure today! Explore more travel guides and tips on this blog.
          </p>
        </div>
      </div>
    </div>
    </>


  )
}

export default BangkokPost
