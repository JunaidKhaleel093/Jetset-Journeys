
const posts = [
  {
    id: 1,
    title: "10 Hidden Gems in Bali",
    excerpt: "Discover secret beaches and temples away from the tourist crowds...",
    image: "https://images.pexels.com/photos/889954/pexels-photo-889954.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "March 15, 2024",
    link: "/Balipost"
  },
  {
    id: 2,
    title: "Ultimate Guide to Paris",
    excerpt: "Everything you need to know about visiting the City of Light...",
    image: "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "March 12, 2024",
    link: "/ParisPost"
  },
  {
    id: 3,
    title: "Best Street Food in Bangkok",
    excerpt: "A culinary journey through Thailand's vibrant street food scene...",
    image: "https://images.pexels.com/photos/16904985/pexels-photo-16904985/free-photo-of-asian-food-market.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 10, 2024",
    link: "/BangkokPost"
  },
  {
    id: 4,
    title: "5 Stunning Road Trips Across the USA",
    excerpt: "Scenic drives that showcase America's diverse landscapes.",
    image: "https://cdn.pixabay.com/photo/2020/07/08/10/17/car-5383371_640.jpg",
    date: "March 15, 2024",
    link: "/USAPost"
  },
  {
    id: 5,
    title: "The Ultimate Guide to Backpacking Europe",
    excerpt: "Essential tips and routes for an affordable European adventure.",
    image: "https://cdn.pixabay.com/photo/2016/03/17/23/00/europe-1264062_640.jpg",
    date: "March 12, 2024",
    link: "/EuropePost"
  },
  {
    id: 6,
    title: "Must-See Attractions in New York City",
    excerpt: "Iconic landmarks and hidden gems in the City That Never Sleeps.",
    image: "https://cdn.pixabay.com/photo/2020/05/04/13/30/outdoors-5129182_640.jpg",
    date: "March 10, 2024",
    link: "/NewyorkPost"
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-[#acacac]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow h-[1px] bg-black mr-4"></div>
          <h2 style={{ fontFamily: 'Philosopher, sans-serif' }} className="text-3xl font-bold text-center text-dark">Featured Posts</h2>
          <div className="flex-grow h-[1px] bg-black ml-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-[#d3d3d3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-dark mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  className="text-primary font-semibold hover:text-primary/80"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
