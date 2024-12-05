import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#acacac] text-balck/80 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex justify-center space-x-4 mb-8">
        <a 
  href="https://x.com/JunaidKhaleel96" 
  className="text-black/70 hover:text-gray-600 transition-colors"
  target="_blank" 
  rel="noopener noreferrer"
>
  <FiTwitter size={24} />
</a>
<a 
  href="https://www.instagram.com/mohammed_junaid_khaleel" 
  className="text-black/70 hover:text-gray-600 transition-colors"
  target="_blank" 
  rel="noopener noreferrer"
>
  <FiInstagram size={24} />
</a>
<a 
  href="mailto:junaidkhaleel.093@gmail.com" 
  className="text-black/70 hover:text-gray-600 transition-colors"
>
  <FiMail size={24} />
</a>
<a 
  href="https://github.com/JunaidKhaleel093" 
  className="text-black/70 hover:text-gray-600 transition-colors"
  target="_blank" 
  rel="noopener noreferrer"
>
  <FiGithub size={24} />
</a>
<a 
  href="https://www.linkedin.com/in/junaidkhaleel093" 
  className="text-black/70 hover:text-gray-600 transition-colors"
  target="_blank" 
  rel="noopener noreferrer"
>
  <FiLinkedin size={24} />
</a>

         
        </div>
        <div className="text-center text-black/80 mb-4">
          <p>&copy; JunaidKhaleel {new Date().getFullYear()}</p>
          <Link to="/affiliate" className="text-black/70 hover:underline mx-2 mt-5">Affiliate Disclosures</Link>
          <Link to="/privacy" className="text-black/70 hover:underline mx-2 mt-5">Privacy Policy</Link>
          <Link to="/terms" className="text-black/70 hover:underline mx-2 mt-5">Terms Of Use</Link>
        </div>

        <p className="text-center text-sm italic text-black/40">
        Explore the world with us! Our travel blog brings you inspiring stories, essential tips, and breathtaking destinations to fuel your Jetset Journeys. From hidden gems to popular landmarks, we share authentic travel experiences and expert guidance to make your journeys unforgettable. Follow us for regular updates, and let's turn your travel dreams into reality!......
        </p>
      </div>
    </footer>
  );
}
