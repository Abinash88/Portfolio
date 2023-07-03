'use client'

import React, { useEffect } from 'react';
import LittleGirl from '../../public/little-gril.png'
import Image from 'next/image';
import dynamic from 'next/dynamic';
const AOS = dynamic(() => import('aos'));
import 'aos/dist/aos.css';

const Skills = () => {

    useEffect(() => {
        const initializeAOS = async () => {
          if (typeof window !== 'undefined') {
            const aos = await import('aos');
            aos.default.init({
                disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
                startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
                initClassName: 'aos-init', // class applied after initialization
                animatedClassName: 'aos-animate', // class applied on animation
                useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
                disableMutationObserver: false, // disables automatic mutations' detections (advanced)
                debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
                throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
                
              
                // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
                offset: 120, // offset (in px) from the original trigger point
                delay: 0, // values from 0 to 3000, with step 50ms
                duration: 400, // values from 0 to 3000, with step 50ms
                easing: 'ease', // default easing for AOS animations
                once: false, // whether animation should happen only once - while scrolling down
                mirror: false, // whether elements should animate out while scrolling past them
                anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
              
            });
          }
        };
    
        initializeAOS();
      }, []);
      

    return (
        <main id='Skill' className="skills w-[100%] h-auto py-10 flex relative  items-center justify-between ">
            <div className="w-[80%]  m-auto flex relative grid-flow-row h-[80%] justify-between girdskillbox">
                <div data-aos="fade-right"   data-aos-easing="ease-in"  data-aos-once="false"  className="box1 w-[100%] rounded-md">
                    <div   className="p-7">
                        <h2 className='text-[25px] md:text-[29px] text-white  mt-7  py-3'>My Skills</h2>
                        <p className='text-gray-100  mt-6 text-[16px]'>"Mastering the Art of Full Stack Development: Harnessing the Power of React/Next.js and Node/Express.js"</p>
                    </div>
                    <div className="w-full h-[60%] p-7 relative">

                        <Image alt='image' src={LittleGirl} className='w-[500px] lg:block hidden' />
                    </div>
                </div>
                <div data-aos="fade-down"   data-aos-easing="ease-in" className="box2  rounded-md p-3 md:p-5  flex justify-evenly w-full flex-col items-center">
                    <h2 className='text-white text-center text-[23px] md:text-[30px] inline-block mb-6 w-full'>Frontend</h2>
                    <div className=" w-full gridbox ">
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>HTML</h4>
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>CSS</h4>
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>JAVASCRIPT</h4>
                    </div>
                </div>
                <div data-aos="fade-left"   data-aos-easing="ease-in" className="box3  rounded-md p-3 md:p-5  flex justify-evenly w-full flex-col items-center">
                    <h2 className='text-white text-center text-[23px] md:text-[30px] inline-block mb-6 w-full'>Backend</h2>
                    <div className=" w-full gridbox">
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>NODEJS</h4>
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>MONGODB</h4>
                    </div>
                </div>
                <div data-aos="fade-up"   data-aos-easing="ease-in" className="box4  rounded-md p-3 md:p-5  flex justify-evenly w-full flex-col items-center">
                    <h2 className='text-white text-center text-[23px] md:text-[30px] inline-block mb-6 w-full'>Frameworks / Libaries</h2>
                    <div className=" w-full gridbox">
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>BOOTSTRAP</h4>
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>EXPRESSJS</h4>
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>SCSS</h4>
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>MONGOOSE</h4>
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>NEXTJS</h4>
                        <h4 className='text-purple-900 text-[15px] md:text-[20px] bg-white px-2 md:px-4 py-2 rounded-md'>REACTJS</h4>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Skills