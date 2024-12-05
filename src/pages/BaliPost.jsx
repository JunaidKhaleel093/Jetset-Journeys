import { useEffect } from 'react';
import React from 'react'

function BaliPost() {
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
            Discover Bali: The Island of Gods
          </h1>
          <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://cdn.pixabay.com/photo/2023/05/04/02/24/bali-7969001_1280.jpg"
            alt="Bali Landscape"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <p>
            Bali, Indonesia's most famous island, is a paradise for travelers seeking a mix of relaxation, adventure, and cultural exploration. From pristine beaches to lush jungles and ancient temples, Bali offers an unforgettable experience for every kind of traveler.
          </p>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Attractions</h2>
          <ul className="list-disc ml-8 mt-2">
            <li className="mt-2">
              <strong>Ubud:</strong> Known as Bali's cultural heart, Ubud is home to the Sacred Monkey Forest, art markets, and stunning rice terraces.
            </li>
            <li>
              <strong>Tanah Lot Temple:</strong> A breathtaking sea temple perched on a rock formation, perfect for sunset views.
            </li>
            <li>
              <strong>Seminyak Beach:</strong> A hotspot for beach lovers, offering vibrant nightlife and world-class dining.
            </li>
            <li>
              <strong>Mount Batur:</strong> A popular trekking destination for catching sunrise views from the volcanic summit.
            </li>
            <li>
              <strong>Nusa Penida:</strong> An island paradise known for its dramatic cliffs, turquoise waters, and Instagram-worthy spots like Kelingking Beach.
            </li>
          </ul>

          <div className="my-8">
            <img
              src="https://cdn.pixabay.com/photo/2020/02/26/06/19/bali-4880741_640.jpg"
              alt="Tanah Lot Temple"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              Tanah Lot Temple: One of Bali's most iconic landmarks.
            </p>
          </div>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Cultural Experiences</h2>
          <p className="mt-2">
            Bali's unique Hindu culture is a significant part of its charm. Here are some experiences to immerse yourself in the island's traditions:
          </p>
          <ul className="list-disc ml-8 mt-2">
            <li>Attend a Balinese dance performance at Ubud Palace.</li>
            <li>Visit traditional Balinese villages like Tenganan or Penglipuran.</li>
            <li>Take part in a purification ritual at Tirta Empul Temple.</li>
            <li>Learn to cook authentic Balinese dishes in a local cooking class.</li>
          </ul>

          <div className="my-8">
            <img
              src="https://cdn.pixabay.com/photo/2021/10/25/04/31/topeng-6739818_640.jpg"
              alt="Balinese Dance"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              Balinese dance: A vibrant display of art and tradition.
            </p>
          </div>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Travel Tips for Bali</h2>
          <ul className="list-disc ml-8 mt-2">
            <li>Rent a scooter for easy and affordable transportation.</li>
            <li>Respect local customs, especially when visiting temples.</li>
            <li>Carry cash, as many smaller establishments don't accept cards.</li>
            <li>Stay hydrated and wear sunscreen to cope with Bali’s tropical climate.</li>
            <li>Plan visits to popular attractions early in the morning to avoid crowds.</li>
          </ul>

          <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Time to Visit</h2>
          <p className="mt-2">
            The best time to visit Bali is during the dry season, from April to October, when the weather is sunny and pleasant. For fewer crowds, consider visiting in April, May, or September.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
          <h2
            className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
            style={{ fontFamily: "Philosopher, sans-serif" }}
          >
            Ready to Explore Bali's Paradise?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Begin planning your Bali adventure today! Dive into more travel tips and destination guides on this blog.
          </p>
        </div>
      </div>
    </div>
    </>


  )
}

export default BaliPost
