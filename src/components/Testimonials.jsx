const testimonials = [
    {
      id: 1,
      name: "Saturo Gojo",
      location: "Tokyo, Jujutsu High ",
      quote: "Don't Worry. I'm the strongest. Every recommendation was spot-on!",
      avatar: "https://sp.yimg.com/ib/th?id=OIP.j_SkXXl9LfGbgp_xYNk8-wHaEK&pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
    },
    {
      id: 2,
      name: "Portgas D Ace",
      location: "Dawn Island",
      quote: " You May Be Smoke But I'm Fire. Loved every bit of it.",
      avatar: "https://up.yimg.com/ib/th?id=OIP.GZ9j-WnTz9ePnKeIYC6QVgHaGh&pid=Api&rs=1&c=1&qlt=95&w=105&h=92"
    },
    {
      id: 3,
      name: "Roronoa Zoro",
      location: "East Blue",
      quote: "You Do What You Can, The Best That You Can.... Absolutely amazing!",
      avatar: "https://up.yimg.com/ib/th?id=OIP.yhGQypJBUUnBVwgBafP6OQHaHa&pid=Api&rs=1&c=1&qlt=95&w=98&h=98"
    }
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-16 bg-[#acacac]">
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-[1px] bg-black mr-4 mb-9"></div>
          <h2 style={{ fontFamily: 'Philosopher , sans-serif' }}  className="text-3xl font-bold text-dark mb-12 text-center">What Our Travelers Say</h2>
          <div className="flex-grow h-[1px] bg-black ml-4 mb-9"></div>
   </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-dark">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }