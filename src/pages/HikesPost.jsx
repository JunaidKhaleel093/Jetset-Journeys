import React from 'react'
import { useEffect } from 'react';

function HikesPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <>
    <div className="min-h-screen bg-[#f9f9f9] dark:bg-[#1b1b1b] pt-20">
  <div className="max-w-4xl mx-auto px-4 py-12">
    <div className="flex items-center justify-center mb-8">
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 mr-4"></div>
      <h1
        style={{ fontFamily: "Philosopher, sans-serif" }}
        className="text-4xl font-bold text-dark dark:text-light mb-8 text-center"
      >
        Best Hikes to Try: Adventure Awaits
      </h1>
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
    </div>

    {/* Hero Image */}
    <div className="mb-12">
      <img
        src="https://cdn.pixabay.com/photo/2024/03/08/16/22/clouds-8621202_640.jpg"
        alt="Mountain Landscape"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      <p>
        Whether you're an experienced hiker or just starting out, there's nothing like the feeling of reaching the top of a mountain or walking through lush forests. Here are some of the best hikes around the world that offer breathtaking views, adventure, and unforgettable memories.
      </p>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Hikes to Experience</h2>
      <ul className="list-disc ml-8 mt-2">
        <li className="mt-2">
          <strong>Inca Trail, Peru:</strong> A famous hike that takes you through stunning mountain scenery, ancient ruins, and ends at the iconic Machu Picchu.
        </li>
        <li>
          <strong>Mount Fuji, Japan:</strong> A challenging yet rewarding climb to the top of Japan's most famous peak, offering panoramic views of the surrounding landscape.
        </li>
        <li>
          <strong>Torres del Paine Circuit, Chile:</strong> A remote trek in Patagonia, known for its dramatic landscapes, glaciers, and towering granite peaks.
        </li>
        <li>
          <strong>Everest Base Camp, Nepal:</strong> A legendary hike that takes you through Sherpa villages, past monasteries, and up to the base of the world's highest mountain.
        </li>
        <li>
          <strong>The Appalachian Trail, USA:</strong> Stretching from Georgia to Maine, this iconic trail offers an immersive hiking experience through forests, mountains, and valleys.
        </li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2021/10/28/00/26/mount-fuji-6748510_640.jpg"
          alt="Mount Fuji"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Mount Fuji, Japan: One of the most iconic hiking destinations in the world.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">What to Expect on These Hikes</h2>
      <p className="mt-2">
        These hikes vary in difficulty, but all offer incredible views and experiences. Expect to encounter:
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Challenging terrains, including steep ascents, rocky paths, and rugged conditions.</li>
        <li>Unforgettable scenic views from mountain tops, valleys, and cliff edges.</li>
        <li>Wildlife sightings, from eagles soaring above to small creatures hidden in the brush.</li>
        <li>Exposure to different cultures, especially on treks like the Inca Trail and Everest Base Camp.</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2019/09/15/07/31/everest-base-camp-4477525_1280.jpg"
          alt="Everest Base Camp"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          The Everest Base Camp hike provides a once-in-a-lifetime adventure.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Hiking Tips</h2>
      <p className="mt-2">
        Before embarking on any of these hikes, here are some essential tips to ensure a safe and enjoyable adventure:
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Prepare physically: Train in advance to ensure you can handle the strenuous parts of the hike.</li>
        <li>Pack light, but bring essential gear: Water, snacks, first-aid kit, and appropriate clothing for the terrain and climate.</li>
        <li>Know the weather: Check the forecast and be prepared for changing weather conditions, especially in mountainous regions.</li>
        <li>Take your time: Pace yourself and enjoy the journey, rather than rushing to the summit.</li>
      </ul>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">When to Go Hiking</h2>
      <p className="mt-2">
        The best time to hike largely depends on the location. For most mountain hikes, late spring to early autumn is ideal, as the weather is milder and the trails are more accessible.
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
        style={{ fontFamily: "Philosopher, sans-serif" }}
      >
        Ready for Your Next Hiking Adventure?
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Plan your next great adventure and explore these breathtaking hiking destinations. Check out more hiking tips and guides on this blog.
      </p>
    </div>
  </div>
</div>

    </>
    </div>
  )
}

export default HikesPost
