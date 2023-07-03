import Image from 'next/image'
import React from 'react'
import User from '../../public/Abinsh.png'
import Link from 'next/link'

const About = () => {
    return (
        <div id='About' className='h-auto py-10 w-[100%] flex items-center justify-center relative'>
            <div className=" md:w-[80%] w-[90%] flex flex-col lg:flex-row  mx-auto ">
                <div className="lg:w-[40%] w-[100%]  flex pl-8 flex-col justify-center ">
                    <h2 data-aos-duration="600" data-aos='slide-left' className='text-[28px]  aboutsection md:text-[55px] '>About Me</h2>
                    <p data-aos-duration="600" data-aos='slide-right' className='mt-8 w-[100%] lg:text-[16px] md:text-[15px] text-[14px] font-light'>
                        Hi there, I'm Abinash Subedi, a highly skilled full stack developer specializing in MERN stack development. With my expertise, I can create visually appealing and functional websites that leave a lasting impression. I excel in using React/Next.js for the front-end, ensuring a smooth and intuitive user experience. On the back-end, I'm proficient in Node.js/Express.js, allowing me to build robust server-side logic. I also have experience working with MongoDB, ensuring efficient data management. Let's work together to bring your website vision to life!
                    </p>
                    <Link data-aos-duration="600" data-aos='slide-left' href={'/'}><button className='herobtn bgbtn text-white px-14 py-3 mt-14 rounded-sm font-semibold block  '>Hire Me</button> </Link>
                </div>
                <div className="lg:w-[60%] w-[100%]   flex h-full justify-start">
                    <div data-aos-duration="600" data-aos='Zoom-in' className="w-[80%] rounded-full  flex justify-start relative h-full overflow-hidden">
                        <Image src={User} className='w-full imageshadow transform translate-y-4 rotate-[-10deg] h-full' />
                    </div>
                </div>
                <div className="w-[400px] absolute h-full flex flex-col items-start lg:top-5 md:top-[400px] top-[500px] right-[-180px] md:right-[-20px] lg:right-0">
                    <div data-aos-duration="600" data-aos='flip-left' className="inline-block whatido what1  text-white text-[14px] md:text-[16px] font-semibold md:px-4 px-3 md:py-3 py-[5px] rounded-md bg-purple-700 transform rotate-[-10deg] translate-y-[100px]">I will create responsive website</div>
                    <div data-aos-duration="600" data-aos='flip-left' className="inline-block whatido what2  text-white text-[14px] md:text-[16px] font-semibold md:px-4 px-3 md:py-3 py-[5px] rounded-md bg-purple-500 transform rotate-[8deg] translate-y-[170px]">I will provide the full seo OPT</div>
                    <div data-aos-duration="600" data-aos='flip-left' className="inline-block whatido what3  text-white text-[14px] md:text-[16px] font-semibold md:px-4 px-3 md:py-3 py-[5px] rounded-md bg-purple-600 transform rotate-[-10deg] translate-y-[220px]">I will use Nextjs & expressjs</div>
                </div>
            </div>
        </div>
    )
}

export default About