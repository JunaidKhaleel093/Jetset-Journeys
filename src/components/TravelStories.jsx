import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';

const stories = [
  {
    id: 1,
    author: "Portgas D Ace",
    avatar: "https://tse2.mm.bing.net/th?id=OIP.JMlVVEj9456TC3IBfO7GugHaHN&pid=Api&P=0&h=180",
    location: "Cappadocia, Turkey",
    image: "https://cdn.pixabay.com/photo/2016/11/19/16/56/adventure-1840310_640.jpg",
    title: "Hot Air Balloon Adventure",
    story: "Watching the sunrise over the fairy chimneys while floating in a hot air balloon was a dream come true...",
    likes: 1524,
    comments: 485
  },
  {
    id: 2,
    author: "Junaid Khaleel",
    avatar: "https://images8.alphacoders.com/134/thumb-440-1342990.webp",
    location: "Amazon Rainforest",
    image: "https://images.pexels.com/photos/28771817/pexels-photo-28771817/free-photo-of-leopard-climbing-on-tree-in-natural-habitat.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Into the Wild",
    story: "Three days deep in the Amazon rainforest taught me more about life than years in the city...",
    likes: 1312,
    comments: 687
  },
  {
    id: 3,
    author: "Son Goku",
    avatar: "https://images8.alphacoders.com/134/thumb-440-1347210.webp",
    location: "Cappadocia, Turkey",
    image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Treacking Adventure",
    story: "Watching the sunrise over the fairy chimneys while floating in a hot air balloon was a dream come true...",
    likes: 934,
    comments: 145
  },
  {
    id: 4,
    author: "Roronoa Zoro",
    avatar: "https://cdn.pixabay.com/photo/2018/10/01/00/46/male-3715098_640.jpg",
    location: "Amazon Rainforest",
    image: "https://images.pexels.com/photos/11481772/pexels-photo-11481772.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Into Deep Oceans",
    story: "Three days deep in the Amazon rainforest taught me more about life than years in the city...",
    likes: 812,
    comments: 107
  }
];

export default function TravelStories() {
  return (
    <section className="py-16 bg-[#acacac] text-white">
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-center mb-8">
   <div className="flex-grow h-[1px] bg-black mr-4 mb-8"></div>
        <h2 style={{ fontFamily: 'Philosopher , sans-serif' }}  className="text-3xl font-bold mb-12 text-center text-black/90">Travel Stories</h2>
        <div className="flex-grow h-[1px] bg-black ml-4 mb-8" ></div>
   </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map(story => (
            <article key={story.id} className="bg-[#232b2b] rounded-lg overflow-hidden">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.avatar} 
                    alt={story.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold">{story.author}</h3>
                    <p className="text-sm text-gray-300">{story.location}</p>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">{story.title}</h4>
                <p className="text-gray-300 mb-4">{story.story}</p>
                <div className="flex items-center space-x-6 text-gray-300">
                  <button className="flex items-center space-x-2 hover:text-primary">
                    <FiHeart /> <span>{story.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-primary">
                    <FiMessageCircle /> <span>{story.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-primary">
                    <FiShare2 /> <span>Share</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}