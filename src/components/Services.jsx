import React from 'react'
import Link from 'next/link'
import { CodeBracketIcon, MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

const Services = () => {
    return (
        <div id='Services' className='lg:h-screen h-auto w-[100%] flex items-center justify-center'>
            <div className="flex flex-col items-center place-items-center justify-center  w-[80%] h-full  mt-10 mx-auto">
                <div className="w-[100%] h-[30%] flex flex-col items-center mt-10">
                    <h2 data-aos-duration="600" data-aos='slide-up' className='text-[28px] servicesection md:text-[55px] '>Services </h2>
                    <p data-aos-duration="600" data-aos='slide-up' className='mt-8 pl-3 text-center lg:text-[15px] text-[14px]'>The Services which i provide for the website development and design </p>

                </div>
                <div className="w-[100%] flex flex-col pt-9  h-full  items-center justify-center">
                    <div className="w-full lg:flex grid md:grid-cols-2 grid-cols-1 place-items-center justify-evenly relative h-full overflow-hidden">
                        <div data-aos-duration="600" data-aos='slide-right' className="lg:w-[300px] mb-4 md:w-[250px] w-[80%]  lg:h-[370px] md:h-[330px] h-auto flex flex-col items-center jusitify-center rounded-md p-4 servicebox1 service">
                            <PencilSquareIcon className='h-[80px]  rounded-full' />
                            <h3 className='lg:text-[45px] md:text-[35px] text-[26px] text-center mt-7 servicebox'>Website Design</h3>
                        </div>

                        <div data-aos-duration="600" data-aos='slide-up' className="lg:w-[300px] mb-4 md:w-[250px] w-[80%] lg:mt-8  lg:h-[370px] md:h-[330px] h-auto rounded-md p-4 servicebox2 service flex flex-col items-center jusitify-center">
                            <CodeBracketIcon className='h-[80px]  rounded-full' />
                            <h3 className='lg:text-[45px] md:text-[35px] text-[26px] text-center mt-7 servicebox'>Website Development</h3>
                        </div>

                        <div data-aos-duration="600" data-aos='slide-left' className="lg:w-[300px] mb-4 md:w-[250px] w-[80%]  lg:h-[370px] md:h-[330px] h-auto rounded-md p-4 servicebox3  flex flex-col items-center service jusitify-center">
                            <MagnifyingGlassIcon className='h-[80px]  rounded-full' />
                            <h3 className='lg:text-[45px] md:text-[35px] text-[26px] text-center mt-7 servicebox'>Seo Optimization</h3>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services