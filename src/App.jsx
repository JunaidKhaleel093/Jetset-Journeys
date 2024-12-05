import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedPosts from "./components/FeaturedPosts";
import PopularDestinations from "./components/PopularDestinations";
import TravelStories from "./components/TravelStories";
import TravelTips from "./components/TravelTips";
import TravelTools from "./components/TravelTools";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AffiliateDisclosures from "./pages/AffiliateDisclosures";
import EuropePost from "./pages/EuropePost";
import AsiaPost from "./pages/AsiaPost";
import BaliPost from "./pages/BaliPost";
import BangkokPost from "./pages/BangkokPost";
import BeachPost from "./pages/BeachPost";
import FoodPost from "./pages/FoodPost";
import HikesPost from "./pages/HikesPost";
import NewyorkPost from "./pages/NewyorkPost";
import ParisPost from "./pages/ParisPost";
import RoadTrips from "./pages/RoadTrips";
import SoloWomen from "./pages/SoloWomen";
import USAPost from "./pages/USAPost";
import IndiaPost from "./pages/IndiaPost";
import DubaiPost from "./pages/DubaiPost";
import AfricaPost from "./pages/AfricaPost";
import AmericaPost from "./pages/AmericaPost";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FeaturedPosts />
                  <PopularDestinations />
                  <TravelStories />
                  <TravelTips />
                  <TravelTools />
                  <Testimonials />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/affiliate" element={<AffiliateDisclosures />} />
          </Routes>

          <Routes>
            <Route path="/EuropePost" element={<EuropePost />} />
            <Route path="/AsiaPost" element={<AsiaPost />} />
            <Route path="/BaliPost" element={<BaliPost />} />
            <Route path="/BangkokPost" element={<BangkokPost />} />
            <Route path="/BeachPost" element={<BeachPost />} />
            <Route path="/FoodPost" element={<FoodPost />} />
            <Route path="/NewyorkPost" element={<NewyorkPost />} />
            <Route path="/HikesPost" element={<HikesPost />} />
            <Route path="/ParisPost" element={<ParisPost />} />
            <Route path="/SoloWomen" element={<SoloWomen />} />
            <Route path="/RoadTrips" element={<RoadTrips />} />
            <Route path="/USAPost" element={<USAPost />} />
            <Route path="/IndiaPost" element={<IndiaPost />} />
            <Route path="/DubaiPost" element={<DubaiPost />} />
            <Route path="/AfricaPost" element={<AfricaPost />} />
            <Route path="/AmericaPost" element={<AmericaPost />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Add logo
// In blog section add images 