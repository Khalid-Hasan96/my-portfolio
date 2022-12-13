import React from 'react';
import './Banner.css';
import Typical from 'react-typical';
import hello from '../../../assets/hello.svg';

const Banner = () => {
      return (
            <div className='banner-bg text-center flex flex-col items-center lg:flex-row py-10'>
                  <span data-aos="fade-right" className='w-full lg:w-1/2'>
                        <h6 className='text-gray-200'>Hello Welcome to my world</h6>
                        <h2 className='text-green-500 font-bold text-3xl md:text-4xl lg:text-5xl'>I'm Khalid Hasan</h2>
                        <h4 className='text-2xl text-gray-200 font-bold'>I'm a &nbsp;
                              <Typical
                                    steps={[
                                          'Web Developer', 400,
                                          'Front-end Developer', 400,
                                          'React Developer', 400,
                                    ]}
                                    loop={Infinity}
                                    wrapper="D"
                              />
                        </h4>
                  </span>
                  <img data-aos="fade-left" className='w-full lg:w-1/2 max-h-96' src={hello} alt="" />

            </div>
      );
};

export default Banner;