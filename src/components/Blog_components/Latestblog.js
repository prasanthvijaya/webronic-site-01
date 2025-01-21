import React from "react";
import topImage from '../../utils/Blog/img_1.webp';
import first from '../../utils/Blog/img_1.webp';
import second from '../../utils/Blog/img_2.webp';
import third from '../../utils/Blog/img_3.webp';
import four from '../../utils/Blog/img_4.webp';

const Latestblog =()=>{
    return(
       <div className="flex flex-col gap-3">
         <div className="flex flex-col items-center justify-center h-screen px-10 md:px-28 bg-blue-100">
            <div className="md:w-full pb-10 flex flex-col gap-5">
                    <h1 className="text-center text-6xl font-bold">The Latest Blogs</h1>
                    <p className="text-center">The voice of Webronic</p>
            </div>

            <div className="flex md:flex-row  flex-col md:w-full bg-white rounded-xl max-h-[500px] shadow-md">
                <div className="flex items-start gap-2 justify-center flex-col md:w-1/2 pl-10">
                        <a href="" className="bg-blue-100 text-blue-600 px-5 pb-1 rounded-md">IT SOLUTIONS</a>
                        <a href="" className="text-4xl font-semibold">The importances of <br />  Customer Software <br /> Solution For  Businesses</a>
                </div>
                <div className="md:w-1/2 ">
                <img src={topImage} alt="" className="rounded-r-xl"/>
                </div>
            </div>

         </div>

         <div>
            <div className="md:grid md:grid-cols-3 grid-cols-1 gap-x-8 px-28">
                <div className="flex flex-col gap-4">
                    <a href="">
                        <div className="w-full">
                            <img src={first} alt="" className="rounded-lg" height={5000} width={5000}/>
                        </div>
                    </a>

                    <div className="flex flex-col">
                        <span className="bg-blue-100 px-4 rounded-md text-blue-600 w-24 text-nowrap">Business</span>
                        <strong>Case Studey: Transforming Business Operations With Software </strong>
                        <span className="desc text-surface1 block mt-3 h-12 overflow-hidden">
                        In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth. One compelling case study illustrates how a mid-sized manufacturing company transformed its business operations through the implementation of a custom software solution. This transformation not only streamlined processes but also led to significant improvements in productivity and profitability.
                        </span>
                        <span className="inline-block text-[14px] font-[600] text-[#000000] mt-2">Learn more</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <a href="">
                        <div className="w-full">
                        <img src={second} alt="" className="rounded-lg" height={5000} width={5000}/>
                        </div>
                    </a>

                    <div className="flex flex-col">
                        <span className="bg-blue-100 px-4 rounded-md text-blue-600 w-24">UI/UX</span>
                        <strong>Case Studey: Transforming Business Operations With Software </strong>
                        <span className="desc text-surface1 block mt-3 h-12 overflow-hidden">
                        In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth. One compelling case study illustrates how a mid-sized manufacturing company transformed its business operations through the implementation of a custom software solution. This transformation not only streamlined processes but also led to significant improvements in productivity and profitability.
                        </span>
                        <span className="inline-block text-[14px] font-[600] text-[#000000] mt-2">Learn more</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <a href="">
                        <div className="w-full">
                         <img src={third} alt="" className="rounded-lg" height={5000} width={5000}/>
                        </div>
                    </a>

                    <div className="flex flex-col">
                      <span className="bg-blue-100 px-4 rounded-md text-blue-600 w-24">Growth</span>
                      <strong>Case Studey: Transforming Business Operations With Software </strong>
                      <span className="desc text-surface1 block mt-3 h-12 overflow-hidden">
                       In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth. One compelling case study illustrates how a mid-sized manufacturing company transformed its business operations through the implementation of a custom software solution. This transformation not only streamlined processes but also led to significant improvements in productivity and profitability.
                      </span>
                      <span className="inline-block text-[14px] font-[600] text-[#000000] mt-2">Learn more</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <a href="">
                    <div className="w-full">
                     <img src={four} alt="" className="rounded-lg" height={5000} width={5000}/>
                    </div>
                    </a>
                    <div className="flex flex-col">
                        <span className="bg-blue-100 px-4 rounded-md text-nowrap text-blue-600 w-40">Solution scalibility</span>
                        <strong>Case Studey: Transforming Business Operations With Software </strong>
                            <span className="desc text-surface1 block mt-3 h-12 overflow-hidden">
                                In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth. One compelling case study illustrates how a mid-sized manufacturing company transformed its business operations through the implementation of a custom software solution. This transformation not only streamlined processes but also led to significant improvements in productivity and profitability.
                            </span>
                        <span className="inline-block text-[14px] font-[600] text-[#000000] mt-2">Learn more</span>
                    </div>
                </div>
            </div>
         </div>
       </div>
    )
}

export default Latestblog;