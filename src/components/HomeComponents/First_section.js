import React from "react";
import support from '../../utils/support.webp';

const FirstSection = () => {
    return (
        <div className="flex font-roboto relative h-full md:h-[calc(100vh-5rem)]">
       
            <div className="flex flex-col gap-8 bg-gray-700 text-white w-1/2 justify-center p-20 md:block hidden">
                <div class="w-fit text-5.5xl md:text-8xl lg:text-8xl">
                    <h1 className=" font-extrabold bg-clip-text bg-gradient-to-b from-blue-775 to-red-175 inline-block text-fill-transparent animate-linear-gradient ">
                       <div>Innovate.</div>
                       <div>Collaborate.</div>
                       <div>Build.</div>
                    </h1>
                </div>

                <div className="mt-7 flex flex-col gap-3">
                    <h1 className="font-bold  text-3xl">Looking for a modern design solution?</h1>
                    <p className="text-xl">Our team can help you bring your ideas to life</p>
                    <button className="bg-red-600 text-white font-bold rounded-md py-3 w-[150px] mt-5">Get in touch</button>
                </div>
                
            </div>

            <div className="w-1/2 relative md:block hidden">
                {/* Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-700/50 to-transparent z-10"></div>
                <img 
                    src={support} 
                    alt="support" 
                    className="w-full h-full object-cover " 
                    style={{ marginLeft: '0', borderTopRightRadius: '0' }}
                />
            </div> 

            <div className="md:hidden block relative h-full bg-cover bg-center w-full"  style={{ backgroundImage: `url(${support})` }}
                >
                {/* Gray Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent opacity-80"></div>

                {/* Content Over Image */}
                <div className="relative z-10 text-white p-4 flex flex-col gap-2 h-full justify-center">
                    <div class="w-fit text-4xl md:text-8xl lg:text-8xl">
                        <h1 className="font-extrabold bg-clip-text bg-gradient-to-b from-blue-775 to-red-175 inline-block text-fill-transparent animate-linear-gradient">
                        <div>Innovate.</div>
                        <div>Collaborate.</div>
                        <div>Build.</div>
                        </h1>
                    </div>

                    <h1 className="font-bold text-2xl">Looking for a modern design solution?</h1>
                    <p className="text-xl">Our team can help you bring your ideas to life </p>

                    <div className="text-center">
                       <button className="bg-red-600 text-white font-bold rounded-md py-3 px-4 w-[150px]">Get in touch</button>
                    </div>
                </div>
            </div>

        </div>
        
    );
};

export default FirstSection;
