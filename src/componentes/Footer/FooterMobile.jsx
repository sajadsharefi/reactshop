import React from 'react'

function FooterMobile() {
  return (

    <div className='w-full h-72 bg-red-950 text-white mt-5'>

        <div className='h-2/3 flex flex-col place-items-center gap-4'>
            <p className='flex flex-row-reverse mt-5'>
                <span>تماس با پشتیبانی</span> :
                <span>021-34560000</span>
            </p>
            <p className='flex flex-row-reverse'>
                <span>پاسخگویی</span>
                <span>24</span>
                <span>ساعته</span> ،
                <span>7</span>
                <span>روز هفته</span>
            </p>
            <div className='w-full flex flex-row-reverse place-items-center justify-center gap-8'>
                <div className="text-2xl cursor-pointer">
                    <ion-icon name="logo-youtube"></ion-icon>
                </div>
                <div className="text-2xl cursor-pointer">
                    <ion-icon name="logo-pinterest"></ion-icon>
                </div>
                <div className="text-2xl cursor-pointer">
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <div className="text-2xl cursor-pointer">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
            </div>
            <span>تمام حقوق این وبسایت متعلق به فروشگاه آنلاینکاستومی می باشد</span>
        </div>

        <div className='w-full h-1/3 bg-red-800 flex flex-row-reverse'>
            <a href="#" className='w-1/4 text-center flex flex-col justify-center place-items-center gap-2'>
                <ion-icon name="home-outline"></ion-icon>
                <span>خانه</span>
            </a>
            <a href="#" className='w-1/4 text-center flex flex-col justify-center place-items-center gap-2'>
                <ion-icon name="brush-outline"></ion-icon>
                <span>طراحی سفارشی</span>
            </a>
            <a href="#" className='w-1/4 text-center flex flex-col justify-center place-items-center gap-2'>
                <ion-icon name="cart-outline"></ion-icon>
                <span>سبد خرید</span>
            </a>
            <a href="#" className='w-1/4 text-center flex flex-col justify-center place-items-center gap-2'>
                <ion-icon name="person-outline"></ion-icon>
                <span>پروفایل</span>
            </a>
        </div>
    </div>

  )
}

export default FooterMobile