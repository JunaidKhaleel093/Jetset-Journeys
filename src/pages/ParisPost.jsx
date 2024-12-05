import React from 'react'
import { useEffect } from 'react';

function ParisPost() {
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
        Exploring Paris: The City of Light
      </h1>
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
    </div>

    {/* Hero Image */}
    <div className="mb-12">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_640.jpg"
        alt="Eiffel Tower in Paris"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      <p>
        Paris, the capital of France, is known as the "City of Light" for its pivotal role in the Age of Enlightenment and its reputation for romance and culture. From the iconic Eiffel Tower to world-class museums, Paris is an unforgettable destination for travelers.
      </p>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Attractions in Paris</h2>
      <ul className="list-disc ml-8 mt-2">
        <li className="mt-2">
          <strong>Eiffel Tower:</strong> The symbol of Paris, offering stunning views of the city from its observation decks.
        </li>
        <li>
          <strong>Louvre Museum:</strong> Home to thousands of works of art, including the Mona Lisa and the Venus de Milo.
        </li>
        <li>
          <strong>Notre-Dame Cathedral:</strong> A masterpiece of Gothic architecture, famous for its stunning façade and intricate details.
        </li>
        <li>
          <strong>Montmartre & Sacré-Cœur:</strong> A historic hilltop district with cobblestone streets, artists’ studios, and a panoramic view of the city from the Sacré-Cœur Basilica.
        </li>
        <li>
          <strong>Champs-Élysées & Arc de Triomphe:</strong> Stroll along one of the most famous avenues in the world and visit the monumental Arc de Triomphe.
        </li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2022/04/27/07/44/paris-7159870_1280.jpg"
          alt="Louvre Museum"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          The Louvre Museum: Home to some of the world's greatest art.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Parisian Cuisine: A Feast for the Senses</h2>
      <p className="mt-2">
        Paris is renowned for its culinary delights. Whether you're enjoying a simple croissant or a gourmet meal, the city offers a taste for every palate.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>French Pastries: Try croissants, pain au chocolat, and macarons at local bakeries.</li>
        <li>Baguette: A staple of Parisian life, perfect for enjoying with cheese or as part of a picnic.</li>
        <li>Escargots: A delicacy of garlic buttered snails, often served as an appetizer.</li>
        <li>Coq au Vin: A traditional French dish made with chicken braised in wine, mushrooms, and onions.</li>
        <li>Café Culture: Spend time sipping coffee and watching the world go by at one of Paris’s many charming cafés.</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2021/08/21/07/55/croissant-6562091_1280.jpg"
          alt="Parisian Croissants"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Parisian pastries: A perfect start to your day in Paris.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Places for Shopping</h2>
      <p className="mt-2">
        Paris is a fashion capital, home to both haute couture boutiques and charming vintage stores. Don't miss these shopping destinations:
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Le Marais: A trendy neighborhood filled with boutique shops and designer stores.</li>
        <li>Champs-Élysées: Famous for luxury shops like Louis Vuitton and Cartier.</li>
        <li>Galeries Lafayette: A grand department store offering high-end fashion and accessories.</li>
        <li>Rue Saint-Honoré: A street lined with upscale designer boutiques like Chanel and Hermès.</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2020/03/13/08/34/south-station-4927286_640.jpg"
          alt="Paris Shopping"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Paris shopping: Discover world-class boutiques in the heart of the city.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Visit Paris</h2>
      <p className="mt-2">
        The best time to visit Paris is during the spring (April to June) and fall (September to November) when the weather is mild and the city is less crowded. Summer is the high season, and winter, while colder, offers a festive charm, especially around Christmas.
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
        style={{ fontFamily: "Philosopher, sans-serif" }}
      >
        Ready to Experience the Magic of Paris?
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Start planning your Parisian adventure today! Explore more travel guides and tips on this blog.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default ParisPost
