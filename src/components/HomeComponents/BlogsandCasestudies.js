import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from '../../utils/Blog/img_1.webp';
import second from '../../utils/Blog/img_2.webp';
import third from '../../utils/Blog/img_3.webp';
import four from '../../utils/Blog/img_4.webp';

import cfirst from '../../utils/casestudies/case1.webp';
import csecond from '../../utils/casestudies/case2.webp';
import cthird from '../../utils/casestudies/case3.webp';
import cfour from '../../utils/casestudies/case4.webp';

const BlogsandCasestudies = () => {
  const caseStudies = [
    {
      image: cfirst,
      category: "Business Management",
      title: "Case Study: Transforming Business Operations With Software",
      description:
        "In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth...",
      linkText: "Learn more",
    },
    {
      image: csecond,
      category: "Logistics & Transportation",
      title: "Case Study: Transforming Business Operations With Software",
      description:
        "In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth...",
      linkText: "Learn more",
    },
    {
      image: cthird,
      category: "On-Demand Delivery",
      title: "Case Study: Transforming Business Operations With Software",
      description:
        "In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth...",
      linkText: "Learn more",
    },
    {
      image: cfour,
      category: "Property Management",
      title: "Case Study: Transforming Business Operations With Software",
      description:
        "In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth...",
      linkText: "Learn more",
    },
  ];

  const blog = [
    {
      image: first,
      category: "It Solutions",
      title: "Blogs: Transforming Business Operations With Software",
      description:
        "In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth...",
      linkText: "Learn more",
    },
    {
      image: second,
      category: "Business",
      title: "Blogs: Transforming Business Operations With Software",
      description:
        "In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth...",
      linkText: "Learn more",
    },
    {
      image: third,
      category: "UI/UX",
      title: "Blogs: Transforming Business Operations With Software",
      description:
        "In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth...",
      linkText: "Learn more",
    },
    {
      image: four,
      category: "Growth",
      title: "Blogs: Transforming Business Operations With Software",
      description:
        "In the digital age, businesses are increasingly turning to software solutions to optimize their operations, enhance efficiency, and drive growth...",
      linkText: "Learn more",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for larger screens (3 slides)
    slidesToScroll: 1,
    responsive: [
      {
        // For screens smaller than 768px (mobile devices)
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show only 1 slide on mobile
          slidesToScroll: 1,
        },
      },
      {
        // For screens between 768px and 1024px (tablets)
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col mt-10 md:mt-8 font-roboto">
      {/* Case Studies Section */}
      <section className="flex flex-col gap-x-10 md:gap-y-5 w-full md:px-16 bg-gray-100 pb-20 pt-10">
        <h1 className="text-3xl md:text-5xl font-bold flex justify-center text-gray-800 tracking-wide leading-tight md:leading-snug relative">
          Case Studies
        </h1>
        <Slider {...settings}>
          {caseStudies.map((caseStudy, index) => (
            <a key={caseStudy.title} href="" className="mb-10 md:mb-16 rounded-xl">
              <div className="flex flex-col gap-5 p-5 border-gray-200">
                <div className="w-full">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.category}
                    className="rounded-xl w-full h-64 object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="tag w-56 text-button-sm text-nowrap rounded-lg inline-block py-1 px-3 text-center text-blue-500 bg-blue-300 tracking-wide font-semibold">
                    {caseStudy.category}
                  </span>
                  <strong className="w-full text-xl font-bold">{caseStudy.title}</strong>
                  <p className="desc text-surface1 block h-12 overflow-hidden font-light">
                    {caseStudy.description}
                  </p>
                  <span className="inline-block text-[14px] font-[700] text-[#000000] mt-2">
                    {caseStudy.linkText}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </section>

      {/* Blog Section */}
      <section className="flex flex-col ga-x-10 md:gap-y-5 w-full md:px-16 pb-20 md:pb-20 pt-10 md:pt-6">
        <h1 className="text-3xl md:text-5xl font-bold flex justify-center text-gray-800 tracking-wide leading-tight md:leading-snug mb-6 relative">
          Latest Blogs
        </h1>
        <Slider {...settings}>
          {blog.map((caseStudy, index) => (
            <a key={caseStudy.title} href="" className="mb-10 md:mb-16">
              <div className="flex flex-col gap-5 px-5">
                <div className="w-full">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.category}
                    className="rounded-xl w-full h-64 object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="tag w-32 text-center text-button-sm rounded-lg inline-block py-1 text-nowrap px-3 text-blue-500 font-semibold bg-blue-300">
                    {caseStudy.category}
                  </span>
                  <strong className="w-full text-xl font-bold">{caseStudy.title}</strong>
                  <p className="desc text-surface1 block h-12 overflow-hidden font-light">
                    {caseStudy.description}
                  </p>
                  <span className="inline-block text-[14px] font-[700] text-[#000000] mt-2">
                    {caseStudy.linkText}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default BlogsandCasestudies;
