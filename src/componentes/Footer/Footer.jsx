import React from 'react'

const courses = [
    {
      title: 'همراه با کاستومی',
      link1: "فروش محصولات",
      link2: "فرصت همکاری",
      link3: "تماس با ما",
      link4: "نقشه سایت",
    },
    {
      title: 'خدمات  مشتریان',
      link1: "سوالات متداول",
      link2: "حریم خصوصی",
      link3: "ثبت شکایت",
      link4: "ضمانت نامه محصولات",
    },
    {
      title: 'راهنمای خرید',
      link1: "راهنمای ثبت سفارش",
      link2: "شیوه های پرداخت",
      link3: "نحوه ارسال سفارش ها",
      link4: "شرایط بازگرداندن محصول",
    },
];

function Footer() {
  return (

    <div className='w-full h-96 bg-red-800 text-white text-xs mt-10'>
        
        <div className='flex flex-row-reverse place-items-center h-1/4 bg-red-950'>
            <div className='w-1/2'>
                <form className='w-full flex flex-row-reverse justify-center gap-5'>
                    <div className='flex flex-col gap-3'>
                        <span>برای دریافت آخرین اخبار و تخفیف ها ایمیل خود را وارد کنید</span>
                        <input type="text" placeholder='ایمیل شما' className='h-10 bg-red-800 border rounded-lg text-right pr-2'/>
                    </div>
                    <button className='h-1/2 bg-red-800 px-5 py-2 rounded-lg mt-8'>ثبت</button>
                </form>
            </div>

            <div className='w-1/2 flex flex-col text-center gap-3'>
                <span>ما را در شبکه های اجتماعی دنبال کنید</span>
                <div className='w-full flex flex-row-reverse place-items-center justify-center gap-8'>
                    <div className="text-2xl">
                        <ion-icon name="logo-youtube"></ion-icon>
                    </div>
                    <div className="text-2xl">
                        <ion-icon name="logo-pinterest"></ion-icon>
                    </div>
                    <div className="text-2xl">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                    <div className="text-2xl">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full h-2/4 flex flex-row-reverse place-items-center gap-4'>
        {courses.map((course, index) => (
            <div key={index}>
              <ul className='rtl flex flex-col gap-5 pr-4'>
                <li className='border-b-2'>{course.title}</li>
                <li>{course.link1}</li>
                <li>{course.link2}</li>
                <li>{course.link3}</li>
                <li>{course.link4}</li>
              </ul>
            </div>
          ))}

          <div className='w-2/4 h-full flex flex-col justify-center'>
            <span className='text-lg text-center'>فروشگاه اینترنتی کاستومی</span>
            <div className='flex flex-row-reverse place-items-center justify-center gap-8 mt-8'>
                <p className='flex flex-row-reverse'>
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
            </div>
            <div className='flex place-items-center justify-center mt-5 gap-5'>
                <img src="/image/footer/athadie.jpg" alt="" className='w-12' />
                <img src="/image/footer/samaneh.jpg" alt="" className='w-12' />
                <img src="/image/footer/namade.jpg" alt="" className='w-12' />
            </div>
          </div>
        </div>

        <div className='w-full rtl pr-4 pt-10'>
            <span>تمام حقوق این وبسایت متعلق به فروشگاه آنلاینکاستومی می باشد</span>
        </div>

    </div>
  )
}

export default Footer