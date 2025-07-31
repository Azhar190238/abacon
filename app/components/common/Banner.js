'use client'
import Link from 'next/link';
import React from 'react';
import { FaChevronRight, FaHome } from "react-icons/fa";
const Banner = ({ title = 'Home' }) => {
   const bannerImage = data?.banner_image ?? '/theme1/hero/hero-banner.png';

   return (
      <div
         className="relative -mt-20 xl:-mt-[120px] py-[100px] sm:py-[140px] lg:py-[183px] bg-cover bg-center"
         style={{ backgroundImage: `url(${bannerImage}` }}
      >
         <div className='bg-black bg-opacity-60 absolute inset-0'></div>
         <div className="flex flex-col justify-center items-center z-10 relative">
            <h1 className="heading-1 text-white text-center">{title}</h1>
            <div className="flex items-center justify-center gap-2 sm:gap-3 xl:mt-[14px] lg:mt-3 mt-2 ">
               <Link href='/' className='flex items-center justify-center gap-2 sm:gap-3'>
                  <FaHome className='text-white' />
                  <p className='description-2 text-white'>{'Home'}</p>
               </Link>
               <FaChevronRight className='text-white' />
               <p className="description-2 text-primary">{title}</p>
            </div>
         </div>
      </div>
   );
};

export default Banner;
