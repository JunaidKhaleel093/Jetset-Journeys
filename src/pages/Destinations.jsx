import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const destinations = [
  {
    id: 7,
    name: "India",
    image:
      "https://cdn.pixabay.com/photo/2022/05/01/06/01/peacock-7166818_640.jpg",
    places: ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Agra", "Kerala", "Goa", "Kolar"],
    description:
      "A vibrant blend of ancient heritage and modern wonders, India offers majestic temples, bustling markets, and cultural diversity like no other.",
link: "/IndiaPost",
    },
  {
    id: 1,
    name: "Europe",
    image:
      "https://cdn.pixabay.com/photo/2021/10/28/09/59/city-6749295_640.jpg",
    places: ["Paris", "Rome", "Barcelona", "London", "Amsterdam", "Prague"],
    description:
      "Discover historic cities, rich culture, and stunning architecture",
link: "/EuropePost",
    },
  {
    id: 2,
    name: "Asia",
    image:
      "https://cdn.pixabay.com/photo/2024/09/02/15/06/sunset-9017041_640.jpg",
    places: ["Tokyo", "Bangkok", "Singapore", "Kyoto", "Bali", "Beijing"],
    description: "A continent of wonders, Asia offers diverse cultures, breathtaking landscapes, and rich history.",
link: "/AsiaPost",
  },
  {
    id: 3,
    name: "America",
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_640.jpg",
    places: ["Rio de Janeiro", "Machu Picchu", "Patagonia", "Mexico City", "Buenos Aires", "Toronto"],
    description:
      "A vast land of diversity, America is where natural wonders meet cultural landmarks.",
link: "/AmericaPost",
    },
  {
    id: 4,
    name: "Africa",
    image:
      "https://cdn.pixabay.com/photo/2015/10/03/22/17/elephants-970456_640.jpg",
    places: ["Cape Town", "Marrakech", "Nairobi", "Cairo", "Victoria Falls", "Zanzibar"],
    description: "Explore Africa's wild beauty, where breathtaking safaris, golden savannahs, and ancient cultures await",
link: "/AfricaPost",
  },
  {
    id: 5,
    name: "New York",
    image:
      "https://cdn.pixabay.com/photo/2021/01/07/15/02/york-minster-5897525_640.jpg",
    places: ["Times Square", "Central Park", "Brooklyn Bridge", "Empire State Building", "Statue of Liberty"],
    description:
      "The city that never sleeps, New York is a melting pot of cultures and a hub of iconic attractions.",
link: "/NewyorkPost",
    },
  {
    id: 6,
    name: "Paris",
    image:
      "https://cdn.pixabay.com/photo/2019/05/09/11/52/cathedral-4191069_640.jpg",
    places: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Montmartre", "Champs-Élysées"],
    description: "The City of Light enchants with its romantic charm, historic landmarks, and world-class art",
link: "/ParisPost",
  },
  {
    id: 8,
    name: "Bali",
    image:
      "https://cdn.pixabay.com/photo/2019/07/06/08/42/bali-4319964_640.jpg",
    places: ["Ubud", "Seminyak", "Kuta", "Nusa Penida", "Canggu", "Uluwatu"],
    description: "Known as the 'Island of Gods",
link: "/BaliPost",
  },
  {
    id: 9,
    name: "USA",
    image:
      "https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_640.jpg",
    places: ["New York City", "Los Angeles", "Grand Canyon", "Las Vegas", "Miami", "Chicago"],
    description:
      "Grand Canyon to the bustling streets of New York City, every journey is filled with adventure.",
link: "/USAPost",
    },
  {
    id: 10,
    name: "Dubai",
    image:
      "https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045037_640.jpg",
    places: ["Dubai City", "Palm Jumeirah", "Burj Khalifa", "Dubai Marina", "Al Fahidi Historical District"],
    description: "A city where luxury meets innovation, Dubai is home to iconic skyscrapers, stunning desert landscapes, and vibrant souks.",
link: "/DubaiPost",
  },
];

export default function Destinations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#acacac] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow h-[1px] bg-gray-300 mr-4 mb-8"></div>
          <h1
            style={{ fontFamily: "Philosopher , sans-serif" }}
            className="text-4xl font-bold text-dark mb-8"
          >
            Destinations
          </h1>

          <div className="flex-grow h-[1px] bg-gray-300 ml-4 mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-[#d3d3d3] rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white">
                    {destination.name}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2">
                  {destination.places.map((place) => (
                    <span
                      key={place}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {place}
                    </span>
                  ))}
                </div>
                <Link to={destination.link}> 
                  <button className="mt-4 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                    Explore {destination.name}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
