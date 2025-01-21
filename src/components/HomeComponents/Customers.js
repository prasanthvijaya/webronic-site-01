import React from "react";
import amazon from '../../utils/customerCompay/amazon.png';
import demo from '../../utils/customerCompay/demo.png';
import demo2 from '../../utils/customerCompay/demo2.png';
import ssn from '../../utils/customerCompay/ssn.png';
import tieconchennai from '../../utils/customerCompay/tieconchennai.avif';
import desing1 from '../../utils/customerCompay/desing1.avif';
import desing2 from '../../utils/customerCompay/desing2.avif';
import desing3 from '../../utils/customerCompay/desing3.avif';
import stella from '../../utils/customerCompay/stella.avif';
import mark from '../../utils/customerCompay/FRA-1699dark-sq.jpg';
import thomas from '../../utils/customerCompay/thomas.webp';

const Customers=()=>{
    const clients=[
        { name: 'STELLA LARSON',text:'Sample text. Click to select the text box. Click again or double click to start editing the text.', image: stella },
        { name: 'NICK JHONSON',text:'Sample text. Click to select the text box. Click again or double click to start editing the text.',  image: mark },
        { name: 'GLEN DAVIES',text:'Sample text. Click to select the text box. Click again or double click to start editing the text.', image: thomas },
    ];
    
    return(
        <div className="flex font-roboto flex-col px-7 md:px-24 gap-3 md:gap-8 md:mt-6 mt-2">
            <div className="flex flex-col md:flex-row gap-5 py-16 bg-white">

                <div className=" w-full md:w-1/3 flex flex-col">
                    <h1 className="text-center md:text-left text-5xl ">Our Clients</h1>
                    <p className="text-center py-3 md:text-left text-lg text-gray-600 tracking-wide	">We have Worked with renowned names. From hotels,Offices and home, we have worked with clients from all backgrounds.</p>
                </div>

                <div className="flex w-full gap-y-5 flex-col items-center justify-center flex-nowrap md:flex-row md:flex-wrap md:w-2/3 md:gap-x-2 md:ml-10">
                    <img src={amazon} alt="Indian Flag" width="" height="" className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer"/>
                    <img src={ssn} alt="Indian Flag" width="" height="" className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer"/>
                    <img src={demo} alt="Indian Flag" width="" height="" className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer"/>
                    <img src={demo2} alt="Indian Flag" width="" height="" className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer"/>
                    <img src={tieconchennai} alt="Indian Flag" width="" height="" className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer"/>
                    <img src={desing3} alt="Indian Flag" width="" height="" className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer"/>
                    <img src={desing1} alt="Indian Flag" width="" height="" className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer"/>
                    <img src={desing2} alt="Indian Flag" width="" height="" className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer"/>
                </div>
            </div>

            <div className="flex flex-col gap-3 py-3">
                <h1 className="text-center font-medium text-4xl md:text-6xl">Our clients love the we build </h1>
                <h1 className="text-center text text-2xl md:text-4xl md:font-extrabold">Stores experience</h1>
                <div className="mt-5">
                    <div className="flex flex-col md:flex-row gap-5">
                    {clients.map((client, index) => (
                        <div key={index} 
                            className="flex flex-col w-full md:w-1/3 items-center text-center p-4 border rounded-md shadow-md mb-4">
        
                            <img src={client.image} alt={client.name} 
                            className="w-32 h-32 object-cover rounded-full mb-4"/>
                
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{client.name}</h3>
                
                            <p className="text-lg  ms:text-sm text-gray-600 tracking-wide">{client.text}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers;