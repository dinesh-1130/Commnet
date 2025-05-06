// import {
//     FaFacebookF,
//     FaTwitter,
//     FaLinkedinIn,
//     FaMapMarkerAlt,
//     FaPhoneAlt,
//     FaEnvelope,
//   } from "react-icons/fa";
  
//   export default function Footer() {
//     return (
//       <footer className="bg-[#111] text-white font-['Lato'] px-6 lg:px-20 pt-16 pb-6 text-sm">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-12">
//           {/* Column 1: Logo & Address */}
//           <div className="space-y-4">
//             <img src="/logo.png" alt="Commnet Logo" className="w-36" />
//             <h4 className="text-white font-semibold">Global Head Office</h4>
//             <p className="text-gray-400">
//               Office No.301, Centurion Star <br />
//               Building Tower A, Port Saeed, Dubai - UAE.
//             </p>
//             <p className="flex items-center gap-2 text-gray-400">
//               <FaPhoneAlt /> +971 4-2955299
//             </p>
//             <p className="flex items-center gap-2 text-gray-400">
//               <FaPhoneAlt /> (800) 2666638
//             </p>
//             <p className="flex items-center gap-2 text-gray-400">
//               <FaEnvelope /> info@commnetsysconsult.com
//             </p>
//           </div>
  
//           {/* Column 2: Services */}
//           <div>
//             <h4 className="font-semibold mb-4 text-white">Services</h4>
//             <ul className="text-gray-400 space-y-2">
//               <li>Data Services</li>
//               <li>Network Services</li>
//               <li>Cloud Services</li>
//               <li>Data Center</li>
//               <li>Structured Cabling</li>
//               <li>IP Telephony</li>
//               <li>Access Control</li>
//               <li>CCTV Surveillance</li>
//               <li>WIFI</li>
//               <li>AV Solutions</li>
//             </ul>
//           </div>
  
//           {/* Column 3: More Services */}
//           <div>
//             <h4 className="font-semibold mb-4 text-white">Services</h4>
//             <ul className="text-gray-400 space-y-2">
//               <li>Application Security</li>
//               <li>Mobile App Security</li>
//               <li>Network Security</li>
//               <li>Information Security Consulting</li>
//               <li>Dynamic Website</li>
//               <li>E-commerce Sites</li>
//               <li>Stand Alone Software</li>
//               <li>ERP Software</li>
//               <li>Customized Software</li>
//             </ul>
//           </div>
  
//           {/* Column 4: Global Network */}
//           <div>
//             <h4 className="font-semibold mb-4 text-white">Global Network</h4>
//             <ul className="text-gray-400 space-y-2">
//               <li>Dubai, UAE</li>
//               <li>Abu Dhabi, UAE</li>
//               <li>Chennai, India</li>
//               <li>Mumbai, India</li>
//               <li>Bangalore, India</li>
//               <li>Coimbatore, India</li>
//               <li>Singapore</li>
//             </ul>
//           </div>
  
//           {/* Column 5: Social */}
//           <div>
//             <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
//             <div className="flex gap-4 text-gray-300">
//               <a href="#"><FaFacebookF className="hover:text-white" /></a>
//               <a href="#"><FaTwitter className="hover:text-white" /></a>
//               <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
//             </div>
//           </div>
//         </div>
  
//         {/* Bottom bar */}
//         <div className="text-center text-gray-500 mt-6 text-xs">
//           © {new Date().getFullYear()} Commnet Systems Consultancy LLC. All rights reserved.
//         </div>
//       </footer>
//     );
//   }
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const mobileSections = [
    {
      title: "Quick links",
      content: ["Home", "About Us", "Services", "Projects", "Contact"],
    },
    {
      title: "Top Destination",
      content: ["Dubai", "Singapore", "Maldives", "Paris"],
    },
    {
      title: "Contact Us",
      content: [
        <span key="phone1" className="flex items-center gap-2"><FaPhoneAlt /> +971 4-2955299</span>,
        <span key="phone2" className="flex items-center gap-2"><FaPhoneAlt /> (800) 2666638</span>,
        <span key="email" className="flex items-center gap-2"><FaEnvelope /> info@commnetsysconsult.com</span>,
      ],
    },
    {
      title: "Follow us",
      content: [
        <div key="social" className="flex gap-4 mt-2 text-gray-600 text-lg">
          <FaFacebookF className="hover:text-[#f97316]" />
          <FaTwitter className="hover:text-[#f97316]" />
          <FaLinkedinIn className="hover:text-[#f97316]" />
        </div>
      ],
    },
  ];

  return (
    <footer className="font-['Lato']">
      {/* Desktop Footer */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-10 bg-[#111] text-white px-6 lg:px-20 pt-16 pb-6 text-sm border-b border-gray-700">
        <div className="space-y-4" data-aos="fade-up">
          {/* <img src="/logo.png" alt="Logo" className="w-36" /> */}
          <h4 className="font-semibold">COMMNET</h4>
          <h4 className="font-semibold">Global Head Office</h4>
          <p className="text-gray-400">
            Office No.301, Centurion Star <br />
            Building Tower A, Port Saeed, Dubai - UAE.
          </p>
          <p className="flex items-center gap-2 text-gray-400"><FaPhoneAlt /> +971 4-2955299</p>
          <p className="flex items-center gap-2 text-gray-400"><FaPhoneAlt /> (800) 2666638</p>
          <p className="flex items-center gap-2 text-gray-400"><FaEnvelope /> info@commnetsysconsult.com</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Data Services</li>
            <li>Network Services</li>
            <li>Cloud Services</li>
            <li>Data Center</li>
            <li>Structured Cabling</li>
            <li>IP Telephony</li>
            <li>Access Control</li>
            <li>CCTV Surveillance</li>
            <li>WIFI</li>
            <li>AV Solutions</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="font-semibold mb-4">More Services</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Application Security</li>
            <li>Mobile App Security</li>
            <li>Network Security</li>
            <li>Information Security Consulting</li>
            <li>Dynamic Website</li>
            <li>E-commerce Sites</li>
            <li>Stand Alone Software</li>
            <li>ERP Software</li>
            <li>Customized Software</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="font-semibold mb-4">Global Network</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Dubai, UAE</li>
            <li>Abu Dhabi, UAE</li>
            <li>Chennai, India</li>
            <li>Mumbai, India</li>
            <li>Bangalore, India</li>
            <li>Coimbatore, India</li>
            <li>Singapore</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-gray-300">
            <FaFacebookF className="hover:text-white" />
            <FaTwitter className="hover:text-white" />
            <FaLinkedinIn className="hover:text-white" />
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden bg-white px-4 py-10 text-sm text-gray-800">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-28" />
        </div>

        {/* Collapsible Sections */}
        {mobileSections.map((sec, idx) => (
          <div
            key={idx}
            className="bg-gray-50 mb-3 rounded shadow-sm"
            data-aos="fade-up"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center px-5 py-3 font-semibold"
            >
              {sec.title}
              <FaChevronDown
                className={`transform transition-transform ${
                  open === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === idx && (
              <div className="px-5 pb-4 text-sm text-gray-700 space-y-2">
                {sec.content.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Copyright Bottom */}
      <div className="bg-[#111] text-center text-gray-500 py-4 text-xs">
        © {new Date().getFullYear()} Commnet Systems Consultancy LLC. All rights reserved.
      </div>
    </footer>
  );
}
