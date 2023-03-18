import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeProject from '../HomeProject/HomeProject';
import InTouch from '../InTouch/InTouch';
import Skills from '../Skills/Skills';
// import './Home.css'

const Home = () => {
      return (
            // <section className='bg-gradient-to-r from-indigo-900 to-gray-900'>
            <section className=' bg-gradient-to-r from-indigo-800 via-blue-800 to-violet-800'>
                  <div className=''>

                        <Banner></Banner>
                        <Skills></Skills>
                        <HomeProject></HomeProject>
                        <HomeAbout></HomeAbout>
                        <InTouch></InTouch>
                  </div>
                  <Footer></Footer>
            </section>
      );
};

export default Home;