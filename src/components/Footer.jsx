import Image from 'next/image'
import React from 'react'
import Logo from '../../public/white-logo.png'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    const dateYear = () => {
        const years = new Date().getFullYear();
        return years
    }
    
    return (
        <div className='w-full h-auto bg-purple-700 flex items-end'>
            <div className="w-[80%] m-auto flex-col items-center pb-[50px] pt-[40px] h-[90%] relative  flex">
                <div className="flex-1">
                    <div className="">
                        <Image src={Logo} className='w-[150px]' />
                    </div>

                    <div className="flex space-x-3">
                        <div className="bg-red-500 hover:bg-red-600 w-10 flex items-center justify-center h-10 rounded-full  cursor-pointer mt-8 p-3">
                            <a href="">  <FaFacebookF className='h-7 text-white
                      '/></a>
                        </div>
                        <div className="bg-red-500 hover:bg-red-600 w-10 flex items-center justify-center h-10 rounded-full  cursor-pointer mt-8 p-3">
                            <a href=""> <FaInstagram className='h-7 text-white
                      '/></a>
                        </div>
                        <div className="bg-red-500 hover:bg-red-600 w-10 flex items-center justify-center h-10 rounded-full  cursor-pointer mt-8 p-3">
                            <a href=""><FaLinkedin className='h-7 text-white
                      '/></a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center mt-10">
                    <ul className='flex justify-end items-start   '>
                        <li><a className='links pb-2 md:pb-0 text-white md:text-[15px]   text-[14px] md:text-gray-100' href='#Hero'>Home</a></li>
                        <li><a className='links pb-2 md:pb-0 text-white md:text-[15px]   text-[14px] md:text-gray-100' href='#Skill' >Skills</a></li>
                        <li><a className='links pb-2 md:pb-0 text-white md:text-[15px]   text-[14px] md:text-gray-100' href={`#About`}>About</a></li>
                        <li><a className='links pb-2 md:pb-0 text-white md:text-[15px]   text-[14px] md:text-gray-100' href={`#Services`}>Services</a></li>
                        <li><a className='links pb-2 md:pb-0 text-white md:text-[15px]   text-[14px] md:text-gray-100' href={`#Contact`}>Contact</a></li>
                    </ul>
                </div>
                <span className='text-white font-light mt-10'>Copyright © {dateYear()}. All rights Reserved Abinash.</span>

            </div>
        </div>
    )
}

export default Footer