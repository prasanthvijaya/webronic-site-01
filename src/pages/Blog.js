import React from "react";
import Header from '../components/Basic_components/Header.js';
import Footer from '../components/Basic_components/Footer.js';
import Latestblog from "../components/Blog_components/Latestblog.js";
import Blogslist from "../components/Blog_components/Blogslist.js";

const Blog=()=>{
    return(
        <div className='flex flex-col '>
              <Header/>
               <Latestblog/>
              
              <Footer/>
        </div>
    )
}

export default Blog;