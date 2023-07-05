import React from 'react'
import Logo from '../../public/white-logo.png'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link';

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
                            <Link href="https://www.facebook.com/abinash.sub/">  <FaFacebookF className='h-7 text-white
                      '/></Link>
                        </div>
                        <div className="bg-red-500 hover:bg-red-600 w-10 flex items-center justify-center h-10 rounded-full  cursor-pointer mt-8 p-3">
                            <Link href="https://www.instagram.com/abinash84321/"> <FaInstagram className='h-7 text-white
                      '/></Link>
                        </div>
                        <div className="bg-red-500 hover:bg-red-600 w-10 flex items-center justify-center h-10 rounded-full  cursor-pointer mt-8 p-3">
                            <Link href="https://twitter.com/Abinashsub"><FaTwitter className='h-7 text-white
                      '/></Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center mt-10">
                    <ul className='flex justify-end items-start   '>
                        <li><Link className='links pb-2 md:pb-0 text-white md:text-[15px]   text-[14px] md:text-gray-100' href='#Hero'>Home</Link></li>
                        <li><Link className='links pb-2 md:pb-0 text-white md:text-[15px]   text-[14px] md:text-gray-100' href='#Skill' >Skills</Link></li>
                        <li><Link className='links pb-2 md:pb-0 text-white md:text-[15px]   text-[14px] md:text-gray-100' href={`#About`}>About</Link></li>
                        <li><Link className='links pb-2 md:pb-0 text-white md:text-[15px]   text-[14px] md:text-gray-100' href={`#Services`}>Services</Link></li>
                        <li><Link className='links pb-2 md:pb-0 text-white md:text-[15px]   text-[14px] md:text-gray-100' href={`#Contact`}>Contact</Link></li>
                    </ul>
                </div>
                <span className='text-white font-light mt-10'>Copyright © {dateYear()}. All rights Reserved by Abinash.</span>

            </div>
        </div>
    )
}

export default Footer