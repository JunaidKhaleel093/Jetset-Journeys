import React from 'react'
import { useEffect } from 'react';

function NewyorkPost() {
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
        Exploring New York City: The City That Never Sleeps
      </h1>
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
    </div>

    {/* Hero Image */}
    <div className="mb-12">
      <img
        src="https://cdn.pixabay.com/photo/2020/05/18/08/05/new-york-5185104_640.jpg"
        alt="New York City Skyline"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      <p>
        New York City, the largest city in the United States, is a melting pot of cultures, ideas, and energy. From iconic skyscrapers to world-class museums, NYC offers an array of experiences that will leave you in awe. Here are some must-see spots and experiences in this vibrant metropolis.
      </p>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Top Attractions in New York City</h2>
      <ul className="list-disc ml-8 mt-2">
        <li className="mt-2">
          <strong>Statue of Liberty:</strong> A symbol of freedom and democracy, the Statue of Liberty offers breathtaking views of the city from Liberty Island.
        </li>
        <li>
          <strong>Times Square:</strong> Known as "The Cross-roads of the World," Times Square is an iconic hub of entertainment, lights, and Broadway shows.
        </li>
        <li>
          <strong>Central Park:</strong> A massive green oasis in the middle of the city, perfect for a relaxing stroll or a bike ride.
        </li>
        <li>
          <strong>Empire State Building:</strong> One of the most recognizable buildings in the world, offering panoramic views of the city from its observation deck.
        </li>
        <li>
          <strong>Brooklyn Bridge:</strong> Walk across this historic bridge for stunning views of the Manhattan skyline and the East River.
        </li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/03/21/59/statue-of-liberty-1075752_640.jpg"
          alt="Statue of Liberty"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          The Statue of Liberty: A beacon of hope and a must-see landmark in NYC.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Must-Visit Museums and Art Galleries</h2>
      <p className="mt-2">
        New York City is home to some of the world's most prestigious museums and art galleries. Here are a few you shouldn’t miss:
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>The Metropolitan Museum of Art: One of the largest and most visited museums in the world, featuring works from ancient Egypt to contemporary art.</li>
        <li>American Museum of Natural History: A captivating museum filled with exhibits on everything from dinosaurs to space exploration.</li>
        <li>Museum of Modern Art (MoMA): A world-renowned museum housing an impressive collection of modern and contemporary art.</li>
        <li>The Guggenheim Museum: A modern art museum known for its unique architecture and cutting-edge exhibitions.</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2014/01/16/08/06/museum-246222_1280.jpg"
          alt="Museum of Modern Art"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          The Museum of Modern Art: A must-see for art lovers in New York City.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Exploring New York's Food Scene</h2>
      <p className="mt-2">
        NYC is a food lover's paradise, offering every cuisine imaginable. Here are some must-try dishes and spots:
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>New York-style Pizza: Thin, crispy crust topped with gooey cheese and delicious tomato sauce. Try it at places like Joe’s Pizza or Di Fara Pizza.</li>
        <li>Bagels: A classic NYC breakfast staple, often served with cream cheese and lox. Head to Russ & Daughters for a true New York experience.</li>
        <li>Hot Dogs: Grab a famous hot dog from Gray’s Papaya or a food cart on the streets of Manhattan.</li>
        <li>Dim Sum: Visit Chinatown for some of the best dim sum outside of Asia.</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_640.jpg"
          alt="New York-style Pizza"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          New York-style pizza: A must-try when visiting the city.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Best Times to Visit New York</h2>
      <p className="mt-2">
        The best time to visit New York City is in the spring (April to June) or fall (September to November), when the weather is mild and there are fewer tourists. Winter (December to February) offers a festive atmosphere with holiday lights and events, though it can be cold.
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
        style={{ fontFamily: "Philosopher, sans-serif" }}
      >
        Ready to Explore New York City's Wonders?
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Start planning your New York City adventure today! Discover more travel guides and tips on this blog.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default NewyorkPost
