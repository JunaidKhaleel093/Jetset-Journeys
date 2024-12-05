import { useEffect } from 'react';

import React from 'react';

function AfricaPost() {
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
              Discovering Africa: A Continent of Wonders and Traditions
            </h1>
            <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://cdn.pixabay.com/photo/2022/10/19/20/02/elephants-7533472_640.jpg"
              alt="Safari in Africa"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <p>
              Africa is a land of untamed wilderness, vibrant cultures, and breathtaking landscapes. From the majestic savannas of the Serengeti to the bustling markets of Marrakech, the continent offers an unparalleled adventure for every traveler. Here’s a glimpse into the wonders of Africa.
            </p>

            <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Destinations in Africa</h2>
            <ul className="list-disc ml-8 mt-2">
              <li>
                <strong>Serengeti National Park, Tanzania:</strong> Witness the awe-inspiring Great Migration and explore Africa’s iconic wildlife.
              </li>
              <li>
                <strong>Victoria Falls, Zimbabwe/Zambia:</strong> Known as "The Smoke That Thunders," this waterfall is one of the largest and most stunning in the world.
              </li>
              <li>
                <strong>Pyramids of Giza, Egypt:</strong> Marvel at these ancient wonders and delve into the history of the pharaohs.
              </li>
              <li>
                <strong>Cape Town, South Africa:</strong> Enjoy Table Mountain, vibrant culture, and beautiful beaches.
              </li>
              <li>
                <strong>Mount Kilimanjaro, Tanzania:</strong> Challenge yourself to conquer Africa’s highest peak.
              </li>
            </ul>

            <div className="my-8">
              <img
                src="https://cdn.pixabay.com/photo/2022/07/10/06/08/mount-kilimanjaro-7312238_640.jpg"
                alt="Mount Kilimanjaro, Tanzania"
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2">
                Mount Kilimanjaro: A bucket-list destination for adventurers.
              </p>
            </div>

            <h2 className="text-2xl font-semibold dark:text-light mt-5">Cultural Highlights</h2>
            <ul className="list-disc ml-8 mt-2">
              <li>Immerse yourself in Maasai culture in Kenya or Tanzania.</li>
              <li>Explore the ancient rock-hewn churches of Lalibela, Ethiopia.</li>
              <li>Wander through the colorful streets of Chefchaouen, Morocco.</li>
              <li>Dance to Afrobeat rhythms in Lagos, Nigeria.</li>
              <li>Visit the historical island of Zanzibar for a blend of Swahili and Arab heritage.</li>
            </ul>

            <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Visit</h2>
            <p>
              Africa's best travel seasons depend on the region. For safaris in East Africa, visit from June to October. North Africa is ideal in spring (March-May) or autumn (September-November) to avoid extreme heat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfricaPost;
