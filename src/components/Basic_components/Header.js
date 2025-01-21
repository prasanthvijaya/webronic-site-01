import React, { useState,useEffect, use } from 'react';
import headerLogo from '../../utils/longSitelogoWhite.png';
import gloab from '../../utils/globe.svg';
import experience  from '../../utils/experience-design.svg';
import enterprisemodernization from '../../utils/enterprise-modernization.svg';
import digitaltransformation from '../../utils/digital-transformation.svg';
import mvp from '../../utils/mvp.svg';
import genai from '../../utils/gen-ai.svg';
import reactLog from '../../utils/reactLog.webp';
import nextJS from '../../utils/nextJS.webp';
import nodeJS from '../../utils/nodeJS.webp';
// import newphplogo from '../../utils/new-php-logo.svg';
import iosLOGO from '../../utils/iosLOGO.png';
import androidLogo from '../../utils/androidLogo.png';
import DynamoDB from '../../utils/DynamoDB.png';
import wordPresss from '../../utils/wordPresss.png';
import joinUS from '../../utils/join-us.svg';
import leaders from '../../utils/leaders.svg';
import team from '../../utils/team.svg';
import culture from '../../utils/culture.svg';
import aboutUS from '../../utils/about-us.svg';
import news from '../../utils/news.svg';
import meetups from '../../utils/meetups.svg';
import technology from '../../utils/technology.svg';
import business from '../../utils/business.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

      const whatWeDo = [
        { text: 'Website Designing', icon: digitaltransformation },
        { text: 'Website Redesigning & Maintenance', icon: enterprisemodernization },
        { text: 'Android App Developing', icon: experience },
        { text: 'E-Learning', icon: mvp },
        { text: 'Search Engine Optimization', icon: genai },
        { text: 'Content Management System', icon: genai },
        { text: 'Domain (Web Address) Registration', icon: genai },
      ];

     const technologies = [
        { text: 'React', icon: reactLog },
        { text: 'Next.js', icon: nextJS },
        { text: 'PHP', icon: nodeJS },
        { text: 'iOS', icon: iosLOGO },
        { text: 'Node.js', icon: nodeJS },
        { text: 'Android', icon: androidLogo },
        { text: 'Dynamo DB', icon: DynamoDB },
        { text: 'wordpress', icon: wordPresss },
      ];
      
      const aboutUs = [
        { text: 'About Us', icon: aboutUS },
        { text: 'Team', icon: team },
        { text: 'Leaders', icon: leaders },
        { text: 'Join Us', icon: joinUS },
        { text: 'Culture', icon: culture },
      ];
      
      const ourWork = [
        'FP Analyzer',
        'Lean App',
        'SS Makers',
        'Laughter Dental Clinic',
        'Bharadwaj Institute',
        'Sahyadri - Topup Honey',
      ];

       const Insights = [
          { text: 'Business', icon: business },
          { text: 'Technology', icon: technology },
          { text: 'Events', icon: meetups },
          { text: 'News', icon: news },
        ];

      const menuContent = {
        whatWeDo: (
          <div className="grid grid-cols-4 gap-x-3 gap-y-4">
            {whatWeDo.map((item) => (
              <div
                key={item.text}
                className="flex gap-2 items-center px-4 cursor-pointer hover:bg-gray-200 rounded-md py-1"
              >
                <img src={item.icon} alt={item.text} className="h-4 w-4" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ),

        ourWork: (
          <div className="grid grid-cols-4 gap-x-3 gap-y-4">
            {ourWork.map((item, index) => (
              <div key={index} className="flex gap-2 items-center px-4 cursor-pointer hover:bg-gray-200 rounded-md py-4">
                <span>{item}</span>
              </div>
            ))}
          </div>
        ),

        technologies: (
          <div className="grid grid-cols-4 gap-x-3 gap-y-4">
            {technologies.map((item) => (
              <div
                key={item.text}
                className="flex gap-2 items-center px-4 cursor-pointer hover:bg-gray-200 rounded-md py-4"
              >
                <img src={item.icon} alt={item.text} className="h-6 w-6" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ),

        aboutUs: (
          <div className="grid grid-cols-4 gap-x-3 gap-y-4">
            {aboutUs.map((item) => (
              <div
                key={item.text}
                className="flex gap-2 items-center px-4 cursor-pointer hover:bg-gray-200 rounded-md py-4"
              >
                <img src={item.icon} alt={item.text} className="h-6 w-6" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ),

        Insights: (
          <div className="grid grid-cols-4 gap-2">
            {Insights.map((item) => (
              <div
                key={item.text}
                className="flex gap-2 items-center px-4 cursor-pointer hover:bg-gray-200 rounded-md">
                <img src={item.icon} alt={item.text} className="h-6 w-6" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ),
      };


  // Handle menu clicks
  const handleMenuClick = (menu) => {
    console.log(menu);
    console.log(activeMenu);
    setActiveMenu((prevMenu) => (prevMenu === menu ? "" : menu));
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      //  <div className="h-20 sticky top-0 flex flex-row border-b-2 z-50 w-full bg-white">
      //   <header className="md:px-5 lg:px-28 w-full">
      //     <div className="flex justify-between h-full w-full md:gap-x-5 lg:gap-10">

      //       <div className="flex justify-center flex-col">
      //         <a href="" className='md:w-24 lg:w-32'>
      //           <img src={headerLogo} alt="Logo" className="h-10 object-contain" />
      //         </a>
      //       </div>

      //       <nav className=''>
      //         <ul className="flex items-center justify-between md:gap-x-2 lg:gap-x-4 h-full">
      //           <li>
      //             <button
      //               className="text-black-50 text-lg group text-nowrap hover:text-primary flex gap-2 items-center font-normal"
      //               onClick={() => handleMenuClick("whatWeDo")}
      //             >
      //               What We Do
      //               <FontAwesomeIcon
      //                 icon={faAngleDown}
      //                 className={`transition-transform ${activeMenu === "whatWeDo" ? "rotate-180" : ""}`}
      //               />
      //             </button>
      //           </li>
      //           <li>
      //             <button
      //               className="text-black-50 text-lg group text-nowrap hover:text-primary flex gap-x-2 items-center font-normal"
      //               onClick={() => handleMenuClick("ourWork")}
      //             >
      //               Our Work
      //               <FontAwesomeIcon
      //                 icon={faAngleDown}
      //                 className={`transition-transform ${activeMenu === "ourWork" ? "rotate-180" : ""}`}
      //               />
      //             </button>
      //           </li>
      //           <li>
      //             <button
      //               className="text-black-50 text-lg group text-nowrap hover:text-primary flex gap-2 items-center font-normal"
      //               onClick={() => h
      // andleMenuClick("technologies")}
      //             >
      //               Technologies
      //               <FontAwesomeIcon
      //                 icon={faAngleDown}
      //                 className={`transition-transform ${activeMenu === "technologies" ? "rotate-180" : ""}`}
      //               />
      //             </button>
      //           </li>
      //           <li>
      //             <button
      //               className="text-black-50 text-lg group text-nowrap hover:text-primary flex gap-2 items-center font-normal"
      //               onClick={() => handleMenuClick("aboutUs")}
      //             >
      //               About Us
      //               <FontAwesomeIcon
      //                 icon={faAngleDown}
      //                 className={`transition-transform ${activeMenu === "aboutUs" ? "rotate-180" : ""}`}
      //               />
      //             </button>
      //           </li>
      //           {/* <li>
      //             <button
      //               className="text-black-50 text-lg group text-nowrap hover:text-primary flex gap-2 items-center font-normal"
      //               onClick={() => handleMenuClick("insights")}
      //             >
      //               Insights
      //               <FontAwesomeIcon
      //                 icon={faAngleDown}
      //                 className={`transition-transform ${activeMenu === "insights" ? "rotate-180" : ""}`}
      //               />
      //             </button>
      //           </li> */}
      //           <li className="">
      //             <a href="" className="inline-flex relative items-center justify-center whitespace-nowrap duration-500 rounded text-sm font-body ring-offset-background transition-colors focus-visible:outline-none font-bold focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-no-wrap bg-primary text-white px-6 py-2 md:px-6 md:text-sm group/btn bg-red-600">
      //               LET'S TALK
      //             </a>
      //           </li>
      //           {/* <li className="flex gap-2">
      //             <img src={gloab} alt="Globe Icon" className="h-6 object-contain" />
      //             <FontAwesomeIcon
      //               icon={faAngleDown}
      //               className={`transition-transform ${activeMenu === "globe" ? "rotate-180" : ""}`}
      //             />
      //           </li> */}
      //         </ul>
      //       </nav>
            
      //     </div>

      //     {activeMenu && <DropdownDiv content={menuContent[activeMenu]}/>}
      //   </header>
      //  </div>
      
      <header className="relative font-roboto sticky bg-white z-50 top-0 md:py-7 py-5 px-5 md:px-20 ">
   
      <div className="md:flex items-center justify-between h-full">
        <div className='flex  items-center justify-between '>
          <a href="" className="flex items-center ">
            <img src={headerLogo} alt="Logo" className="w-36  md:w-44 object-contain" />
          </a>

          <div className="md:hidden block shadow-sm rounded-md p-3 md:ml-4 flex items-center "> <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl text-gray-500 cursor-pointer block md:hidden"
                  onClick={toggleMenu} // Toggle menu state
              />
          </div>
        </div>
          
        <ul
        className={`md:flex gap-x-6 text-lg z-[-1] md:z-auto md:static tracking-wide md:opacity-100 absolute bg-white w-full left-0 md:w-auto md:py-0 pt-20 py-4 pl-7 transition-all ease-in duration-300 ${
          isMenuOpen ? 'top-0 opacity-100' : 'top-[-30px] opacity-0'
        }`}>                
            <li className='md:my-0 my-6 md:text-lg text-xl'><a href="">Home</a></li>
            <li className='md:my-0 my-6 md:text-lg text-xl'><a href="">Services</a></li>
            <li className='md:my-0 my-6 md:text-lg text-xl'><a href="">Solutions</a></li>
            <li className='md:my-0 my-6 md:text-lg text-xl'><a href="">Blog</a></li>
            <li className='md:my-0 my-6 md:text-lg text-xl'><a href="">About Us</a></li>
            <li className='md:my-0 my-6 md:text-lg text-xl'><a href="">Career </a></li>
            <li className='md:hidden block'>
              <p className='text-3xl font-semibold pr-3'>Let's build something amazing together!</p>
            </li>
            <li className='md:my-0 my-6'><a href="" className="px-4 md:py-2 py-3 bg-red-600 rounded-md text-white tracking-wider">LET'S TALK</a></li>
                  {/* <li>
                    <button
                      className="text-black-50 text-lg group text-nowrap hover:text-primary flex gap-2 items-center font-normal"
                      onClick={() => handleMenuClick("whatWeDo")}
                    >
                      What We Do
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`transition-transform ${activeMenu === "whatWeDo" ? "rotate-180" : ""}`}
                      />
                    </button>
                  </li>

                  <li>
                    <button
                      className="text-black-50 text-lg group text-nowrap hover:text-primary flex gap-x-2 items-center font-normal"
                      onClick={() => handleMenuClick("ourWork")}
                    >
                      Our Work
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`transition-transform ${activeMenu === "ourWork" ? "rotate-180" : ""}`}
                      />
                    </button>
                  </li>

                  <li>
                  <button
                    className="text-black-50 text-lg group text-nowrap hover:text-primary flex gap-2 items-center font-normal"
                    onClick={() => handleMenuClick("technologies")}
                  >
                    Technologies
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={`transition-transform ${activeMenu === "technologies" ? "rotate-180" : ""}`}
                    />
                  </button>
                  </li>          */}
        </ul>
           
      </div>

      {activeMenu && <DropdownDiv content={menuContent[activeMenu]}/>}
     
      {/* {menuOpen && (
        <div
        className={`fixed top-0 left-0 h-screen  w-2/3 z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-1000 ease-in-out `}
      >
        <ul className="flex flex-col bg-white pt-24 pl-5 h-full gap-4 text-black">
          <li className='font-bold'>
            <button onClick={() => setMenuOpen(false)}>What We DO</button>
          </li>
          <li className='font-bold'>
            <button onClick={() => setMenuOpen(false)}>Our Work</button>
          </li>
          <li className='font-bold'>
            <button onClick={() => setMenuOpen(false)}>Technologies</button>
          </li>
          <li className='font-bold'>
            <button onClick={() => setMenuOpen(false)}>About Us</button>
          </li>
        </ul>
        </div>
      )} */}

      </header>
      
  );
};

 const DropdownDiv = ({ content }) => {

  return (
    <div id='dd' className="bg-white absolute p-4 w-[900px] min-h-44 top-20 right-40 shadow-lg rounded-md">
      <div className='bg-gray-50 w-full h-full'>
       {content}
      </div>
    </div>
  );
};

export default Header;
