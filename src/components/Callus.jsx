// // src/components/CallNowElegant.jsx
// import { FaPhoneAlt } from "react-icons/fa";

// export default function CallNowElegant() {
//   return (
//     <section className="w-full bg-[#f9fafb] py-24 px-6 md:px-20 font-['Lato']">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
//         {/* Left Text */}
//         <div className="md:w-1/2 text-center md:text-left space-y-6">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//             Let’s Make <span className="text-[#008ed6]">Technology Work</span> for You
//           </h2>
//           <p className="text-gray-600 text-base">
//             Whether you're scaling infrastructure or building secure systems, our team is ready to support you.
//           </p>
//           <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#008ed6] hover:bg-[#006fb3] text-white font-semibold transition-all shadow-md">
//             <FaPhoneAlt />
//             Call Now
//           </button>
//         </div>

//         {/* Right Floating Card */}
//         <div className="md:w-1/2 w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-300">
//           <img
//             src="/assets/slide4.jpg" // make sure this is in public/assets
//             alt="Contact Visual"
//             className="w-full h-72 object-cover"
//           />
//           <div className="p-6">
//             <h3 className="text-xl font-semibold text-gray-800">Speak with a Consultant</h3>
//             <p className="text-sm text-gray-600 mt-2">
//               Real experts. Real conversations. Let’s talk solutions that deliver impact.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CallNowElegant() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-[#f9fafb] py-20 px-4 sm:px-6 md:px-20 font-['Lato']">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          data-aos="fade-right"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Let’s Make <span className="text-[#008ed6]">Technology Work</span> for You
          </h2>
          <p className="text-gray-600 text-base sm:text-[17px]">
            Whether you're scaling infrastructure or building secure systems, our team is ready to support you.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#008ed6] hover:bg-[#006fb3] text-white font-semibold transition-all shadow-md">
              <FaPhoneAlt />
              Call Now
            </button>
          </div>
        </div>

        {/* Right Floating Card */}
        <div
          className="w-full md:w-1/2 max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-300"
          data-aos="fade-left"
        >
          <img
            src="/assets/slide4.jpg"
            alt="Contact Visual"
            className="w-full h-64 sm:h-72 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Speak with a Consultant</h3>
            <p className="text-sm text-gray-600 mt-2">
              Real experts. Real conversations. Let’s talk solutions that deliver impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
