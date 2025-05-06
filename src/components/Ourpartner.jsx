// const partners = [
//     { name: "NAFFCO", src: "/assets/naffco.png" },
//     { name: "HomeCentre", src: "/assets/nbk.png" },
//     { name: "JOTUN", src: "/assets/jotun.jpg" },
//     { name: "National Bonds", src: "/assets/naffco.png" },
//     { name: "NBK", src: "/assets/nbk.png" },

//   ];
  
//   export default function OurPartners() {
//     return (
//       <section className="py-20 bg-white font-['Lato'] w-full">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//           <span className="text-[#008ed6]">Our</span> Partners
//         </h2>
  
//         <div className="max-w-8xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-center px-6">
//           {partners.map((partner, i) => (
//             <img
//               key={i}
//               src={partner.src}
//               alt={partner.name}
//               className="h-20 w-auto mx-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
//             />
//           ))}
//         </div>
//       </section>
//     );
//   }
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const partners = [
  { name: "NAFFCO", src: "/assets/naffco.png" },
  { name: "HomeCentre", src: "/assets/nbk.png" },
  { name: "JOTUN", src: "/assets/jotun.jpg" },
  { name: "National Bonds", src: "/assets/naffco.png" },
  { name: "NBK", src: "/assets/nbk.png" },
];

export default function OurPartners() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-white font-['Lato'] w-full">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        data-aos="fade-up"
      >
        <span className="text-[#008ed6]">Our</span> Partners
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 items-center justify-center px-6">
        {partners.map((partner, i) => (
          <img
            key={i}
            src={partner.src}
            alt={partner.name}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="h-20 w-auto mx-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105 transition duration-300 ease-in-out"
          />
        ))}
      </div>
    </section>
  );
}
