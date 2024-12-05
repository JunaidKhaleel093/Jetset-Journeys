import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="bg-[#acacac] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
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
  );
}