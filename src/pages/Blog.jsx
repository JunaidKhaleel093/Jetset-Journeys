import { Link } from 'react-router-dom'; 
import { useEffect } from 'react';


const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Backpacking in Southeast Asia",
      excerpt:
        "Everything you need to know about planning your backpacking adventure...",
      image:
        "https://images.pexels.com/photos/235731/pexels-photo-235731.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 15, 2024",
      author: "Portgas D Ace",
      category: "Travel Guide",
      link: "/AsiaPost",
    },
    {
      id: 2,
      title: "10 Must-Try Street Foods in Tokyo",
      excerpt:
        "Discover the best street food experiences in Japan's bustling capital...",
      image:
        "https://images.pexels.com/photos/5473228/pexels-photo-5473228.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 12, 2024",
      author: "Mohammed Junaid",
      category: "Food & Culture",
      link: "/FoodPost", 
    },
    {
      id: 3,
      title: "Top 7 Breathtaking Hikes Around the World",
      excerpt:
        "Explore some of the world's most awe-inspiring hiking trails, each offering unique landscapes and unforgettable views...",
      image:
        "https://images.pexels.com/photos/28530166/pexels-photo-28530166/free-photo-of-cows-grazing-on-serene-mountain-slope.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 10, 2024",
      author: "Shanks",
      category: "Sustainable Travel",
      link: "/HikesPost", 
    },
    {
      id: 4,
      title: "Solo Travel Destinations for Women",
      excerpt:
        "Find the safest and most empowering destinations for solo female travelers looking for adventure and connection",
      image:
        "https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_640.jpg",
      date: "March 15, 2024",
      author: "Trafalgar D. Water Law",
      category: "Travel Guide",
      link: "/SoloWomen", 
    },
    {
      id: 5,
      title: "Must-Visit National Parks in the USA",
      excerpt:
        "Immerse yourself in the wild beauty of America's national parks, from towering mountains to lush forests.",
      image:
        "https://cdn.pixabay.com/photo/2023/06/22/17/32/park-8081967_640.jpg",
      date: "March 12, 2024",
      author: "Son Goku",
      category: "Travel Guide",
      link: "/USAPost", 
    },
    {
      id: 6,
      title: "Hidden Gems in Southeast Asia",
      excerpt:
        "Explore lesser-known destinations in Southeast Asia that offer unique cultural experiences and natural beauty.",
      image:
        "https://cdn.pixabay.com/photo/2015/09/13/23/10/thailand-938837_640.jpg",
      date: "March 10, 2024",
      author: "Ryomen Sukuna",
      category: "Sustainable Travel",
      link: "/AsiaPost", 
    },
    {
      id: 7,
      title: "The Most Beautiful Cities in Europe",
      excerpt:
        "From charming cobblestone streets to grand architecture, these European cities are a must-see.",
      image:
        "https://cdn.pixabay.com/photo/2019/11/25/18/17/eur-4652709_640.jpg",
      date: "March 15, 2024",
      author: "Saturo Gojo",
      category: "Travel Guide",
      link: "/EuropePost", 
    },
    {
      id: 8,
      title: "Epic Road Trips for Adventure Seekers",
      excerpt:
        "Embark on thrilling road trips with stunning landscapes and hidden gems along the way.",
      image:
        "https://cdn.pixabay.com/photo/2016/03/26/22/34/snow-1281636_640.jpg",
      date: "March 12, 2024",
      author: "Vegeta",
      category: "Road Trips",
      link: "/RoadTrips", 
    },
    {
      id: 9,
      title: "Top 10 Beach Destinations for Relaxation",
      excerpt:
        "Discover serene beaches perfect for unwinding and soaking up the sun.",
      image:
        "https://cdn.pixabay.com/photo/2022/04/06/12/41/landscape-7115513_640.jpg",
      date: "March 10, 2024",
      author: "Freeza",
      category: "Beaches",
      link: "/BeachPost", 
    },
  ];
  
  export default function Blog() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <div className="min-h-screen bg-[#acacac] pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow h-[1px] bg-gray-300 mr-4 mb-7"></div>
            <h1
              style={{ fontFamily: "Philosopher , sans-serif" }}
              className="text-4xl font-bold text-black/80 mb-8"
            >
              Travel Blog
            </h1>
            <div className="flex-grow h-[1px] bg-gray-300 ml-4 mb-7"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-[#d3d3d3] rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-black/70">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-black/70 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-black/70 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black/60">
                      By {post.author}
                    </span>
                    <Link
                      to={post.link} 
                      className="text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }