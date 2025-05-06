// import { useState, useEffect } from "react";

// const slides = [
//   {
//     src: "/assets/slide9.jpg",
//     title: "Integration Simplified Your Communication & Networking Partner",
//   },
//   {
//     src: "/assets/slide7.jpg",
//     title: "We as Commnet are Leaders in business and technology services,helping our customer bring Tomorrow’s of work to life—today",
//   },
//   {
//     src: "/assets/slide3.jpg",
//     title: "A good vision paints a picture of a desired future state. ",
//   },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
    
//         <section className="relative w-screen h-screen font-['Lato'] overflow-hidden bg-black">
//           {slides.map((slide, idx) => (
//             <img
//               key={idx}
//               src={slide.src}
//               alt="slide"
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                 idx === current ? "opacity-100" : "opacity-0"
//               }`}
//             />
//           ))}
      
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10" />
      
//           <div className="absolute z-20 left-6 right-6 bottom-[220px] max-w-6xl mx-auto text-white text-center md:text-left">
//   <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//     {slides[current].title}
//   </h1>
//   <button className="bg-[#f4b05f] text-black px-6 py-3 font-semibold rounded shadow">
//     Learn More
//   </button>
// </div>

      
//           {/* White Card Strip */}
//           <div className="absolute bottom-[-30px] left-0 z-30 w-[72%] bg-white shadow-lg overflow-hidden">
//             <div className="py-6 left-[300px] relative flex gap-16 justify-start items-start overflow-x-auto hide-scrollbar">
//               {slides.map((slide, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => setCurrent(idx)}
//                   className="flex flex-col items-center w-[200px] cursor-pointer border-r border-gray-200 last:border-none"
//                 >
//                   <p className="text-sm text-left text-gray-800 font-medium mb-2 leading-tight w-full">
//                     {slide.title.length > 55 ? `${slide.title.slice(0, 40)}...` : slide.title}
//                   </p>
//                   <img
//                     src={slide.src}
//                     className="w-[60px] h-[60px] rounded shadow object-cover"
//                     alt="thumb"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
      
//           {/* Line Indicators OUTSIDE white card */}
//           <div className="absolute z-30 right-[420px] bottom-[200px] flex gap-3">
//             {slides.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-[2px] rounded-full transition-all duration-300 ${
//                   idx === current ? "w-[40px] bg-[#f4b05f]" : "w-[20px] bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </section>
//       );
//     }

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    src: "/assets/slide9.jpg",
    title: "Integration Simplified Your Communication & Networking Partner",
  },
  {
    src: "/assets/slide7.jpg",
    title: "We as Commnet are Leaders in business and technology services,helping our customer bring Tomorrow’s of work to life—today",
  },
  {
    src: "/assets/slide3.jpg",
    title: "A good vision paints a picture of a desired future state. ",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-screen h-screen font-['Lato'] overflow-hidden bg-black">
      {slides.map((slide, idx) => (
        <img
          key={idx}
          src={slide.src}
          alt="slide"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10" />

      {/* Title & Button Section */}
      <div
        className="absolute z-20 bottom-[200px] w-full px-4 md:px-6 max-w-6xl mx-auto text-white text-center md:text-left"
        data-aos="fade-up"
      >
        <h1 className="text-[20px] sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          {slides[current].title}
        </h1>
        <div className="flex justify-center md:justify-start">
          <button className="bg-[#f4b05f] text-black px-6 py-3 font-semibold rounded shadow">
            Learn More
          </button>
        </div>
      </div>

      {/* White Card Strip */}
      <div
        className="absolute bottom-[-30px] left-0 z-30 w-full md:w-[72%] bg-white shadow-lg overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="py-6 px-4 md:px-10 relative flex md:flex-row flex-col gap-6 md:gap-16 justify-start items-start overflow-x-auto md:overflow-visible hide-scrollbar">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className="flex flex-col items-center md:w-[200px] w-full cursor-pointer border-b md:border-r md:border-b-0 border-gray-200 last:border-none"
            >
              <p className="text-sm text-left text-gray-800 font-medium mb-2 leading-tight w-full">
                {slide.title.length > 55
                  ? `${slide.title.slice(0, 40)}...`
                  : slide.title}
              </p>
              <img
                src={slide.src}
                className="w-[60px] h-[60px] rounded shadow object-cover"
                alt="thumb"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Line Indicators */}
      <div
        className="absolute z-30 bottom-[190px] left-1/2 transform -translate-x-1/2 md:right-[420px] md:left-auto md:transform-none flex gap-3"
        data-aos="fade"
        data-aos-delay="300"
      >
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`h-[2px] rounded-full transition-all duration-300 ${
              idx === current ? "w-[40px] bg-[#f4b05f]" : "w-[20px] bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
