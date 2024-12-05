import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <div className="min-h-screen bg-[#acacac] pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-[1px] bg-gray-300 mr-4 mb-7"></div>
          <h1 style={{ fontFamily: 'Philosopher , sans-serif' }} className="text-4xl font-bold text-dark mb-8">Terms of Service</h1>
          
   <div className="flex-grow h-[1px] bg-gray-300 ml-4 mb-7"></div>
   </div>

          <div className="bg-[#d3d3d3] rounded-lg shadow-md p-8">
            <div className="prose max-w-none">
              <p className="mb-6 text-black/60">
                Welcome to Jetset Journeys. By accessing our website and services, you agree to these Terms of Service.
              </p>
  
              <h2 className="text-2xl text-black/80 font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-6 text-black/60">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
  
              <h2 className="text-2xl text-black/80 font-semibold mb-4">2. Use License</h2>
              <p className="mb-6 text-black/60">
                Permission is granted to temporarily download one copy of the materials (information or software) on Jetset Journeys's website for personal, non-commercial transitory viewing only.
              </p>
  
              <h2 className="text-2xl text-black/80 font-semibold mb-4">3. User Responsibilities</h2>
              <ul className="list-disc text-black/60 pl-6 mb-6">
                <li>Provide accurate information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws</li>
                <li>Respect other users' rights</li>
              </ul>
  
              <h2 className="text-2xl text-black/80 font-semibold mb-4">4. Limitations</h2>
              <p className="mb-6 text-black/60">
                Jetset Journeys shall not be held liable for any damages that result from the use of, or inability to use, the materials on this website.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }