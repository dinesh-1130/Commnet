// import { CheckCircle } from "lucide-react";

// export default function WhoWeAre() {
//   const points = [
//     "Applying Domain",
//     "Expertise In Specific Industry Segments",
//     "Utilizing A Highly-skilled Workforce",
//     "Leveraging A Proven Global Delivery Model",
//     "Implementing Structured And Scalable Quality Processes",
//     "Processes",
//     "Methodologies And Yet, Staying Cost Effective",
//   ];

//   return (
//     <section className="w-full bg-white font-['Lato'] py-16 px-6 ml-8 md:px-24">
//       <div className="flex flex-col md:flex-row items-start justify-between gap-8">
//         {/* LEFT TEXT SECTION */}
//         <div className="w-full md:w-1/2 mt-[20px] space-y-6">
//           <h2 className="text-[#008ed6] font-extrabold text-3xl md:text-4xl">WHAT WE DO</h2>
//           <p className="text-lg text-black font-medium">
//             At Commnet, we strive to deliver value through the combination of right people,
//             processes, technologies and program management solutions. Our methods include
//           </p>

//           <ul className="space-y-2 pt-2">
//             {points.map((point, idx) => (
//               <li key={idx} className="flex items-start gap-3 text-gray-700 text-[17px]">
//                 <span className="text-[#008ed6] pt-1">
//                   <CheckCircle size={18} strokeWidth={2.5} />
//                 </span>
//                 <span>{point}</span>
//               </li>
//             ))}
//           </ul>

//           <button className="mt-6 bg-[#008ed6] hover:bg-[#0072b1] text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2">
//             Know More ➞
//           </button>
//         </div>

//         {/* RIGHT IMAGE SECTION */}
//         <div className="w-full md:w-[80%]  h-[500px]">
//   <img
//     src="/assets/about-5.jpg"
//     alt="About"
//     className="w-full h-full object-cover shadow"
//   />
// </div>


//       </div>
//     </section>
//   );
// }
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhoWeAre() {
  const points = [
    "Applying Domain",
    "Expertise In Specific Industry Segments",
    "Utilizing A Highly-skilled Workforce",
    "Leveraging A Proven Global Delivery Model",
    "Implementing Structured And Scalable Quality Processes",
    "Processes",
    "Methodologies And Yet, Staying Cost Effective",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-white font-['Lato']">
      {/* --- MOBILE VIEW --- */}
      <div className="block md:hidden">
        <div className="relative h-[250px]" data-aos="fade-up">
          <img
            src="/assets/about-5.jpg"
            alt="About Mobile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold text-center px-4">
              WHAT WE DO
            </h2>
          </div>
        </div>

        <div className="bg-[#f8f9fa] px-5 py-8 space-y-5" data-aos="fade-up">
          <p className="text-[15px] text-center text-black">
            At Commnet, we deliver value through the right mix of people,
            technology & structured processes.
          </p>

          <ul className="space-y-3">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-gray-800 text-sm"
              >
                <span className="text-[#008ed6] pt-[2px]">
                  <CheckCircle size={16} strokeWidth={2.5} />
                </span>
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 flex justify-center">
            <button className="bg-[#008ed6] hover:bg-[#0072b1] text-white px-6 py-2 rounded-full font-semibold text-sm">
              Know More ➞
            </button>
          </div>
        </div>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:flex flex-row items-center justify-between gap-10 px-24 py-20">
        {/* LEFT */}
        <div className="w-1/2 space-y-6" data-aos="fade-right">
          <h2 className="text-[#008ed6] font-extrabold text-4xl">
            WHAT WE DO
          </h2>
          <p className="text-lg text-black font-medium">
            At Commnet, we strive to deliver value through the combination of
            right people, processes, technologies and program management
            solutions. Our methods include
          </p>

          <ul className="space-y-3">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-700 text-[17px]"
              >
                <span className="text-[#008ed6] pt-1">
                  <CheckCircle size={18} strokeWidth={2.5} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <button className="mt-6 bg-[#008ed6] hover:bg-[#0072b1] text-white px-6 py-3 rounded-full font-semibold">
            Know More ➞
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 h-[500px]" data-aos="fade-left">
          <img
            src="/assets/about-5.jpg"
            alt="About"
            className="w-full h-full object-cover rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}
