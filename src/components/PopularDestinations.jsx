const destinations = [
  {
    id: 12,
    name: "Taj Mahal, Agra, India",
    image:
      "https://cdn.pixabay.com/photo/2019/11/07/11/27/taj-mahal-4608641_640.jpg",
    description: "Love's symbol, UNESCO site, world wonder..",
    rating: 5.0,
  },
  {
    id: 1,
    name: "Santorini, Greece",
    image:
      "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Iconic white-washed buildings and stunning sunsets",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    image:
      "https://images.pexels.com/photos/16514708/pexels-photo-16514708/free-photo-of-rooftop-and-pagoda-on-horizon.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Ancient temples and beautiful cherry blossoms",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image:
      "https://images.pexels.com/photos/22484290/pexels-photo-22484290/free-photo-of-tourists-on-terraced-fields-in-the-lost-city-of-the-incas.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Mysterious Incan citadel in the Andes",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Maldives",
    image:
      "https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Paradise islands with crystal clear waters",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Dubai, UAE",
    image:
      "https://cdn.pixabay.com/photo/2015/02/16/07/19/cityscape-637990_640.jpg",
    description: "A futuristic city with towering skyscrapers, luxurious shopping malls, and a vibrant desert landscape.",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Sydney, Australia",
    image:
      "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_640.jpg",
    description: " Known for its iconic Opera House, Harbour Bridge, and beautiful beaches like Bondi.",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Rome, Italy",
    image:
      "https://cdn.pixabay.com/photo/2019/10/06/08/57/tiber-river-4529605_640.jpg",
    description: "The Eternal City, rich in history with landmarks like the Colosseum, Vatican, and ancient ruins.",
    rating: 4.6,
  },
  {
    id: 8,
    name: "Bali, Indonesia",
    image:
      "https://cdn.pixabay.com/photo/2022/05/14/12/10/temple-7195534_640.jpg",
    description: " An Indonesian paradise with lush green rice terraces, beautiful beaches, and vibrant local culture.",
    rating: 4.8,
  },
  {
    id: 9,
    name: "New York City, USA",
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_640.jpg",
    description: "The Big Apple, famed for Times Square, Central Park, and an endless variety of entertainment.",
    rating: 4.7,
  },
  {
    id: 10,
    name: "Cape Town, South Africa",
    image:
      "https://cdn.pixabay.com/photo/2023/06/21/17/09/savannah-8079856_640.jpg",
    description: "A coastal city with the majestic Table Mountain, vibrant waterfront, and nearby safari adventures.",
    rating: 4.5,
  },
  {
    id: 11,
    name: "Paris, France",
    image:
      "https://cdn.pixabay.com/photo/2021/08/02/10/45/cityscape-6516367_1280.jpg",
    description: "The City of Light, known for its iconic Eiffel Tower, charming cafes, and world-renowned art museums.",
    rating: 4.5,
  },

];

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-[#acacac]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow h-[1px] bg-black mr-4 mb-5"></div>
          <h2 style={{ fontFamily: 'Philosopher , sans-serif' }}  className="text-3xl font-bold text-center text-dark mb-8">
            Popular Destinations
          </h2>
          <div className="flex-grow h-[1px] bg-black ml-4 mb-5"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-2">
                    {destination.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white ml-1">
                      {destination.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


