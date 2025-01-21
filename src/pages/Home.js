import React, { use, useEffect } from 'react';
import Header from '../components/Basic_components/Header.js';
import Footer from '../components/Basic_components/Footer.js';
import ContactForm from '../components/HomeComponents/ContactForm.js';
import FaqSection from '../components/HomeComponents/FaqSection.js';
import Customers from '../components/HomeComponents/Customers.js';
import Ourservices from '../components/HomeComponents/Ourservices.js';
import First_section from '../components/HomeComponents/First_section.js';
import Navbar from '../components/HomeComponents/Navbar.js';
import Technologies from '../components/HomeComponents/Technologies.js';
import Services from '../components/HomeComponents/Services.js';
import BlogsandCasestudies from '../components/HomeComponents/BlogsandCasestudies.js';

const Home=()=>{
    return(
        <div className='flex flex-col '>
            {/* <Navbar/> */}
            <Header/>
            <First_section/>
            <Services/>
            <BlogsandCasestudies/>
            <Technologies/>
            {/* <Ourservices/> */}
            <Customers/>
            <FaqSection />
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Home;