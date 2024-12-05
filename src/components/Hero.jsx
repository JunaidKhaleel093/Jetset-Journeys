import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2023/04/30/161071-822582138_large.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1
            style={{ fontFamily: "Alegreya, sans-serif" }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Wander, Explore, Discover  With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-lg">
          Step beyond the ordinary and embrace the thrill of discovery. Journey to breathtaking destinations, uncover hidden gems, and let your adventurous spirit guide the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blog"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full inline-block transition duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Reading
            </Link>
            <Link
              to="/destinations"
              className="bg-white hover:bg-gray-100 text-dark font-bold py-3 px-8 rounded-full inline-block transition duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              View Destinations
            </Link>
          </div>
        </div>
      </div>

      {/* Call-to-Action Video Section */}
      <div className="absolute bottom-0 w-full text-center py-4 bg-gradient-to-t from-black via-transparent to-transparent">
        <h2
          className="text-2xl md:text-3xl font-semibold text-white mb-2"
          style={{ fontFamily: "Alegreya, sans-serif" }}
        >
          Watch Our Journey
        </h2>
        <p>▼</p>
      </div>
    </div>
  );
}
