import React from 'react'

function Header() {
  return (
    <div className='border-y h-24 max-md:h-16'>
        <div className='w-full bg-red-500 max-md:hidden'>با عضویت در کاستومی اولین سفارش خود را "رایگان" تحویل بگیرید</div>
        
        <div className='w-full h-16 flex place-items-center flex-row-reverse gap-4'>

            <div className='w-32 place-content-center max-md:hidden'>
              <img src="/image/header/logo.jpg" alt="" className='w-full p-2' />
            </div>
          
            <div className='w-2/4 inset-0 m-auto border border-inherit rounded-full max-md:mr-20 max-md:w-56 py-0.5 '>

              <form action="" className='h-full'>
                <div className='flex flex-row-reverse h-full'>
                  <input 
                    type="search" id='search' placeholder='جستجو' 
                    className='w-11/12 text-red-600 focus:text-neutral-900
                    placeholder-red-300 text-right rounded-full' 
                  />
                  <div className='w-1/12 place-content-center'>
                  <ion-icon name="search-outline"></ion-icon>
                  </div>
                </div>
              </form>

            </div>

            <div className='w-32 flex flex-row-reverse items-center justify-center mr-4 border rounded-lg max-md:hidden'>

              <div className='text-2xl'>
                <ion-icon name="log-in-outline"></ion-icon>
              </div>
              <a href="#" className='text-black text-center hover:text-slate-200'>ورود</a>
              <span>|</span>
              <a href="#" className='text-black hover:text-slate-200'>ثبت نام</a>

            </div>

            <div className='w-28 flex flex-row-reverse items-center justify-center mr-4 border rounded-lg max-md:hidden'>

              <div className='text-2xl'>
              <ion-icon name="cart-outline"></ion-icon>
              </div>
              <a href="#" className='text-black text-center hover:text-slate-200'>سبد خرید</a>
              
            </div>

            <div className='hidden ml-8 max-md:block'>
              <img src="/image/header/logo_mobile.jpg" alt="" className='w-full p-2' />
            </div>

        </div>

    </div>
  )
}

export default Header