import React from "react";
import android from '../../utils/ourServices/Development-process-of-android-app.png';
import ios from '../../utils/ourServices/iphone-application-development.webp';
import openSource from '../../utils/ourServices/openSource.png';
import SSmarketing from '../../utils/ourServices/social-media-marketing-guide.webp';
import webDD from '../../utils/ourServices/webDD.webp';
import Settings from '../../utils/ourServices/Settings-Icon.jpg';
import hosting from '../../utils/ourServices/images.png';


const Services=()=>{

       const services = [
            { text1: 'Web Development & Designing', text2: 'Professional web development starts from USD30$', icon: webDD },
            { text1: 'Domain name & Hosting Solutions', text2: 'Professional web development starts from USD30$', icon: hosting },
            { text1: 'Open Source Customization', text2: 'Professional web development starts from USD30$', icon: openSource },
            { text1: 'Social Media Marketing', text2: 'Professional web development starts from USD30$', icon: SSmarketing },
            { text1: 'Android Development', text2: 'Professional web development starts from USD30$', icon: android },
            { text1: 'iOS Development', text2: 'Professional web development starts from USD30$', icon: ios },
        ];
    

    return(
        <div className="h-auto px-5 md:px-24 flex flex-col gap-5 md:gap-8 font-roboto mt-12">
            <div className="w-full md:justify-items-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 tracking-wide leading-tight md:leading-snug mb-4 relative">
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 rounded"></span>
                Our Features & Services
            </h1>
            </div>

            <div className="flex gap-x-4 flex-wrap justify-center w-full">
               {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center gap-4 min-h-[495px] max-w-[290px] text-center px-3 py-10 border rounded-3xl shadow-md m-4">
                    <div>
                        <img src={service.icon} alt={service.text1} className="w-36 h-36 object-cover mb-11 rounded-lg animate-depth "/>
                    </div>
                    <div className="flex flex-col items-center w-full mt-5 gap-2">
                        <h1 className="text-xl font-semibold text-gray-800 h-14">{service.text1}</h1>
                        <p className="text-base md:text-lg tracking-wider text-gray-600 ">{service.text2}</p>
                        <button className="text-center font-medium tracking-widest w-40 mt-5 px-11 py-2 bg-red-600 text-white rounded-full relative overflow-hidden group">
                            <span className="relative z-10">MORE</span>
                            <span
                                className="arrow absolute right-10 top-1/2 transform -translate-y-1/2 -translate-x-full opacity-0 scale-75 group-hover:translate-x-4 group-hover:opacity-100 group-hover:scale-100 group-hover:font-bold transition-all duration-300 ease-in-out text-xl"
                            >
                            &rarr;
                            </span>
                        </button>

                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Services;