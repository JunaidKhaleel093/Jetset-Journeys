import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-light mb-8">Contact Us</h1>
        <div className="bg-dark-accent rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-light mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-dark border border-dark-lighter text-light focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-light mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-dark border border-dark-lighter text-light focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-light mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-dark border border-dark-lighter text-light focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-light mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="6"
                className="w-full px-4 py-2 rounded-lg bg-dark border border-dark-lighter text-light focus:ring-primary focus:border-primary"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-light font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}