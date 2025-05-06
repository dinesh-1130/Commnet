// export default function Navbar() {
//     return (
//       <header className="absolute top-0 left-0 w-full z-30">
//         <div className="flex items-center justify-between px-10 py-4 text-white w-full max-w-[1440px] mx-auto">
//           {/* Logo */}
//           <div className="flex items-center gap-2 text-xl font-bold">
//             <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
//             <span>COMMNET</span>
//           </div>
  
//           {/* Menu: evenly spaced using grid */}
//           <nav className="flex-1 ml-[180px]">
//             <ul className="grid grid-cols-7 gap-2 text-sm font-medium">
//               <li><a href="#" className="hover:text-yellow-400">Home</a></li>
//               <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
//               <li><a href="#" className="hover:text-yellow-400">Services</a></li>
//               <li><a href="#" className="hover:text-yellow-400">Industries</a></li>
//               <li><a href="#" className="hover:text-yellow-400">Partnership</a></li>
//               <li><a href="#" className="hover:text-yellow-400">Projects</a></li>
//               <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     );
//   }
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-30" data-aos="fade-down">
      <div className="flex items-center justify-between px-4 md:px-10 py-4 text-white max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
  <img src="/assets/COMMNET.png" alt="Logo" className="w-16 h-20 object-contain" />
  <span>COMMNET</span>
</div>

        {/* Mobile Menu Toggle */}
        <button
            className="md:hidden text-white focus:outline-none ml-[0px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="flex-1 ml-[180px]">
        <ul className="grid grid-cols-7 gap-2 text-sm font-medium">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#" className="hover:text-yellow-400">Industries</a></li>
            <li><a href="#" className="hover:text-yellow-400">Partnership</a></li>
            <li><a href="#" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
          </ul>
        </nav>
      </div>

      {/* Custom Mobile Menu (overlay style, distinct) */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 py-6 px-4 text-white space-y-4 text-base  font-medium">
          <a href="#" className="block hover:text-yellow-400">Home</a>
          <a href="#" className="block hover:text-yellow-400">About Us</a>
          <a href="#" className="block hover:text-yellow-400">Services</a>
          <a href="#" className="block hover:text-yellow-400">Industries</a>
          <a href="#" className="block hover:text-yellow-400">Partnership</a>
          <a href="#" className="block hover:text-yellow-400">Projects</a>
          <a href="#" className="block hover:text-yellow-400">Contact Us</a>
        </div>
      )}
    </header>
  );
}
