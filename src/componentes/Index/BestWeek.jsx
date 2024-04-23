import React, { useEffect, useState } from 'react'

const courses = [
    {
      name: 'آباژور',
      imageUrl: "/image/week/abzor.jpg",
    },
    {
      name: 'ماک قابل طراحی',
      imageUrl: "/image/week/mak.jpg",
    },
    {
      name: 'کیف زنانه',
      imageUrl: "/image/week/famle.jpg",
    },
    {
      name: 'چمدان',
      imageUrl: "/image/week/chamedan.jpg",
    },
    {
      name: 'تیشرت زنانه',
      imageUrl: "/image/week/tishert.jpg",
    },
    {
      name: 'کوسن',
      imageUrl: "/image/week/kosan.jpg",
    },
    {
      name: 'ساک هدیه',
      imageUrl: "/image/week/suack.jpg",
    },
];

function BestWeek() {
    
  const [visibleCourses, setVisibleCourses] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCourses(4);
      } else {
        setVisibleCourses(courses.length);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
   }, [courses.length]);

  return (
    <div className='flex flex-col gap-1 max-w-screen-xl box-border'>

      <div className='flex flex-row-reverse place-items-center mb-3 mt-2'>
        <img src="/image/infintey/paragraf.jpg" className='p-2 max-md:hidden' />
        <span className='max-md:w-3/4 text-right' >جدیدترین محصولات</span>

        <hr className='w-3/5 h-px mr-3 bg-gray-200 border-0 dark:bg-gray-700 max-md:hidden' />

        <button className='mr-10 text-red-300 max-md:mr-0'>
          مشاهده بیشتر
        </button>

      </div>

      <div className="grid grid-cols-4 gap-5 text-right max-md:grid-cols-2 rtl">

          <div className="p-4 max-md:col-span-2 max-md:hidden">
            <img src="/image/week/jadid.jpg" className='w-full mb-2 max-md:p-5'/>
          </div>

          <div className="hidden p-4 max-md:col-span-2 max-md:flex max-md:w-max mr-12">
            <img src="/image/week/mobile.jpg" className='w-full mb-2 max-md:p-5'/>
          </div>

          {courses.slice(0, visibleCourses).map((course, index) => (
            <div key={index} className="product_box">
              <img src={course.imageUrl} className='w-full mb-2 max-md:p-5'/>
              <h3 className='flex flex-row-reverse gap-4 font-bold'>
                <button>
                  <ion-icon name="heart-outline"></ion-icon>
                </button>
                <span className='w-4/5'>
                  {course.name}
                </span>
              </h3>
              <h4 className='text-xs mt-3'>دارای رنگ بندی قابل طراحی</h4>
              <p className='flex flex-row-reverse justify-end mt-4 mb-2 font-bold gap-1 text-xs'>
                <span>150.000</span>
                <span>تومان</span>
              </p>
            </div>
          ))}
      </div>

    </div>
  )
}


export default BestWeek