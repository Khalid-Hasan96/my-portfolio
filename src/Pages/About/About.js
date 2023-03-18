import React from 'react';
import './About.css';
import profile from '../../assets/profile.png';
import Footer from '../Footer/Footer';

const About = () => {
      return (
            <div className='pt-14  bg-gradient-to-r from-indigo-800 via-blue-800 to-violet-800'>
                  <h2 className='text-center text-2xl text-gray-200 font-semibold project-underline'>About</h2>
                  <div className='sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto mt-5 mb-10 flex flex-col lg:flex-row justify-center items-center backdrop-blur-sm bg-black/30 rounded-lg'>
                        <div className='w-full lg:w-1/2' data-aos="zoom-in-right">
                              <img src={profile} alt="" />
                        </div>
                        <div className='text-white p-5 w-full lg:w-1/2' data-aos="zoom-in-left">
                              <p>I'm <span className='text-green-500'>Khalid Hasan</span>. I'm a Web Developer. I can build websites from scratch, the website will be fully responsive. I use ReactJs as Frontend, NodeJS & Express JS as Backend, MongoDB as the database, and for authentication I use Firebase. I can make pixel-perfect design. </p>
                        </div>
                  </div>
                  <Footer></Footer>
            </div>
      );
};

export default About;