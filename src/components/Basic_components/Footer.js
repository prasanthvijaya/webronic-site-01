import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import indianFlg from '../../utils/Flag_of_India.svg.webp'; // Adjust the path as needed
import usaFlag from '../../utils/flag-of-the-united-states.webp'; // Adjust the path as needed
import WorkWith from '../../utils/WorkWith.svg';
import clutch from '../../utils/clutch.svg';
import appfutura from '../../utils/appfutura.svg';
import topDevelopers from '../../utils/topDevelopers.svg';
import designrush from '../../utils/designrush.svg';
import facebook from '../../utils/facebook.svg';
import instagram from '../../utils/instagram.svg';
import linkedin from '../../utils/linkedin.svg';
import sitelog from '../../utils/sitelogo.png';

const Footer=()=>{
    return(
        <div className="text-white bg-black md:px-28 px-15 w-full font-roboto flex flex-col">
                <div className="flex flex-col md:flex-row py-10 gap-3">
                        <div className="flex flex-col md:w-1/3 ">
                            <div className="w-full flex flex-col items-center">
                                <div className="flex md:justify-start justify-center  items-center w-1/2 md:w-full px-3 md:px-2">
                                    <img src={sitelog} alt="Phone Icon" className="w-10 h-10 md:w-10 md:h-10 inline object-contain" />
                                    <span className="ml-2 text-xl font-bold text-displayLight non-italic opacity-70 not-italic">
                                    Webronic
                                    </span>
                                </div>
                                 
                                <p className="w-full py-3 md:py-6 text-center md:text-left text-white-100 opacity-60 text-lg font-semibold md:text-md px-3 md:px-2">
                                    We are creative Webronians, passionate about developing well-crafted,
                                    powerful, and functional web and mobile apps.
                                </p>
                            </div>  

                            <div className="flex flex-row justify-center md:flex-col gap-4 md:gap-0 items-center md:items-start px-6 md:px-0">
                                    <span className="text-2xl font-bold md:font-medium md:mb-3 block opacity-70 md:ml-1">connect</span>
                                    <div className="flex gap-3 md:gap-4">
                                        <a href=""><img src={facebook} alt="Indian Flag" width="24" height="24" /></a> 
                                        <a href=""><img src={instagram} alt="Indian Flag" width="24" height="24" /></a>
                                        <a href=""><img src={linkedin} alt="Indian Flag" width="24" height="24" /></a> 
                                    </div>
                            </div>
                        </div>

                        <div className="py-4 md:py-0 flex flex-col md:flex-row gap-10 justify-center w-full md:w-2/3">

                            <div className="flex flex-col items-center md:items-start gap-3 text-base opacity-70 w-full">
                                <span className="uppercase font-bold mb-2 md:mb-5 md:text-center block ">Quick Links</span>
                                <ul className="flex flex-col gap-1 md:gap-3">
                                    <li className="capitalize w-full text-center md:text-left">Hire Us</li>
                                    <li className="capitalize w-full text-center md:text-left">Join Us</li>
                                    <li className="capitalize w-ful  text-center  md:text-left">Sequeiry</li>
                                    <li className="capitalize w-full text-center md:text-left">Partner Program</li>
                                    <li className="capitalize w-full text-center md:text-left">Financial Reports</li>
                                    <li className="capitalize w-full text-center md:text-left">Events & Conferences </li>
                                    <li className="capitalize w-full text-center md:text-left">Developmemt Enviroiment</li>
                                </ul>
                            </div>

                            <div className="flex flex-col items-center md:items-start gap-3 text-base opacity-70 w-full">
                                <span className="uppercase font-bold mb-2 md:mb-5 block">Hire Developers</span>
                                <ul className="flex flex-col gap-1 md:gap-3">
                                    <li className="capitalize w-full">React Native</li>
                                    <li className="capitalize w-full">Next.js</li>
                                    <li className="capitalize w-full">Fluter</li>
                                    <li className="capitalize w-full">GraphQL</li>
                                    <li className="capitalize w-full">Node.js</li>
                                    <li className="capitalize w-full">PostgerSQL</li>
                                    <li className="capitalize w-full">NestJS</li>
                                </ul>
                            </div>

                            <div className="flex flex-col items-center md:items-start gap-3 text-base opacity-70 w-full ">
                                <span className="uppercase font-bold mb-2 md:mb-5 block">engagement model</span>
                                <ul className="flex flex-col gap-1 md:gap-3">
                                    <li className="capitalize w-full">Foxed Scope</li>
                                    <li className="capitalize w-full">Dedicated Team</li>
                                    <li className="capitalize w-full">Agile & Product </li>
                                </ul>
                            </div>
                        </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 py-10 border-t-2 border-b-2 border-gray-600 gap-4  justify-items-center">
                    <img src={WorkWith} alt="WorkWith" className="w-24 h-24 m:w-32 m:h-32 object-contain" />
                    <img src={clutch} alt="clutch" className="w-24 h-24 m:w-32 m:h-32 object-contain" />
                    <img src={appfutura} alt="appfutura" className="w-24 h-24 m:w-32 m:h-32 object-contain" />
                    <img src={topDevelopers} alt="topDevelopers" className="w-24 h-24 m:w-32 m:h-32 object-contain" />
                    <img src={designrush} alt="designrush" className="w-24 h-24 m:w-32 m:h-32 object-contain" />
                </div>

                <div className="flex flex-col gap-y-8 md:mt-10 bg-black-200 pt-4 w-full h-[750px] md:h-auto">
                    <div className="flex flex-col gap-y-10 items-center md:flex-row md:justify-between">
                        <div className="w-full md:w-1/3">
                            <div className="flex  md:items-start flex-col  items-center justify-center gap-2 ">
                                <div className="flex items-center">
                                    <img src={indianFlg} alt="Phone Icon" className="w-8 md:w-6 h-6 inline object-contain" />
                                    <span className="ml-2 text-xl md:text-sm text-displayLight non-italic opacity-70 not-italic">Webronic India Pvt Ltd</span>
                                </div>

                                <span className="text-lg tracking-wide md:text-sm text-displayLight non-italic opacity-70 not-italic">
                                33/17,2nd St, East Abhiramapuram Mylapore, <br />
                                Chennai - 600004, Tamil Nadu, India
                                </span>

                                <div className="text-lg md:text-sm text-displayLight non-italic opacity-70 not-italic">
                                <FontAwesomeIcon icon={faPhone} /> 
                                <span>+91-720-008-8500</span>
                               </div>

                               <div className="text-lg md:text-sm text-displayLight non-italic opacity-70 not-italic">
                                <FontAwesomeIcon icon={faPhone} /> 
                                <span>+91-720-008-8500</span>
                               </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3">
                            <div  className="flex  md:items-start flex-col items-center justify-center gap-2">

                            <div className="flex items-center">
                                <img src={indianFlg} alt="Phone Icon" className="w-8 md:w-6 h-6 inline object-contain" /> 
                                <span className="text-xl md:text-sm ml-2 text-displayLight non-italic opacity-70 not-italic ">Webronic India Pvt Ltd</span>
                            </div>

                            <span className="text-lg tracking-wide	 md:text-sm text-displayLight non-italic opacity-70 not-italic">
                                33/17,2nd St, East Abhiramapuram Mylapore, <br />
                                Chennai - 600004, Tamil Nadu, India
                            </span>

                            <div className="text-lg md:text-sm text-displayLight non-italic opacity-70 not-italic">
                                <FontAwesomeIcon icon={faPhone} /> 
                                <span>+91-720-008-8500</span>
                            </div>

                            <div className="text-lg md:text-sm text-displayLight non-italic opacity-70 not-italic">
                                <FontAwesomeIcon icon={faPhone} /> 
                                <span>+91-720-008-8500</span>
                            </div>

                            </div>
                        </div>

                        <div className="w-full md:w-1/3">
                            <div  className="flex flex-col md:items-start items-center justify-center gap-2">
                                <div className="flex items-center">
                                    <img src={usaFlag} alt="Phone Icon" className="w-8 md:w-6 h-6 inline object-contain" /> 
                                    <span className="text-xl md:text-sm ml-2 text-displayLight non-italic opacity-70 not-italic">Webronic India Pvt Ltd</span>
                                </div>

                                <span className="text-lg tracking-wide md:text-sm text-displayLight non-italic opacity-70 not-italic">
                                360 MAIN STREET APT 402,HARTFORD - CT , <br />
                                United States
                                </span>

                                <div className="text-lg md:text-sm text-displayLight non-italic opacity-70 not-italic">
                                    <FontAwesomeIcon icon={faPhone} /> 
                                    <span>860-263-9110</span>
                                </div>

                                <div className="text-lg md:text-sm text-displayLight non-italic opacity-70 not-italic">
                                    <FontAwesomeIcon icon={faPhone} /> 
                                    <span>860-263-9110</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex md:py-5 flex-col items-center md:flex-row md:justify-between pt-5 h-[60px] md:h-[0]  gap-4 md:gap-0">
                        
                        <p className="block text-white-100 tracking-wider opacity-70 font-normal text-sm">2025 © All rights reserved. GeekyAnts India Pvt Ltd</p>

                        <div className="flex text-white-100 tracking-wider opacity-70 font-normal text-sm gap-3">
                            <span>Privacy Policy | </span>
                            
                            <span>Terms and Conditions</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer;