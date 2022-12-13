import React from 'react';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';

const Home = () => {
      return (
            <section className='bg-gradient-to-r from-indigo-900 to-gray-900'>
                  <div className='max-w-screen-xl mx-auto'>
                        <Banner></Banner>
                        <Skills></Skills>
                  </div>
            </section>
      );
};

export default Home;