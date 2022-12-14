import React from 'react';
import profile from '../../../assets/profile.png';
import './HomeAbout.css';

const HomeAbout = () => {
      return (
            <section className='py-10' data-aos="zoom-in-up">
                  <h2 className='text-3xl text-gray-200 font-semibold mb-5 underline-design mx-auto'>About Me</h2>
                  <div className='mt-5 flex flex-col lg:flex-row justify-center items-center backdrop-blur-sm bg-black/30 rounded-lg'>
                        <div className='w-full lg:w-1/2' data-aos="zoom-in-right">
                              <img src={profile} alt="" />
                        </div>
                        <div className='text-white p-5 w-full lg:w-1/2' data-aos="zoom-in-left">

                              <p>I'm <span className='text-green-500'>Khalid Hasan</span>. I'm a Web Developer. I can build websites from scratch, the website will be fully responsive. I use ReactJs as Frontend, NodeJS & Express JS as Backend, MongoDB as the database, and for authentication I use Firebase. I can make pixel-perfect design. </p>
                        </div>
                  </div>
            </section>
      );
};

export default HomeAbout;