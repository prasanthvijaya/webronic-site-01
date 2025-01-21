import React from "react";
import hosting from '../../utils/ourServices/images.png';
import android from '../../utils/ourServices/Development-process-of-android-app.png';
import ios from '../../utils/ourServices/iphone-application-development.webp';
import openSource from '../../utils/ourServices/openSource.png';
import SSmarketing from '../../utils/ourServices/social-media-marketing-guide.webp';
import webDD from '../../utils/ourServices/webDD.webp';
import Settings from '../../utils/ourServices/Settings-Icon.jpg';

const OurServices = () => {
    const services = [
        { text1: 'Web Development & Designing Services', text2: 'Professional web development starts from USD30$', icon: webDD },
        { text1: 'Domain name & Hosting Solutions', text2: 'Professional web development starts from USD30$', icon: hosting },
        { text1: 'Open Source Customization', text2: 'Professional web development starts from USD30$', icon: openSource },
        { text1: 'Social Media Marketing', text2: 'Professional web development starts from USD30$', icon: SSmarketing },
        { text1: 'Android Development', text2: 'Professional web development starts from USD30$', icon: android },
        { text1: 'iOS Development', text2: 'Professional web development starts from USD30$', icon: ios },
    ];

    return (
        <div className="font-serif cursor-pointe">
          <div className="flex justify-center">
            <p className="text-black text-center flex items-center justify-center border rounded-md px-3 mb-3">
                Services We Offer
                <img src={Settings} alt="settings" className="w-7 h-7 ml-2" />
            </p>
          </div>

          <h1 className="text-black text-xl md:text-3xl font-bold text-center mb-6">
                Planned service comes with everything you will ever need in life
          </h1>

        <div className="flex flex-wrap justify-center">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center bg-white py-4 pl-6 pr-6 border rounded-md shadow-md max-w-[423px] m-4">
                        <img
                            src={service.icon}
                            alt={service.text1}
                            className="w-32 h-32 object-cover rounded-full mb-4"
                        />
                        <h1 className="text-lg font-semibold text-gray-800 mb-2">{service.text1}</h1>
                        <p className="text-lg tracking-wide text-gray-600">{service.text2}</p>
                    </div>
                ))}
          </div>
        </div>
    );
};

export default OurServices;
