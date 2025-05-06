// // src/pages/OurServices.jsx
// import {
//     FaServer,
//     FaShieldAlt,
//     FaNetworkWired,
//     FaBolt,
//     FaVideo,
//     FaLaptopCode,
//     FaCogs,
//     FaGlobe,
//     FaLock,
//     FaDatabase,
//     FaUserShield,
//   } from "react-icons/fa";
  
//   const services = [
//     {
//       icon: <FaServer size={28} />,
//       title: "Enterprise Systems Group",
//       details: ["Data Services", "Network Services", "Cloud Services"],
//     },
//     {
//       icon: <FaShieldAlt size={28} />,
//       title: "Information Security",
//       details: [
//         "Application Security",
//         "Mobile Application",
//         "Network Security",
//         "Information Security Consulting",
//       ],
//     },
//     {
//       icon: <FaNetworkWired size={28} />,
//       title: "IoT Services",
//       details: [
//         "Flexible Deployment",
//         "Multiple Connections",
//         "Intelligent Management",
//         "Data Security",
//         "Open Ecosystem",
//       ],
//     },
//     {
//       icon: <FaBolt size={28} />,
//       title: "Power Solutions",
//       details: ["UPS", "Inverter", "Generator", "Stabilizer", "Solar System"],
//     },
//     {
//       icon: <FaVideo size={28} />,
//       title: "AV Solutions",
//       details: [
//         "Intelligent Video Solutions for Education & Law",
//         "Command & Control Centers",
//         "Theaters and Multi-purpose Halls",
//       ],
//     },
//     {
//       icon: <FaUserShield size={28} />,
//       title: "Professional IT Services",
//       details: [
//         "IT Staffing",
//         "Project Staffing",
//         "Contract to Hire",
//         "Rebadging",
//         "CPO",
//       ],
//     },
//     {
//       icon: <FaCogs size={28} />,
//       title: "Infrastructure Systems Group",
//       details: [
//         "Data Center",
//         "SMATV/IPTV",
//         "Wifi Solutions",
//         "IP Telephony",
//         "Structured Cabling",
//       ],
//     },
//     {
//       icon: <FaGlobe size={28} />,
//       title: "Website Development",
//       details: [
//         "Static & Dynamic Websites",
//         "WordPress & E-commerce",
//         "Business Mail",
//         "Social Media Marketing",
//       ],
//     },
//     {
//       icon: <FaLaptopCode size={28} />,
//       title: "Software Development",
//       details: [
//         "Stand-alone Software",
//         "CRM/ERP Software",
//         "Customized Software",
//       ],
//     },
//     {
//       icon: <FaLock size={28} />,
//       title: "Security Systems",
//       details: [
//         "CCTV Solutions",
//         "Access Control",
//         "Gate Barrier",
//         "Bollards",
//         "AV Intercom",
//       ],
//     },
//     {
//       icon: <FaDatabase size={28} />,
//       title: "Cyber Security Services",
//       details: [
//         "ISO 27001 Implementation",
//         "GDPR Compliance",
//         "Vulnerability Assessment",
//         "Endpoint Security",
//         "SIEM/SOC/MSSP",
//       ],
//     },
//   ];
  
//   export default function OurServices() {
//     return (
//       <div className="flex h-[100vh] font-['Lato']">
//         {/* Left Fixed Image */}
//         <div className="w-1/3 min-w-[650px] ml-7 mt-16 bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('/assets/services.jpg')" }}></div>
  
//         {/* Right Scrollable Content */}
//         <div className="w-full md:w-2/3 overflow-y-scroll bg-[#f9fafb] p-8">
//           <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
//             <span className="text-[#008ed6]">Our</span> Core Services
//           </h2>
  
//           {/* Cards in Two Rows */}
//           <div className="flex flex-wrap gap-6 justify-center">
//             {services.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="w-[360px] bg-white shadow-md hover:shadow-xl p-6 rounded-xl transition-all duration-300"
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <div className="text-[#008ed6] mb-3">{item.icon}</div>
//                   <h3 className="text-xl font-bold text-[#e63946] mb-3">{item.title}</h3>
//                   <ul className="text-sm text-gray-700 space-y-1">
//                     {item.details.map((point, i) => (
//                       <li key={i}>• {point}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
import { useEffect } from "react";
import {
  FaServer,
  FaShieldAlt,
  FaNetworkWired,
  FaBolt,
  FaVideo,
  FaLaptopCode,
  FaCogs,
  FaGlobe,
  FaLock,
  FaDatabase,
  FaUserShield,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <FaServer size={28} />,
    title: "Enterprise Systems Group",
    details: ["Data Services", "Network Services", "Cloud Services"],
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Information Security",
    details: [
      "Application Security",
      "Mobile Application",
      "Network Security",
      "Information Security Consulting",
    ],
  },
  {
    icon: <FaNetworkWired size={28} />,
    title: "IoT Services",
    details: [
      "Flexible Deployment",
      "Multiple Connections",
      "Intelligent Management",
      "Data Security",
      "Open Ecosystem",
    ],
  },
  {
    icon: <FaBolt size={28} />,
    title: "Power Solutions",
    details: ["UPS", "Inverter", "Generator", "Stabilizer", "Solar System"],
  },
  {
    icon: <FaVideo size={28} />,
    title: "AV Solutions",
    details: [
      "Intelligent Video Solutions for Education & Law",
      "Command & Control Centers",
      "Theaters and Multi-purpose Halls",
    ],
  },
  {
    icon: <FaUserShield size={28} />,
    title: "Professional IT Services",
    details: [
      "IT Staffing",
      "Project Staffing",
      "Contract to Hire",
      "Rebadging",
      "CPO",
    ],
  },
  {
    icon: <FaCogs size={28} />,
    title: "Infrastructure Systems Group",
    details: [
      "Data Center",
      "SMATV/IPTV",
      "Wifi Solutions",
      "IP Telephony",
      "Structured Cabling",
    ],
  },
  {
    icon: <FaGlobe size={28} />,
    title: "Website Development",
    details: [
      "Static & Dynamic Websites",
      "WordPress & E-commerce",
      "Business Mail",
      "Social Media Marketing",
    ],
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "Software Development",
    details: [
      "Stand-alone Software",
      "CRM/ERP Software",
      "Customized Software",
    ],
  },
  {
    icon: <FaLock size={28} />,
    title: "Security Systems",
    details: [
      "CCTV Solutions",
      "Access Control",
      "Gate Barrier",
      "Bollards",
      "AV Intercom",
    ],
  },
  {
    icon: <FaDatabase size={28} />,
    title: "Cyber Security Services",
    details: [
      "ISO 27001 Implementation",
      "GDPR Compliance",
      "Vulnerability Assessment",
      "Endpoint Security",
      "SIEM/SOC/MSSP",
    ],
  },
];

export default function OurServices() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="flex h-[100vh] font-['Lato'] flex-col md:flex-row">
      {/* Left Fixed Image (unchanged) */}
      <div
        className="w-1/3 min-w-[650px] ml-7 mt-16 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/assets/services.jpg')" }}
      ></div>

      {/* Right Scrollable Content (unchanged layout) */}
      <div className="w-full md:w-2/3 overflow-y-scroll bg-[#f9fafb] p-4 sm:p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          <span className="text-[#008ed6]">Our</span> Core Services
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[360px] bg-white shadow-md hover:shadow-xl p-6 rounded-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-[#008ed6] mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#e63946] mb-3">
                  {item.title}
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  {item.details.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
