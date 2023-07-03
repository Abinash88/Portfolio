import React from 'react'
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Contact = () => {
    return (
        <div id='Contact' className='h-auto w-[100%] mt-5 flex items-center justify-center'>
            <div className="flex md:w-[80%] w-[90%] lg:h-[90%] h-auto lg:flex-row flex-col items-center mx-auto">
                <div className="md:w-[50%] w-[100%] flex flex-col justify-center ">
                    <h2  data-aos="slide-right" data-aos-duration='600' className='text-[28px] Contactsection md:text-[55px] '>Contact Me</h2>
                    <p data-aos="slide-right" data-aos-duration='600' className='mt-8 w-[90%]'>Let's Connect! Share your website idea with me by filling out the following form. I'm excited to bring your vision to life.</p>
                    <div data-aos="slide-right" data-aos-duration='600' data-aos-delay='100' className="mt-9 flex space-x-3 items-center">
                        <PhoneIcon className='h-[50px] broder text-red-400 border-red-400 border-2 rounded-full  p-2' />
                        <span className='text-[17px] font-semibold' >9834734323</span>
                    </div>
                    <div data-aos="slide-right" data-aos-duration='600' data-aos-delay='200' className="mt-5 flex space-x-3 items-center">
                        <EnvelopeIcon className='h-[50px] broder text-red-400 border-red-400 border-2 rounded-full  p-2' />
                        <span className='text-[17px] font-semibold' >subediabinash@gmail.com</span>
                    </div>
                    <div data-aos="slide-right" data-aos-duration='600' data-aos-delay='300' className="mt-5 flex space-x-3 items-center">
                        <MapIcon className='h-[50px] broder text-red-400 border-red-400 border-2 rounded-full  p-2' />
                        <span className='text-[17px] font-semibold' >Nepal jhapa kankai-2 surunga </span>
                    </div>
                    
                </div>
                <div className="lg:w-[50%] w-[100%] flex relative  h-auto justify-center">
                    <form className="lg:w-[90%] w-[100%] p-5 relative z-10 flex justify-center  contactform items-center flex-col rounded-md  h-[600px] overflow-hidden">
                        <div data-aos="slide-left" data-aos-duration='600' data-aos-delay='100'  className="w-full flex justify-center mt-5 space-x-3 items-start">
                            <input type="text"  className='w-[50%] px-3 rounded-md py-3' placeholder='FirstName' />
                            <input type="text"  className='w-[50%] px-3 rounded-md py-3' placeholder='LastName' />
                        </div>
                        <div data-aos="slide-left" data-aos-duration='600' data-aos-delay='200' className="w-full flex justify-center mt-5 space-x-3 items-start">
                            <input type="email"  className='w-[100%] px-3 rounded-md py-3' placeholder='Email address' />
                        </div>
                        <div data-aos="slide-left" data-aos-duration='600' data-aos-delay='300' className="w-full flex justify-center mt-5 space-x-3 items-start">
                            <input type="text"  className='w-[100%] px-3 rounded-md py-3' placeholder='subject' />
                        </div>
                        <div data-aos="slide-left" data-aos-duration='600' data-aos-delay='400' className="w-full flex justify-center mt-5 space-x-3 items-start">
                            <textarea type="text" rows={'6'} className='w-[100%] px-3 rounded-md py-3' placeholder='Message' ></textarea>
                        </div>
                        <button className='px-[36px] py-[15px] rounded-md bg-red-500 hover:bg-red-600 text-white mt-10 inline'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact