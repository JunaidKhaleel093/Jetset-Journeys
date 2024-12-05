import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <div className="min-h-screen bg-[#acacac] pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-[1px] bg-gray-300 mr-4 mb-7"></div>
          <h1 style={{ fontFamily: 'Philosopher , sans-serif' }} className="text-4xl font-bold text-dark mb-8">Privacy Policy</h1>
          <div className="flex-grow h-[1px] bg-gray-300 ml-4 mb-7"></div>
   </div>

          <div className="bg-[#d3d3d3] rounded-lg shadow-md p-8">
            <div className="prose max-w-none">
              <p className="mb-6 text-black/60">
                At Jetset Journeys, we value your privacy. This Privacy Policy outlines how we collect, use, store, and safeguard your personal information when you visit our website or use our services.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Information We Collect</h2>
              <p className="mb-6 text-black/60">
                We collect information when you interact with our website and services. This includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-black/60">
                <li>Personal details (e.g., name, email, phone number)</li>
                <li>Account information (e.g., login credentials, preferences)</li>
                <li>Payment details for booking and transactions</li>
                <li>Travel and booking preferences</li>
                <li>Interaction data (e.g., communication history, website usage)</li>
              </ul>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">How We Use Your Information</h2>
              <p className="mb-6 text-black/60">
                The information we collect is used for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-black/60">
                <li>To provide and personalize our services to you</li>
                <li>To process transactions and fulfill your bookings</li>
                <li>To communicate important updates, promotions, and travel information</li>
                <li>To enhance your experience with personalized recommendations</li>
                <li>To ensure security and prevent fraud</li>
                <li>To comply with legal requirements and industry standards</li>
              </ul>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Cookies and Tracking</h2>
              <p className="mb-6 text-black/60">
                Our website uses cookies to improve your browsing experience. Cookies are small text files stored on your device that help us analyze website traffic, remember your preferences, and optimize our content. By continuing to use our site, you consent to the use of cookies. You can manage your cookie preferences in your browser settings.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Data Protection</h2>
              <p className="mb-6 text-black/60">
                We take your data protection seriously. We employ various security measures, including encryption and secure storage, to protect your personal information from unauthorized access, alteration, or destruction. However, no system is completely secure, and we cannot guarantee the security of your data.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Your Rights</h2>
              <p className="mb-6 text-black/60">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-black/60">
                <li>Access the personal information we hold about you</li>
                <li>Request corrections to inaccurate or incomplete information</li>
                <li>Request the deletion of your data (subject to legal requirements)</li>
                <li>Object to or restrict the processing of your data</li>
                <li>Withdraw consent at any time if we are processing your data based on consent</li>
              </ul>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Changes to This Privacy Policy</h2>
              <p className="mb-6 text-black/60">
                We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. Please review this policy periodically to stay informed about how we are protecting your data.
              </p>
  
              <h2 className="text-2xl font-semibold mb-4 text-black/80">Contact Us</h2>
              <p className="mb-6 text-black/60">
                If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:junaidismail.07093@gmail.com" className="text-blue-600">@junaidkhaleel.093@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  