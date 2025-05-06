// // src/pages/IndustriesWeWork.jsx
// import {
//     FaUniversity,
//     FaBolt,
//     FaBalanceScale,
//     FaShoppingCart,
//     FaProjectDiagram,
//     FaDatabase,
//   } from "react-icons/fa";
  
//   const industries = [
//     {
//       icon: <FaUniversity size={28} />,
//       title: "Banking & Financial",
//       desc: "The Banking, Financial Services and Insurance sector is undergoing a rapid transformation today.",
//     },
//     {
//       icon: <FaBolt size={28} />,
//       title: "Energy & Utilities",
//       desc: "Change is the key driver for new technology acquisition & adoption in organizations.",
//     },
//     {
//       icon: <FaBalanceScale size={28} />,
//       title: "Public Sector & Government",
//       desc: "Cloud empowers enterprises to improve their IT responsiveness, resource utilization.",
//     },
//     {
//       icon: <FaShoppingCart size={28} />,
//       title: "Retail & Consumer",
//       desc: "Ideal platform to Provision, Configure, Secure, Monitor And Manage your applications.",
//     },
//     {
//       icon: <FaProjectDiagram size={28} />,
//       title: "Technology",
//       desc: "Ideal platform to Provision, Configure, Secure, Monitor And Manage your applications.",
//     },
//     {
//       icon: <FaDatabase size={28} />,
//       title: "Private Workstations",
//       desc: "Cloud empowers enterprises to improve their IT responsiveness, resource utilization.",
//     },
//   ];
  
//   export default function IndustriesWeWork() {
//     return (
//       <section className="py-24 px-6 md:px-24 bg-gradient-to-br from-[#e0f2ff] to-[#ffffff] font-['Lato']">
//         <h2 className="text-center text-4xl font-extrabold mb-16 text-gray-800">
//           <span className="text-[#008ed6]">Industries</span> We Work
//         </h2>
  
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
//           {industries.map((item, idx) => (
//             <div
//               key={idx}
//               className="relative group p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300"
//             >
//               <div className="absolute -top-6 left-6 w-12 h-12 bg-[#008ed6]/10 text-[#008ed6] flex items-center justify-center rounded-xl shadow">
//                 {item.icon}
//               </div>
//               <div className="mt-8">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
//                 <a
//                   href="#"
//                   className="inline-block text-[#008ed6] text-sm font-semibold group-hover:underline"
//                 >
//                   Learn More →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
import { useEffect } from "react";
import {
  FaUniversity,
  FaBolt,
  FaBalanceScale,
  FaShoppingCart,
  FaProjectDiagram,
  FaDatabase,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const industries = [
  {
    icon: <FaUniversity size={28} />,
    title: "Banking & Financial",
    desc: "The Banking, Financial Services and Insurance sector is undergoing a rapid transformation today.",
  },
  {
    icon: <FaBolt size={28} />,
    title: "Energy & Utilities",
    desc: "Change is the key driver for new technology acquisition & adoption in organizations.",
  },
  {
    icon: <FaBalanceScale size={28} />,
    title: "Public Sector & Government",
    desc: "Cloud empowers enterprises to improve their IT responsiveness, resource utilization.",
  },
  {
    icon: <FaShoppingCart size={28} />,
    title: "Retail & Consumer",
    desc: "Ideal platform to Provision, Configure, Secure, Monitor And Manage your applications.",
  },
  {
    icon: <FaProjectDiagram size={28} />,
    title: "Technology",
    desc: "Ideal platform to Provision, Configure, Secure, Monitor And Manage your applications.",
  },
  {
    icon: <FaDatabase size={28} />,
    title: "Private Workstations",
    desc: "Cloud empowers enterprises to improve their IT responsiveness, resource utilization.",
  },
];

export default function IndustriesWeWork() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-24 bg-gradient-to-br from-[#e0f2ff] to-[#ffffff] font-['Lato']">
      <h2
        className="text-center text-3xl sm:text-4xl font-extrabold mb-12 sm:mb-16 text-gray-800"
        data-aos="fade-up"
      >
        <span className="text-[#008ed6]">Industries</span> We Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="relative group p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="absolute -top-6 left-6 w-12 h-12 bg-[#008ed6]/10 text-[#008ed6] flex items-center justify-center rounded-xl shadow">
              {item.icon}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
              <a
                href="#"
                className="inline-block text-[#008ed6] text-sm font-semibold group-hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
