import React from 'react';
import hello from '../../../assets/hello.svg';
import download from '../../../assets/download.png';
import Typewriter from 'typewriter-effect';

const Banner = () => {
      return (
            <div className='banner-bg flex flex-col items-center text-center lg:flex-row py-10'>
                  <span data-aos="fade-right" className='w-full lg:w-1/2'>
                        <h6 className='text-gray-200'>Hello Welcome to my world</h6>
                        <h2 className='text-green-500 font-bold text-3xl md:text-4xl lg:text-5xl'>I'm Khalid Hasan</h2>
                        <h4 className='text-2xl text-gray-200 font-bold'><Typewriter
                              options={{
                                    strings: ['Web Developer', 'Full Stack Developer', 'MERN Developer'],
                                    autoStart: true,
                                    loop: true,
                              }}
                        /></h4>

                        <a href='Khalid Hasan.pdf'>
                              <button className='btn btn-success mt-5'>
                                    Download Resume
                                    <img src={download} className="w-6 ml-2 animate-bounce" alt="" />
                              </button>
                        </a>
                  </span>
                  <img data-aos="fade-left" className='w-full lg:w-1/2 max-h-96' src={hello} alt="" />
            </div>
      );
};

export default Banner;