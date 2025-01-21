import React, { useEffect, useState } from 'react';
import  contactPhone  from '../../utils/contact_img.webp';
import  details  from '../../utils/details.svg';
import  require from '../../utils/Require.svg';
import vector from '../../utils/vector.svg';
import coding from '../../utils/vector.svg';
import migrating from '../../utils/vector.svg';
import appdevelopment from '../../utils/app-development.svg';
import handshake from '../../utils/hand-shake.svg';
import upload from '../../utils/upload.svg';
import conversation from '../../utils/conversation.svg';
import fileUpload from '../../utils/Group.svg';
import { useRef } from 'react';
import axios from 'axios';
 
const ContactForm=()=>{

    // const fileInputRef = useRef(null);

    // const handleButtonClick = () => {
    //     fileInputRef.current.click();
    //   };

      
    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //       console.log('Selected file:', file.name);
    //     }
    //   };

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        company: '',
        requirements: [],
        enquiry: '',
        document: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prevState => {
            const updatedRequirements = checked
                ? [...prevState.requirements, value]
                : prevState.requirements.filter(item => item !== value);
            return { ...prevState, requirements: updatedRequirements };
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, document: file });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        console.log(formData);
        
        // try {
        //     const response = await axios.post('http://localhost:5000/send-email', formData, {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     alert('Form submitted successfully');
        // } catch (error) {
        //     console.error('Error sending form data:', error);
        //     alert('There was an error submitting the form.');
        // }
    };

    return(
        <div className="flex font-roboto flex-col items-center justify-center h-full py-5 md:py-10 bg-gray-100 px-3 md:px-[80px]">
            <div className="md:p-6 md:pb-10 w-full bg-white shadow-md rounded-md">
                <div className='flex flex-col md:gap-3 py-5'>
                    <div className="flex justify-center items-center pb-2 md:pb-0">
                        <img src={contactPhone} alt="Phone Icon" className="h-10 w-10 object-contain" />
                        <h1 className="text-2xl font-bold ml-2">Get In touch with Us</h1>
                    </div>

                    <p className="text-center tracking-wide mt-2 md:mt-0">Think with CronJ! Reach out to us today for futuristic solution development</p>
                </div>

                <form action="" className='px-1' onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6 md:gap-8 px-1 md:px-0">
                        <div className="flex gap-3 justify-center md:justify-start py-2">
                            <img src={details} alt="details Icon" className="w-[25] h-[35] object-contain" />
                            <h4>Enter your details</h4>
                        </div>
                    
                        <div className="flex w-full gap-4">
                            <input type="text" name="name" placeholder="Enter Your full name" className="border rounded-md w-1/2 py-2"  value={formData.name} onChange={handleInputChange}/>
                            <input type="number" name="mobile" placeholder="Enter Your Mobile Number"  className="border rounded-md w-1/2 py-2 appearance-none"  value={formData.mobile} onChange={handleInputChange}/>
                        </div>

                        <div className="flex w-full gap-4 ">
                            <input type="email" name="email" placeholder="Enter Your Email ID" className="border rounded-md w-1/2 py-2"   value={formData.email} onChange={handleInputChange}/>
                            <input type="text" name="company" placeholder="Enter Your compay name"  className="border rounded-md w-1/2 py-2"  value={formData.company} onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-4 mb-7 pb-6 px-1">
                        <div className="flex justify-center md:justify-start md:flex-row gap-2 py-2">
                            <img src={require} alt="require Icon" className="h-10  object-contain" />
                            <h4>Requirement</h4>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex gap-x-52 gap-y-10 flex-wrap">
                                <div className="flex md:w-1/5 gap-2 items-center">
                                    <input type="checkbox" className="w-5 h-5" value="Design" checked={formData.requirements.includes('Design')} onChange={handleCheckboxChange}/>
                                    <label htmlFor="" className="flex items-center gap-2">
                                     <img src={vector} alt="vector Icon" className="h-8 object-contain w-8" />Design
                                    </label>
                                </div>

                                <div className="flex md:w-1/5 gap-2 items-center">
                                    <input type="checkbox" className="w-5 h-5" value="Web App Development" checked={formData.requirements.includes('Web App Development')}  onChange={handleCheckboxChange}/>
                                    <label htmlFor="" className="flex items-center gap-2">
                                    <img src={coding} alt="coding Icon" className="h-8 object-contain w-8" />Web App Development
                                    </label>
                                </div>

                                <div className="flex md:w-1/5 gap-2 items-center">
                                    <input type="checkbox" className="w-5 h-5" value="Migration" checked={formData.requirements.includes('Migration')}  onChange={handleCheckboxChange}/>
                                    <label htmlFor="" className="flex items-center space-x-2">
                                    <img src={migrating} alt="Migrating Icon" className="h-8 object-contain w-8" />
                                        <span>Migration</span>
                                    </label>
                                </div>

                                <div className="flex md:w-1/5 gap-2 items-center">
                                        <input type="checkbox" className="w-5 h-5" value="Mobile App Development" checked={formData.requirements.includes('Mobile App Development')}  onChange={handleCheckboxChange}/>
                                        <label htmlFor="" className="flex items-center gap-2">
                                        <img src={appdevelopment} alt="appdevelopment Icon" className="h-8 object-contain w-8" />Mobile App Development
                                        </label>
                                </div>

                                <div className="flex md:w-1/5 gap-2 items-center">
                                        <input type="checkbox" className="w-5 h-5" value="Hire a Developer" checked={formData.requirements.includes('Hire a Developer')}  onChange={handleCheckboxChange}/>
                                        <label htmlFor="" className="flex items-center gap-2">
                                        <img src={handshake} alt="handshake Icon" className="h-8 object-contain w-8" />Hire a Developer
                                        </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-5 mb-5 px-1">
                        <div className="flex gap-2 mb-2">
                            <img src={upload} alt="upload Icon" className="h-7 w-7 object-contain" />
                            <h4>Upload Supporting Documents</h4>
                        </div>

                        <div>
                            <div className="flex flex-col justify-center rounded-md border-2 border-dotted border-gray-300 items-center py-3 pt-5 gap-3">                             
                                <img src={fileUpload} alt="file_upload Icon" className="h-10 w-10 object-contain" />
                                <span>Drag & Drop</span>
                                <button
                                    className="border border-green-300 text-black w-[100px] py-2 px-5 rounded-md hover:bg-green-300 hover:text-white"
                                    onClick={() => document.getElementById('fileInput').click()} // Trigger file input click
                                >
                                    Browse
                                </button>    
                                <input 
                                    type="file" 
                                    id="fileInput" // Add an ID for easier access
                                    className="invisible"  
                                    accept=".xlsx, .xls" // Restrict to Excel files only
                                    onChange={handleFileChange} 
                                />
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col gap-3 px-1'>
                        <div className="flex gap-2">
                          <img src={conversation} alt="conversation Icon" className="h-8 w-8 object-contain" />
                          <h4>Enquiry Details</h4>
                        </div>

                        <textarea name="enquiry" id="" className="border rounded-md w-full h-28 resize-none p-2" placeholder="Please enter your key description"  value={formData.enquiry} onChange={handleInputChange}></textarea>
                    </div>

                    <div className="flex w-full justify-center mt-5 py-2">
                        <button className="bg-green-500 py-2  text-white px-6 rounded-full">Submit Details</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;