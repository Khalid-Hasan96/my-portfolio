import React from 'react';
import signature from '../../assets/logo.png';
import linkedin from '../../assets/logo/linkedin.png';
import github from '../../assets/logo/github (2).png';
import facebook from '../../assets/logo/facebook.png';
import { Link } from 'react-router-dom';

const Footer = () => {
      return (
            <div className='bg-gray-900 p-10 text-white text-center'>
                  <img src={signature} className="mx-auto h-12" alt="" />
                  <div className='flex justify-center items-center gap-6 my-4'>
                        <a href='https://www.linkedin.com/in/khalid-hasan96/' target='_blank' rel='noreferrer'><img className='w-8' src={linkedin} alt="" /> </a>
                        <a href='https://github.com/Khalid-Hasan96' target='_blank' rel='noreferrer'><img className='w-8' src={github} alt="" /> </a>
                        <a href='https://www.facebook.com/khalid.bappy.5/' target='_blank' rel='noreferrer'><img className='w-8' src={facebook} alt="" /> </a>
                  </div>
                  <div>
                        <p>Copyright © 2022 - All right reserved by <a href='https://www.linkedin.com/in/khalid-hasan96/' rel='noreferrer' target='_blank' className='text-green-500'>Khalid Hasan</a></p>
                  </div>
            </div>
      );
};

export default Footer;