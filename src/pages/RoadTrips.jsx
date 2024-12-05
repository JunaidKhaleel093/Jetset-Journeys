import React from 'react'
import { useEffect } from 'react';

function RoadTrips() {
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
        The Best Road Trips to Embark On
      </h1>
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
    </div>

    {/* Hero Image */}
    <div className="mb-12">
      <img
        src="https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_640.jpg"
        alt="Scenic Road Trip"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      <p>
        Road trips offer a unique way to explore the world, creating unforgettable memories along scenic highways and remote backroads. From coastlines to mountain ranges, here are some of the best road trips you should add to your travel bucket list.
      </p>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">1. Pacific Coast Highway, USA</h2>
      <p>
        The Pacific Coast Highway (PCH) offers one of the most breathtaking drives in the world. Stretching along California’s coastline, the route boasts dramatic cliffs, pristine beaches, and the stunning Pacific Ocean views. Highlights include stops at Big Sur, Santa Barbara, and San Francisco.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: May to October</li>
        <li>Must-See Stops: Bixby Creek Bridge, McWay Falls, Malibu, San Luis Obispo</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/16/11/18/pacific-coast-highway-1597725_1280.jpg"
          alt="Pacific Coast Highway"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          The Pacific Coast Highway offers spectacular views and diverse landscapes.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">2. Route 66, USA</h2>
      <p>
        Known as the "Main Street of America," Route 66 runs from Chicago to Santa Monica, offering a mix of Americana, quirky roadside attractions, and diverse landscapes. The road trip takes you through iconic towns, retro motels, and a glimpse into the heart of America.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: Spring or Fall</li>
        <li>Must-See Stops: Cadillac Ranch, Petrified Forest National Park, Grand Canyon, St. Louis Arch</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2019/06/14/06/09/utah-4272944_1280.jpg"
          alt="Route 66"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Route 66 offers a nostalgic journey through small towns and large cities.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">3. Great Ocean Road, Australia</h2>
      <p>
        The Great Ocean Road is a stunning coastal route that runs along the southeastern coast of Australia. Famous for its dramatic cliffs, pristine beaches, and the Twelve Apostles rock formations, this drive is as much about the journey as it is about the destinations.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: December to March</li>
        <li>Must-See Stops: Twelve Apostles, Loch Ard Gorge, Bells Beach</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2013/06/23/01/24/ocean-140633_1280.jpg"
          alt="Great Ocean Road"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          The Great Ocean Road offers striking ocean views and natural beauty.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">4. The Ring Road, Iceland</h2>
      <p>
        Iceland's Ring Road is one of the most unique road trips, taking you around the island's entire perimeter. You'll encounter surreal landscapes including volcanoes, glaciers, waterfalls, and the famous Blue Lagoon. It’s a must-do for nature lovers and adventure seekers.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: June to August</li>
        <li>Must-See Stops: Geysir Hot Springs, Jokulsarlon Glacier Lagoon, Golden Circle</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2020/03/22/14/49/iceland-4957449_1280.jpg"
          alt="Iceland Ring Road"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Iceland's Ring Road offers an adventure through diverse landscapes and natural wonders.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">5. South Island, New Zealand</h2>
      <p>
        New Zealand's South Island is known for its stunning natural beauty, and the best way to explore it is by car. From the rolling hills of Canterbury to the towering mountains of Fiordland National Park, this road trip is perfect for those who love outdoor adventures.
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Best Time to Visit: December to February</li>
        <li>Must-See Stops: Queenstown, Milford Sound, Franz Josef Glacier, Lake Tekapo</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2019/07/01/11/19/new-zealand-4309742_640.jpg"
          alt="South Island, New Zealand"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          New Zealand's South Island offers dramatic scenery and outdoor adventures.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Tips for a Perfect Road Trip</h2>
      <ul className="list-disc ml-8 mt-2">
        <li>Plan your route, but leave room for spontaneity and detours.</li>
        <li>Pack snacks, water, and a first-aid kit for unexpected stops.</li>
        <li>Ensure your car is in good condition before embarking on long drives.</li>
        <li>Bring a camera to capture breathtaking landscapes and memorable moments.</li>
        <li>Check the weather forecast and road conditions for the best experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Take a Road Trip</h2>
      <p className="mt-2">
        The ideal time for a road trip depends on your destination. Summer is popular for many regions, but fall offers fewer crowds and beautiful scenery, especially for mountain and forest routes. Winter can be magical for scenic roads, though it requires extra preparation.
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
        style={{ fontFamily: "Philosopher, sans-serif" }}
      >
        Ready for Your Next Road Trip Adventure?
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Start planning your perfect road trip today! Explore more travel tips and guides on this blog.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default RoadTrips
