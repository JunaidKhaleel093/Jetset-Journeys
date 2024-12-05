import { useState , useEffect} from 'react';


export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };
    return (
      <div className="min-h-screen bg-[#acacac] pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-[1px] bg-gray-300 mr-4 mb-8"></div>
          <h1 style={{ fontFamily: 'Philosopher , sans-serif' }}  className="text-4xl font-bold text-dark mb-8">About Jetset Journeys</h1>
          <div className="flex-grow h-[1px] bg-gray-300 ml-4 mb-8"></div>
   </div>
   <div className="prose max-w-none">
  <p className="text-lg text-gray-600 mb-6">
    Hi, I'm <strong>Mohammed Junaid</strong>, the creator behind Jetset Journeys. I've always had an insatiable curiosity for new places, people, and cultures. From the bustling streets of Tokyo to the quiet beauty of the Swiss Alps, travel has taught me invaluable lessons about the world—and myself. Through this blog, I want to share that love for exploration with you.
  </p>
  <h2 className="text-2xl font-semibold text-dark mb-4">Why I Started Jetset Journeys</h2>
  <p className="text-lg text-gray-600 mb-6">
    After years of traveling, I realized there’s a need for more authentic and personal travel experiences online. I wanted to create a space where fellow wanderers can not only find travel tips but also connect with stories that inspire and challenge them to look beyond the typical tourist experience. Jetset Journeys is about uncovering hidden gems, embracing local cultures, and stepping off the beaten path.
  </p>
  <h2 className="text-2xl font-semibold text-dark mb-4">My Travel Philosophy</h2>
  <p className="text-lg text-gray-600 mb-6">
    I believe that travel should be about more than just sightseeing—it should be about immersing yourself in the local culture, learning from the people, and making meaningful connections. I’m passionate about sustainable travel, finding eco-friendly accommodations, and supporting local communities whenever possible. Every journey is an opportunity to grow and share new perspectives.
  </p>
  <h2 className="text-2xl font-semibold text-dark mb-4">Join Me on This Journey</h2>
  <p className="text-lg text-gray-600 mb-6">
    Whether you're a seasoned traveler or just starting your adventures, I hope this blog offers something for you. From detailed destination guides to personal travel stories, my goal is to inspire your next adventure. Explore with me, learn from my experiences, and let’s see where this journey takes us!
  </p>
  <p className="text-lg text-gray-600 mb-6">
    Ready to start exploring? Subscribe to my newsletter for exclusive travel tips, behind-the-scenes stories, and special offers directly to your inbox.
  </p>
</div>
</div>
    <section className="bg-[#acacac] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 style={{ fontFamily: 'Philosopher , sans-serif' }}  className="text-3xl font-bold text-black mb-4">
          Get Travel Updates
        </h2>
        <p className="text-black/70 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive exclusive travel tips, hidden gems, and special offers straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg bg-[#acacac] text-black border border-dark-lighter focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-light font-semibold px-6 py-2 rounded-lg transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
      </div>
    );
  }