import { useEffect } from 'react';

export default function AffiliateDisclosures() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <div className="min-h-screen bg-[#acacac] pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-[1px] bg-black mr-4 mb-7"></div>
          <h1 style={{ fontFamily: 'Philosopher , sans-serif' }} className="text-4xl font-bold text-dark mb-8">Affiliate Disclosure</h1>
          <div className="flex-grow h-[1px] bg-black ml-4 mb-7"></div>
   </div>

          <div className="bg-[#d3d3d3] rounded-lg shadow-md p-8">
            <div className="prose max-w-none">
              <p className="mb-6 text-black/60">
                At Jetset Journeys, we believe in transparency, which is why we want to inform you about the use of affiliate links on our website. This page provides important information regarding the affiliate partnerships that help us maintain and run this site.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">What Are Affiliate Links?</h2>
              <p className="mb-6 text-black/60">
                Some of the links on this website are affiliate links, meaning that we may earn a commission if you click on the link and make a purchase or take a specific action. These affiliate links are provided at no additional cost to you. The earnings we receive from these commissions help us keep the website running and continue providing valuable content.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">How Affiliate Links Work</h2>
              <p className="mb-6 text-black/60">
                When you click on an affiliate link, it directs you to an external website where you can make a purchase or take an action. If you decide to make a purchase or engage in the activity, we may receive a small commission. This commission helps us cover the costs of maintaining the blog, creating quality content, and keeping our services free for our readers.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Our Affiliate Partnerships</h2>
              <p className="mb-6 text-black/60">
                We partner with various companies and organizations that provide services or products related to travel, such as booking platforms, gear, accommodations, and travel insurance providers. We carefully select these partners based on their relevance to the travel experience we promote, ensuring they align with the values and quality standards of Jetset Journeys.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Is There a Cost to You?</h2>
              <p className="mb-6 text-black/60">
                No, using our affiliate links comes at no extra cost to you. The price you pay for products or services remains the same, whether you click an affiliate link or not. The only difference is that we may earn a small commission for your purchase, which helps support the blog.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Our Commitment to You</h2>
              <p className="mb-6 text-black/60">
                Please know that we only recommend products, services, and brands that we genuinely believe in and that we think will add value to your travel experience. Our opinions are never influenced by affiliate relationships. We strive to provide honest, unbiased reviews and recommendations to help you make informed decisions when planning your travels.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">How We Ensure Transparency</h2>
              <p className="mb-6 text-black/60">
                We make it a priority to disclose any affiliate relationships clearly. You will find that all affiliate links are either marked with an asterisk (*) or disclosed in a clear, easy-to-understand manner within the content. We want you to be fully aware of how affiliate marketing works on our site and how it supports our ability to continue offering free content.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Your Trust Matters to Us</h2>
              <p className="mb-6 text-black/60">
                At Jetset Journeys, your trust is our priority. We are committed to providing you with valuable, honest, and accurate travel information. While affiliate marketing helps us maintain the site, our editorial content and recommendations are always independent and free of influence from our affiliate relationships.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Questions?</h2>
              <p className="mb-6 text-black/60">
                If you have any questions about our affiliate relationships or how we use affiliate links, feel free to contact us at <a href="mailto:@junaidismail.07093@gmail.com" className="text-blue-600">@junaidkhaleel.93@gmail.com</a>. We are happy to provide more information and clarify any concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  