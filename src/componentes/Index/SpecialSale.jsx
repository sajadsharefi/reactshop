import React from 'react'

const courses = [
    {
      name: 'home',
      imageUrl: "/image/gallery/clothing.jpg",
    },
    {
      name: 'Digital',
      imageUrl: "/image/gallery/Digital.jpg",
    },
    {
      name: 'scoll',
      imageUrl: "/image/gallery/scoll.jpg",
    },
    {
      name: 'astiker',
      imageUrl: "/image/gallery/astiker.jpg",
    },
];

function SpecialSale() {
  return (
    <div className='w-full flex flex-col'>

        <div className='flex flex-row-reverse place-items-center mb-3 mt-2'>
            <img src="/image/infintey/paragraf.jpg" className='p-2 max-md:hidden' />
            <span className='max-md:w-3/4 text-right' >فروش ویژه</span>

            <hr className='w-3/5 h-px mr-3 bg-gray-200 border-0 dark:bg-gray-700 max-md:hidden' />

            <button className='mr-10 text-red-300 max-md:mr-0'>
                مشاهده بیشتر
            </button>

        </div>

        <div className='flex flex-row-reverse gap-3'>

            <div className='w-2/4'>
            <img src="/image/gallery/home.jpg" className='w-full' /> 
            </div>
        
            <div className='w-2/4 grid grid-cols-2 gap-2'>
                {courses.map((course, index) => (
                    <div key={index} className="">
                        <img src={course.imageUrl} className='w-full mb-2'/>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default SpecialSale