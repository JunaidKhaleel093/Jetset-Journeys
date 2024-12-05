import React from 'react'
import { useEffect } from 'react';

function USAPost() {
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
        Exploring the Best Destinations in the USA
      </h1>
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
    </div>

    {/* Hero Image */}
    <div className="mb-12">
      <img
        src="https://cdn.pixabay.com/photo/2018/08/15/17/17/mount-rushmore-3608620_640.jpg"
        alt="USA Landscapes"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      <p>
        The United States is home to diverse landscapes, iconic cities, and stunning natural wonders. Whether you're into exploring the hustle of big cities, trekking through national parks, or relaxing on beautiful beaches, the USA has something for every traveler. Here are some of the best destinations to visit in the U.S.
      </p>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">1. New York City, New York</h2>
      <p>
        Known as "The City That Never Sleeps," New York City offers endless excitement, world-class museums, iconic landmarks, and diverse neighborhoods. Visit the Empire State Building, take a stroll in Central Park, and explore Times Square's bright lights. Don’t miss the arts and culture scene in neighborhoods like Greenwich Village and Brooklyn.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: Spring and Fall</li>
        <li>Must-See Stops: Central Park, Statue of Liberty, Broadway, Brooklyn Bridge</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2020/05/04/13/30/outdoors-5129182_640.jpg"
          alt="New York City"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          The New York City skyline is one of the most iconic in the world.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">2. Grand Canyon, Arizona</h2>
      <p>
        One of the Seven Natural Wonders of the World, the Grand Canyon offers breathtaking views and endless opportunities for outdoor adventure. Hike along the rim, go white-water rafting on the Colorado River, or simply take in the awe-inspiring vistas from various lookouts.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: Spring or Fall</li>
        <li>Must-See Stops: South Rim, Bright Angel Trail, Horseshoe Bend</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2021/01/24/21/52/grand-canyon-5946657_1280.jpg"
          alt="Grand Canyon"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          The Grand Canyon's vastness is a spectacle that cannot be fully captured in a photo.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">3. Yellowstone National Park, Wyoming</h2>
      <p>
        America's first national park, Yellowstone is renowned for its geothermal features, including the famous Old Faithful geyser. The park also offers abundant wildlife, including bison, elk, and grizzly bears, and stunning landscapes ranging from forests to waterfalls.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: Summer and Early Fall</li>
        <li>Must-See Stops: Old Faithful, Grand Prismatic Spring, Lamar Valley</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2016/10/22/12/08/yellowstone-national-park-1760573_1280.jpg"
          alt="Yellowstone National Park"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Yellowstone offers some of the most unique landscapes in the world.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">4. San Francisco, California</h2>
      <p>
        Famous for its iconic Golden Gate Bridge, rolling hills, and vibrant neighborhoods, San Francisco is a must-see destination. Explore Fisherman's Wharf, ride the historic cable cars, and enjoy the views from Twin Peaks or Alamo Square.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: Fall</li>
        <li>Must-See Stops: Golden Gate Bridge, Alcatraz Island, Fisherman's Wharf, Chinatown</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2019/06/13/11/21/golden-gate-bridge-4271360_640.jpg"
          alt="San Francisco"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          The Golden Gate Bridge is one of San Francisco's most iconic landmarks.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">5. Miami, Florida</h2>
      <p>
        Miami is known for its sunny beaches, vibrant nightlife, and Latin American influence. Enjoy a day on the sandy shores of South Beach, explore the colorful Art Deco District, or head to Little Havana for a taste of Cuban culture.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: Winter (for warm weather)</li>
        <li>Must-See Stops: South Beach, Little Havana, Wynwood Walls, Everglades National Park</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2019/01/05/18/24/miami-3915622_1280.jpg"
          alt="Miami"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Miami is a perfect blend of tropical beaches and urban vibrancy.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">6. New Orleans, Louisiana</h2>
      <p>
        Known for its vibrant music scene, delicious cuisine, and unique culture, New Orleans is a city that captivates visitors with its charm. Be sure to visit the historic French Quarter, experience live jazz music, and indulge in local specialties like gumbo and beignets.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: February (for Mardi Gras)</li>
        <li>Must-See Stops: French Quarter, Garden District, Bourbon Street, St. Louis Cathedral</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2019/02/20/11/07/new-orleans-4008968_1280.jpg"
          alt="New Orleans"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          The French Quarter in New Orleans offers a lively and historic atmosphere.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Travel Tips for the USA</h2>
      <ul className="list-disc ml-8 mt-2">
        <li>Plan your trip in advance, especially for popular destinations like national parks.</li>
        <li>Consider renting a car for the best flexibility in exploring the country.</li>
        <li>Check weather conditions for the region you’re visiting to pack appropriately.</li>
        <li>Be mindful of the time zone changes when traveling across the country.</li>
      </ul>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Visit the USA</h2>
      <p className="mt-2">
        The best time to visit depends on the region. For warmer states like Florida or California, winter is ideal, while the spring and fall months are great for national parks and cities. Summer is the most popular, but it can also be crowded in major tourist spots.
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
        style={{ fontFamily: "Philosopher, sans-serif" }}
      >
        Ready for Your USA Adventure?
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Start planning your USA trip today! Explore more travel guides and tips to make your journey unforgettable.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default USAPost
