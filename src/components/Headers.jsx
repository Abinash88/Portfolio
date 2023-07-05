'use client'

import React, {useEffect, useState} from 'react'
import Logo from '../../public/white-bg-logo.png'
import Link from 'next/link';
import Image from 'next/image';

const Headers = () => {

  const [bars, setBars] = useState(false)
  const [changenav, setchangenav] = useState(false)

  const HandleBars = () => {
    setBars(!bars)
  }

  useEffect(() => {

    const handlenav = () => {
      const scroll = window.pageYOffset;
      if(scroll > 200) {
        setchangenav(true);
      }else {
        setchangenav(false);
      }
    }


    window.addEventListener('scroll', handlenav);
    return () => {
      window.removeEventListener('scroll', handlenav);
    }

  })


  return (
    <div id='Headers'>
      <div className={`flex justify-center ${changenav ? 'fixed z-50 top-0 bg-white h-[80px] transition-all duration-300 shadow-lg' : 'relative h-[70px]'} w-full transition-all duration-300  items-center z-50 `} >
        <div className='w-[80%] mx-auto flex justify-between items-center'>
          <div className="md:w-[20%] w-[30%]">
            <Link href={'/'}><Image className={`w-[150px] ${changenav ? 'w-[130px] transition-all duration-400':''} transition-all duration-400 `} src={Logo} alt='images' /></Link>
          </div>
          <nav className={`flex-1 md:static ${bars ? 'right-0' : 'right-[-100%]'} md:bg-transparent bg-gray-800 transition  duration-500 fixed w-[300px]  navbar top-0 h-screen md:h-[70px] md:w-auto`}>
          <svg onClick={HandleBars} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`  text-white   h-8 md:hidden cursor-pointer absolute right-12 top-5 z-100`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
            <ul className='flex justify-end items-start md:items-center md:flex-row flex-col md:h-full  space-y-6 md:space-y-0 md:pt-0 pt-[80px]'>
              <li><Link className='links pb-2   text-white md:text-[15px]  text-[18px] md:text-gray-800' href='#Hero'>Home</Link></li>
              <li><Link className='links pb-2   text-white md:text-[15px]  text-[18px] md:text-gray-800' href='#Skill' >Skills</Link></li>
              <li><Link className='links pb-2   text-white md:text-[15px]  text-[18px] md:text-gray-800' href='#About'>About</Link></li>
              <li><Link className='links pb-2   text-white md:text-[15px]  text-[18px] md:text-gray-800' href='#Services'>Services</Link></li>
              <li><Link className='links pb-2   text-white md:text-[15px]  text-[18px] md:text-gray-800' href='#Contact'>Contact</Link></li>
            </ul>
          </nav>
          <svg onClick={HandleBars} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`  h-8 md:hidden cursor-pointer relative `}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default Headers