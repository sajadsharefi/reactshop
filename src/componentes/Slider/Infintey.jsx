import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather"

const courses = [
    {
      name: 'قاب موبایل',
      imageUrl: "/image/infintey/mobile.jpg",
    },
    {
      name: 'کارت تبریک',
      imageUrl: "/image/infintey/cart.jpg",
    },
    {
      name: 'اکسسوری',
      imageUrl: "/image/infintey/acssory.jpg",
    },
    {
      name: 'لوازم و تحریر',
      imageUrl: "/image/infintey/stationery.jpg",
    },
    {
      name: 'لباس',
      imageUrl: "/image/infintey/derss.jpg",
    },
    {
      name: 'دکور خانه',
      imageUrl: "/image/infintey/decor.jpg",
    },
];

function Infintey({ children: slides }) {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.offsetWidth;
  };

  const handleScrollRight = () => {
    scrollContainerRef.current.scrollLeft += scrollContainerRef.current.offsetWidth;
  };

  return (
    <div className='flex flex-col gap-1 max-w-screen-xl box-border px-8 max-md:px-3 max-md:pl-0'>

      <div className='flex flex-row-reverse place-items-center'>
        <img src="/image/infintey/paragraf.jpg" className='p-2 max-md:hidden' />
        <span>دسته بندی محصولات</span>

        <hr className='w-3/4 h-px mr-2 bg-gray-200 border-0 dark:bg-gray-700 max-md:hidden' />

        <div className='hidden max-md:flex mr-48'>
          <button onClick={handleScrollLeft}>
            <ChevronLeft size={20} className="max-md:size-3"/>
          </button>
          <button onClick={handleScrollRight}>
            <ChevronRight size={20} className="max-md:size-3"/>
          </button>
        </div>

      </div>

      <div
        ref={scrollContainerRef}
        className="flex flex-row-reverse gap-2 overflow-hidden max-md:overflow-y-hidden"
      >
          {courses.map((course, index) => (
            <div key={index} className="image-container max-md:w-24">
              <img src={course.imageUrl} className='mb-2'/>
              <p className='mb-1 text-sm'>{course.name}</p>
            </div>
          ))}

      </div>

    </div>
  );
}

export default Infintey