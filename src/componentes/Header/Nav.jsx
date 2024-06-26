import React, { useState } from "react";

const Nav = () => {
    let Links =[
        {name:"پوشاک",link:"/"},
        {name:"لوازم خانه",link:"/"},
        {name:"قاب موبایل",link:"/"},
        {name:"اکسسوری",link:"/"},
        {name:"مدرسه و اداره",link:"/"},
        {name:"کارت و پوستر",link:"/"},
        {name:"جشن و مهمانی",link:"/"},

    ];
    let [open,setOpen] = useState(false);
    return (
        <div className='w-full top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-5
                cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <ul className={`md:w-full md:flex flex-row-reverse md:justify-center md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
                left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0 `}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className='md:ml-8 text-sm md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    
                </ul>

            </div>
        </div>
    )
}

export default Nav