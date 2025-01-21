import React, { useState } from "react";
import headerLogo from '../../utils/longSitelogoWhite.png';

const Navbar=()=>{
    const [menuOpen,setMenuOpen]=useState(false);
    return(
       <div className="w-full h-20 shadow-md font-serif flex justify-between items-center px-10 md:px-28 ">  

          <a href="" className="flex items-center w-36">
                     <img src={headerLogo} alt="Logo" className="" />
          </a>

        <div className="flex gap-10">
          <nav className="md:block hidden">
              <ul className="flex gap-4">
                  <li><a href="">Home</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Carrer</a></li>
                  <li><a href="">Home</a></li>
              </ul>
          </nav>

        <a href="" className="bg-blue-500 px-5 py-1 rounded-md cursor-pointer text-white text-center">Logout</a>
        </div>
       </div>

//     <div className="sticky top-0 z-50 h-20 w-full flex justify-between items-center px-4 md:px-20 bg-white shadow-md">
//   {/* Logo Section */}
//   <a href="#" className="flex items-center">
//     <img src={headerLogo} alt="Logo" className="w-24 md:w-36 object-contain" />
//   </a>

//   {/* Navigation Section */}
//   <div className="hidden md:flex items-center gap-6 font-serif text-lg">
//     <a href="#" className="hover:text-blue-600 transition">Home</a>
//     <a href="#" className="hover:text-blue-600 transition">Contact</a>
//     <a href="#" className="hover:text-blue-600 transition">Career</a>
//     <a href="#" className="hover:text-blue-600 transition">Projects</a>
//     <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition">
//       Logout
//     </button>
//   </div>

//   {/* Mobile Menu Button */}
//   <button
//     className="md:hidden text-gray-700 focus:outline-none"
//     onClick={() => setMenuOpen(!menuOpen)}
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="currentColor"
//       className="w-8 h-8"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M4 6h16M4 12h16m-7 6h7"
//       />
//     </svg>
//   </button>

//   {/* Mobile Menu (Dropdown) */}
//   <div
//   className={`absolute top-20 right-0 w-full bg-white shadow-lg md:hidden transform transition-transform duration-1000 ${
//     menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
//   }`}
// >
//   <div className="flex flex-col items-center gap-4 py-4 font-serif text-lg">
//     <a href="#" className="hover:text-blue-600 transition">Home</a>
//     <a href="#" className="hover:text-blue-600 transition">Contact</a>
//     <a href="#" className="hover:text-blue-600 transition">Career</a>
//     <a href="#" className="hover:text-blue-600 transition">Projects</a>
//     <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//       Logout
//     </button>
//   </div>
// </div>

//     </div>

    )
}

export default Navbar;