'use client'


import HeroImage from '../../public/mobiles.png';
import Ball from '../../public/ball.png';
import { useEffect, useState } from 'react';
import Image from 'next/image'

export default function Hero() {

  const [num, setNum] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolltop = window.pageYOffset;
      const value = scrolltop * .5;
      setNum(value);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <main id='Hero' style={{ height: 'calc(100vh - 70px)' }} className=" w-[100%] flex relative  items-center justify-between ">
      <div className="w-[80%] m-auto flex relative  h-full justify-between ">
        <div className="md:w-[50%] w-100% h-full  pt-[60px] mb-5 md:pt-[120px] ">
          <h3  data-aos-duration="600" data-aos="slide-right" data-aos-easing="ease-in" className='smallhead text-[19px]  md:text-[27px] '>Hi! I am</h3>
          <h2   data-aos-duration="600" data-aos-delay="50" data-aos="slide-right" data-aos-easing="ease-in" className='heads text-[40px] leading-tight md:leading-normal md:text-[45px] lg:text-[60px] xl:text-[70px] mr-10  mt-3 mb-9 '>Abinash, <span className='headspan'>Mern <br />Stack</span> Developer</h2>
          <p  data-aos-duration="600" data-aos-delay="100" data-aos="slide-right" data-aos-easing="ease-in" className='md:text-[16px] relative z-10 text-[15px]'>Welcome to my world of web development expertise! As, a skilled MERN stack developer ready to turn your ideas into stunning digital experiences."</p>
          <div className="mt-[90px]">
          <animate  data-aos-duration="600" data-aos-delay="150" data-aos="slide-right" data-aos-easing="ease-in" href='#Contact' className='herobtn text-white px-14 py-3  rounded-sm  font-semibold '>
           Hire Me </animate>
          </div>
        </div>
        <div className="md:w-[50%] w-[100%] h-full flex md:relative absolute right-[-240px] md:right-[0] z-0 md:bottom-0  justify-center items-start pt-[100px]">
          <Image alt='image' style={{ top: num * .3 }} data-aos="zoom-out" data-aos-easing="ease-in" src={HeroImage} className={`z-0 w-[500px]  sm:relative  heroimage`} />
          <div style={{ top: -num }} className={`absolute ball z-0  right-[-40px] sm:right-[-50px]`}>
            <Image data-aos="zoom-in" alt='image' data-aos-easing="ease-in" src={Ball} className={`w-[150px] md:static absolute right-0 opacity-50`} />
          </div>
        </div>
      </div>
    </main>
  )
}
