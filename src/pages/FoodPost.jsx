import React from 'react'
import { useEffect } from 'react';

function FoodPost() {
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
        Best Food to Try in Tokyo: A Culinary Adventure
      </h1>
      <div className="flex-grow h-[1px] bg-gray-300 dark:bg-gray-700 ml-4"></div>
    </div>

    {/* Hero Image */}
    <div className="mb-12">
      <img
        src="https://cdn.pixabay.com/photo/2023/08/04/22/59/sunset-8170058_640.jpg"
        alt="Tokyo Cityscape with Food"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      <p>
        Tokyo is a food lover's paradise, offering a blend of traditional Japanese dishes and modern culinary innovations. From sushi and ramen to unique street foods, Tokyo is the perfect destination to indulge in a vibrant food scene.
      </p>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Must-Try Foods in Tokyo</h2>
      <ul className="list-disc ml-8 mt-2">
        <li className="mt-2">
          <strong>Sushi:</strong> Tokyo is famous for its fresh, high-quality sushi, with Tsukiji Market and Ginza offering the best options for sushi lovers.
        </li>
        <li>
          <strong>Ramen:</strong> A comforting bowl of noodle soup, with rich broths ranging from miso, soy, to tonkotsu. Popular spots include Ichiryu and Tsuta.
        </li>
        <li>
          <strong>Tempura:</strong> Lightly battered and deep-fried seafood or vegetables, often served with a dipping sauce. Tempura restaurants like Ten-ichi offer a unique experience.
        </li>
        <li>
          <strong>Okonomiyaki:</strong> A savory pancake filled with a variety of ingredients, from cabbage and pork to seafood, topped with mayonnaise and okonomiyaki sauce.
        </li>
        <li>
          <strong>Wagyu Beef:</strong> Known for its marbling and tenderness, Tokyo has some of the best wagyu beef, which you can enjoy in a steak or in shabu-shabu style.
        </li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2022/05/10/18/50/ramen-7187810_640.jpg"
          alt="Ramen Bowl"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          A bowl of steaming ramen - the perfect comfort food in Tokyo.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Street Food to Try</h2>
      <p className="mt-2">
        Tokyo’s street food scene is a must-try, offering everything from sweet treats to savory snacks. Be sure to taste:
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Takoyaki: Octopus-filled dough balls, crispy on the outside, soft on the inside.</li>
        <li>Taiyaki: Fish-shaped pastries filled with red bean paste or custard.</li>
        <li>Yaki Imo: Roasted sweet potatoes, especially popular in the winter months.</li>
        <li>Ikayaki: Grilled squid, often served on a stick with a sweet soy-based sauce.</li>
      </ul>

      <div className="my-8">
        <img
          src="https://cdn.pixabay.com/photo/2018/11/04/03/27/taiyaki-3793219_640.jpg"
          alt="Taiyaki"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Taiyaki - A sweet, fish-shaped treat perfect for a snack on the go.
        </p>
      </div>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Where to Eat in Tokyo</h2>
      <p className="mt-2">
        Tokyo offers a wide variety of dining experiences, from upscale restaurants to hidden gems. Consider visiting:
      </p>
      <ul className="list-disc ml-8 mt-2">
        <li>Sukiyabashi Jiro: World-renowned sushi restaurant for an unforgettable dining experience.</li>
        <li>Ichiryu Ramen: A Michelin-starred ramen shop that serves exceptional bowls of noodles.</li>
        <li>Omoide Yokocho: An alleyway in Shinjuku filled with tiny eateries serving yakitori and other local delicacies.</li>
      </ul>

      <h2 className="text-2xl font-semibold dark:text-light mt-5">Food Markets in Tokyo</h2>
      <p className="mt-2">
        Don't miss out on exploring the vibrant food markets in Tokyo. Popular markets like Tsukiji Outer Market, Ameyoko Market, and Asakusa offer a wide range of fresh food, local ingredients, and street food stalls.
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-12 bg-[#e6e6e6] dark:bg-[#2b2b2b] p-8 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold text-dark dark:text-light mb-4 text-center"
        style={{ fontFamily: "Philosopher, sans-serif" }}
      >
        Ready to Explore Tokyo's Food Scene?
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Start planning your culinary adventure today! Explore more travel guides and Tokyo food tips on this blog.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default FoodPost
