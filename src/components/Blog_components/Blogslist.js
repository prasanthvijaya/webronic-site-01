import React from "react";
import first from '../../utils/Blog/img_1.webp';
import second from '../../utils/Blog/img_2.webp';
import third from '../../utils/Blog/img_3.webp';
import four from '../../utils/Blog/img_4.webp';

const Blogslist=()=>{
    return(
        <div className="md:grid md:grid-cols-3 grid-cols-1 gap-x-8 px-28">
            <div className="">
                <a href="">
                    <div className="w-full">
                        <img src={first} alt="" className="rounded-lg" height={5000} width={5000}/>
                    </div>
                </a>

                <div className="flex flex-col">
                    <span>Business</span>
                    <strong>Case Studey: Transforming Business Operations With Software </strong>
                    <span className="desc text-surface1 block mt-3 h-12 overflow-hidden">
                     In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth. One compelling case study illustrates how a mid-sized manufacturing company transformed its business operations through the implementation of a custom software solution. This transformation not only streamlined processes but also led to significant improvements in productivity and profitability.
                    </span>
                    <span className="inline-block text-[14px] font-[600] text-[#000000] mt-2">Learn more</span>
                </div>
            </div>

            <div className="">
                <a href="">
                    <div className="w-full">
                        <img src={first} alt="" className="rounded-lg" height={5000} width={5000}/>
                    </div>
                </a>

                <div className="flex flex-col">
                    <span>Business</span>
                    <strong>Case Studey: Transforming Business Operations With Software </strong>
                    <span className="desc text-surface1 block mt-3 h-12 overflow-hidden">
                     In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth. One compelling case study illustrates how a mid-sized manufacturing company transformed its business operations through the implementation of a custom software solution. This transformation not only streamlined processes but also led to significant improvements in productivity and profitability.
                    </span>
                    <span className="inline-block text-[14px] font-[600] text-[#000000] mt-2">Learn more</span>
                </div>
            </div>

            <div className="">
                <a href="">
                    <div className="w-full">
                        <img src={first} alt="" className="rounded-lg" height={5000} width={5000}/>
                    </div>
                </a>

                <div className="flex flex-col">
                    <span>Business</span>
                    <strong>Case Studey: Transforming Business Operations With Software </strong>
                    <span className="desc text-surface1 block mt-3 h-12 overflow-hidden">
                     In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth. One compelling case study illustrates how a mid-sized manufacturing company transformed its business operations through the implementation of a custom software solution. This transformation not only streamlined processes but also led to significant improvements in productivity and profitability.
                    </span>
                    <span className="inline-block text-[14px] font-[600] text-[#000000] mt-2">Learn more</span>
                </div>
            </div>

            <div className="">
                <a href="">
                    <div className="w-full">
                        <img src={first} alt="" className="rounded-lg" height={5000} width={5000}/>
                    </div>
                </a>

                <div className="flex flex-col">
                    <span>Business</span>
                    <strong>Case Studey: Transforming Business Operations With Software </strong>
                    <span className="desc text-surface1 block mt-3 h-12 overflow-hidden">
                     In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth. One compelling case study illustrates how a mid-sized manufacturing company transformed its business operations through the implementation of a custom software solution. This transformation not only streamlined processes but also led to significant improvements in productivity and profitability.
                    </span>
                    <span className="inline-block text-[14px] font-[600] text-[#000000] mt-2">Learn more</span>
                </div>
            </div>
        </div>
    );
}

export default Blogslist;