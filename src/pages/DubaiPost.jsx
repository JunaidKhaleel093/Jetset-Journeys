import React from 'react'
import { useEffect } from 'react';


function DubaiPost() {
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
        Discover Dubai: A Modern Oasis of Luxury and Culture
      </h1>
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
    </div>

    {/* Hero Image */}
    <div className="mb-12">
      <img
        src="https://cdn.pixabay.com/photo/2019/12/27/09/57/dubai-4722074_640.jpg"
        alt="Dubai Skyline"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      <p>
        Dubai, a city synonymous with luxury, innovation, and adventure, is a traveler’s paradise. From its towering skyscrapers and man-made islands to its vibrant souks and desert landscapes, Dubai is a destination like no other. Here’s your guide to exploring the wonders of this modern oasis.
      </p>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Attractions in Dubai</h2>
      <ul className="list-disc ml-8 mt-2">
        <li className="mt-2">
          <strong>Burj Khalifa:</strong> The tallest building in the world offers breathtaking views from its observation decks.
        </li>
        <li>
          <strong>Dubai Mall:</strong> A shopper's paradise with luxury brands, an indoor ice rink, and the Dubai Aquarium.
        </li>
        <li>
          <strong>Palm Jumeirah:</strong> A man-made island featuring luxury resorts, pristine beaches, and fine dining.
        </li>
        <li>
          <strong>Dubai Creek:</strong> Explore the city's heritage with an abra ride and a visit to the Gold and Spice Souks.
        </li>
        <li>
          <strong>Desert Safari:</strong> Experience dune bashing, camel rides, and traditional Bedouin culture in the golden sands.
        </li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2020/03/11/14/32/burj-khalifa-4922317_1280.jpg"
          alt="Burj Khalifa"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Burj Khalifa: The centerpiece of Dubai's skyline and a marvel of engineering.
        </p>
      </div>
      <h2 className="text-2xl font-semibold dark:text-light mt-5">Cultural Highlights</h2>
      <p className="mt-2">
        While Dubai is known for its modernity, it also celebrates its cultural roots. Here are some experiences to immerse yourself in the city’s heritage:
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Visit the Al Fahidi Historical Neighborhood for a glimpse into old Dubai.</li>
        <li>Admire the traditional architecture of the Jumeirah Mosque.</li>
        <li>Enjoy Emirati cuisine at authentic restaurants like Al Fanar.</li>
        <li>Watch a captivating performance at the Dubai Opera.</li>
        <li>Learn about Dubai’s pearling history at the Dubai Museum.</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2020/03/19/18/29/camel-4948299_640.jpg"
          alt="Dubai Desert Safari"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Desert Safari: A thrilling journey into Dubai’s golden dunes.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Travel Tips for Dubai</h2>
      <ul className="list-disc ml-8 mt-2">
        <li>Visit between November and March for pleasant weather.</li>
        <li>Respect the local culture by dressing modestly in public places.</li>
        <li>Use public transport like the Dubai Metro for affordable travel.</li>
        <li>Book tickets in advance for popular attractions like the Burj Khalifa.</li>
        <li>Try a mix of modern and traditional activities for a complete experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Visit</h2>
      <p className="mt-2">
        The best time to visit Dubai is during the winter months (November to March), when the weather is perfect for outdoor activities and sightseeing. Avoid visiting during the summer, as temperatures can soar above 40°C (104°F).
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
        style={{ fontFamily: "Philosopher, sans-serif" }}
      >
        Ready to Explore Dubai’s Magic?
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Embark on your Dubai adventure today! Discover more travel guides, tips, and inspiration on this blog.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default DubaiPost
