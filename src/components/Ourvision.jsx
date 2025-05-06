// // src/pages/WhoWeAre.jsx
// import { FaUserShield, FaTools, FaClock, FaWifi, FaShieldAlt } from "react-icons/fa";

// export default function WhoWeAre() {
//   const highlights = [
//     { icon: <FaUserShield />, title: "Skilled Employees", value: "100%" },
//     { icon: <FaTools />, title: "Fully Equipped", value: "100%" },
//     { icon: <FaClock />, title: "Availability", value: "100%" },
//     { icon: <FaShieldAlt />, title: "Cyber Security", value: "100%" },
//     { icon: <FaWifi />, title: "Maintenance Free", value: "100%" },
//   ];

//   return (
//     <section className="bg-[#0f172a] text-white font-['Lato'] py-28 px-6 md:px-20 overflow-hidden">
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
//         {/* LEFT – Intro & Statement */}
//         <div className="space-y-8">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             We’re <span className="text-[#00c2ff]">redefining</span> what technology can do
//           </h2>
//           <p className="text-gray-300 text-[15.5px] leading-relaxed">
//             Commnet combines scalable tech stacks, industry focus, and human-driven
//             intelligence to help businesses grow securely, sustainably, and smartly.
//           </p>

//           <div className="grid grid-cols-2 gap-6 mt-8">
//             <div>
//               <h4 className="text-[#00c2ff] font-bold text-xl">Our Vision</h4>
//               <p className="text-sm text-gray-400 mt-1">
//                 To lead global transformation through next-gen connectivity and
//                 digital-first innovation.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-[#00c2ff] font-bold text-xl">Our Mission</h4>
//               <p className="text-sm text-gray-400 mt-1">
//                 Empower clients by delivering secure, adaptive, cost-effective digital
//                 solutions.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT – Glass effect highlight cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
//           {highlights.map((item, i) => (
//             <div
//               key={i}
//               className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 flex flex-col gap-2 shadow-xl hover:scale-[1.03] transition"
//             >
//               <div className="text-[#00c2ff] text-2xl">{item.icon}</div>
//               <h4 className="font-semibold text-white">{item.title}</h4>
//               <p className="text-xl font-bold text-[#00c2ff]">{item.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect } from "react";
import { FaUserShield, FaTools, FaClock, FaWifi, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhoWeAre() {
  const highlights = [
    { icon: <FaUserShield />, title: "Skilled Employees", value: "100%" },
    { icon: <FaTools />, title: "Fully Equipped", value: "100%" },
    { icon: <FaClock />, title: "Availability", value: "100%" },
    { icon: <FaShieldAlt />, title: "Cyber Security", value: "100%" },
    { icon: <FaWifi />, title: "Maintenance Free", value: "100%" },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#0f172a] text-white font-['Lato'] py-20 px-4 sm:px-6 md:px-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT – Intro & Statement */}
        <div className="space-y-8" data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-center lg:text-left">
            We’re <span className="text-[#00c2ff]">redefining</span> what technology can do
          </h2>
          <p className="text-gray-300 text-[15.5px] leading-relaxed text-center lg:text-left">
            Commnet combines scalable tech stacks, industry focus, and human-driven
            intelligence to help businesses grow securely, sustainably, and smartly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div>
              <h4 className="text-[#00c2ff] font-bold text-xl">Our Vision</h4>
              <p className="text-sm text-gray-400 mt-1">
                To lead global transformation through next-gen connectivity and
                digital-first innovation.
              </p>
            </div>
            <div>
              <h4 className="text-[#00c2ff] font-bold text-xl">Our Mission</h4>
              <p className="text-sm text-gray-400 mt-1">
                Empower clients by delivering secure, adaptive, cost-effective digital
                solutions.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative" data-aos="fade-left">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 flex flex-col gap-2 shadow-xl hover:scale-[1.03] transition"
            >
              <div className="text-[#00c2ff] text-2xl">{item.icon}</div>
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="text-xl font-bold text-[#00c2ff]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
