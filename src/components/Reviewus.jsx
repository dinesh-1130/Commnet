// import { useState } from "react";
// import { FaUserCircle, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Mohammad Raffi. A",
//     role: "Senior IT Consultant, Jotun UAE Ltd.",
//     review:
//       "Commnet is our trusted partner in Enterprise Network to ensure high availability and deliver quality service to users on time with their expert delivery team.",
//   },
//   {
//     name: "Sandip Chhabra",
//     role: "Founder – Goodlife Technologies",
//     review:
//       "Commnet accepted the challenge and worked as a team player. We’ve completed several projects successfully with absolute customer satisfaction.",
//   },
//   {
//     name: "Ayesha K.",
//     role: "IT Director, TechInnovate",
//     review:
//       "They handled our infrastructure upgrades smoothly, with full transparency and on-time delivery. Highly recommended!",
//   },
// ];

// export default function ReviewCarousel() {
//   const [current, setCurrent] = useState(0);

//   const prev = () =>
//     setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   const next = () =>
//     setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

//   return (
//     <section className="bg-gradient-to-br from-white to-[#f5f7fa] py-16 px-6 font-['Lato']">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-2">
//           <span className="text-[#008ed6]">Our</span> Clients Say
//         </h2>
//         <div className="h-1 w-24 mx-auto bg-[#008ed6] rounded-full mb-10" />

//         <div className="relative bg-white rounded-xl shadow-xl p-8 max-w-3xl mx-auto">
//           <div className="text-[#008ed6] mb-4">
//             <FaUserCircle size={60} className="mx-auto" />
//           </div>
//           <h3 className="text-xl font-bold text-[#008ed6]">
//             {testimonials[current].name}
//           </h3>
//           <p className="text-sm text-gray-500 mb-3">{testimonials[current].role}</p>
//           <div className="flex justify-center text-yellow-400 mb-4">
//             {[...Array(5)].map((_, idx) => (
//               <FaStar key={idx} />
//             ))}
//           </div>
//           <p className="text-gray-700 text-[16px] leading-relaxed max-w-xl mx-auto">
//             “{testimonials[current].review}”
//           </p>

//           <div className="absolute left-4 top-1/2 -translate-y-1/2">
//             <button
//               onClick={prev}
//               className="p-3 bg-gray-100 hover:bg-[#008ed6] hover:text-white rounded-full transition"
//             >
//               <FaArrowLeft />
//             </button>
//           </div>
//           <div className="absolute right-4 top-1/2 -translate-y-1/2">
//             <button
//               onClick={next}
//               className="p-3 bg-gray-100 hover:bg-[#008ed6] hover:text-white rounded-full transition"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-center mt-6 space-x-2">
//           {testimonials.map((_, idx) => (
//             <div
//               key={idx}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 idx === current ? "bg-[#008ed6]" : "bg-gray-300"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { FaUserCircle, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Mohammad Raffi. A",
    role: "Senior IT Consultant, Jotun UAE Ltd.",
    review:
      "Commnet is our trusted partner in Enterprise Network to ensure high availability and deliver quality service to users on time with their expert delivery team.",
  },
  {
    name: "Sandip Chhabra",
    role: "Founder – Goodlife Technologies",
    review:
      "Commnet accepted the challenge and worked as a team player. We’ve completed several projects successfully with absolute customer satisfaction.",
  },
  {
    name: "Ayesha K.",
    role: "IT Director, TechInnovate",
    review:
      "They handled our infrastructure upgrades smoothly, with full transparency and on-time delivery. Highly recommended!",
  },
];

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-white to-[#f5f7fa] py-16 px-4 sm:px-6 font-['Lato']">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"
          data-aos="fade-up"
        >
          <span className="text-[#008ed6]">Our</span> Clients Say
        </h2>
        <div
          className="h-1 w-24 mx-auto bg-[#008ed6] rounded-full mb-10"
          data-aos="fade-up"
        />

        <div
          className="relative bg-white rounded-xl shadow-xl p-6 sm:p-8 max-w-3xl mx-auto"
          data-aos="fade-in"
        >
          <div className="text-[#008ed6] mb-4">
            <FaUserCircle size={60} className="mx-auto" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#008ed6]">
            {testimonials[current].name}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{testimonials[current].role}</p>
          <div className="flex justify-center text-yellow-400 mb-4">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </div>
          <p className="text-gray-700 text-[15px] sm:text-[16px] leading-relaxed max-w-xl mx-auto">
            “{testimonials[current].review}”
          </p>

          {/* Navigation Buttons */}
          <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2">
            <button
              onClick={prev}
              className="p-2 sm:p-3 bg-gray-100 hover:bg-[#008ed6] hover:text-white rounded-full transition"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={next}
              className="p-2 sm:p-3 bg-gray-100 hover:bg-[#008ed6] hover:text-white rounded-full transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-[#008ed6]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
