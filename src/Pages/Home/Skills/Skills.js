import React from 'react';
import html from '../../../assets/Front-end/html-5.png';
import css from '../../../assets/Front-end/css-3.png';
import javascript from '../../../assets/Front-end/java-script.png';
import react from '../../../assets/Front-end/react.png';
import router from '../../../assets/Front-end/react-router.png';
import tailwind from '../../../assets/Front-end/tailwind.png';
import bootstrap from '../../../assets/Front-end/bootstrap.png';
import node from '../../../assets/Backend/node.webp';
import mongo from '../../../assets/Backend/mongo.png';
import express from '../../../assets/Backend/express.png';
import github from '../../../assets/Tools/github.png';
import netlify from '../../../assets/Tools/netlify.png';
import firebase from '../../../assets/Tools/firebase.png';
import vercel from '../../../assets/Tools/vercel.svg';
import vscode from '../../../assets/Tools/vs-code.png';
import './Skills.css'

const Skills = () => {
      return (
            <section className='py-14'>
                  <h2 className='text-center text-3xl font-semibold text-gray-200 skills'>Skills</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                        <div data-aos="fade-right" className='rounded-lg text-center backdrop-blur-sm bg-black/30 shadow-2xl'>
                              <h4 className='text-green-500 font-semibold text-2xl pt-3'>Front-end</h4>
                              <div className="divider"></div>
                              <p className='text-white mt-3 px-5 pb-5 flex flex-wrap items-center justify-center gap-2'>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={html} className="w-8 mr-1" alt="" /> HTML</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={css} className="w-8 mr-1" alt="" /> CSS</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={javascript} className="w-8 mr-1" alt="" /> JavaScript</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={react} className="w-8 mr-1" alt="" /> React</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={router} className="w-8 mr-1" alt="" /> React Router DOM</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={tailwind} className="w-8 mr-1" alt="" /> Tailwind CSS</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={bootstrap} className="w-8 mr-1" alt="" /> Bootstrap</span>
                              </p>
                        </div>
                        <div className='rounded-lg text-center backdrop-blur-sm bg-black/30 shadow-2xl' data-aos="zoom-in">
                              <h4 className='text-green-500 font-semibold text-2xl pt-3'>Backend</h4>
                              <div className="divider"></div>
                              <p className='text-white mt-3 px-5 pb-5 flex flex-wrap items-center justify-center gap-4'>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={node} className="w-8 mr-1" alt="" /> Node JS</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={express} className="w-8 mr-1" alt="" /> Express JS</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={mongo} className="w-8 mr-1" alt="" /> MongoDB</span>

                              </p>
                        </div>
                        <div className='rounded-lg text-center backdrop-blur-sm bg-black/30 shadow-2xl' data-aos="fade-left">
                              <h4 className='text-green-500 font-semibold text-2xl pt-3'>Tools</h4>
                              <div className="divider"></div>
                              <p className='text-white mt-3 px-5 pb-5 flex flex-wrap items-center justify-center gap-2'>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={github} className="w-8 mr-1" alt="" /> GitHub</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={netlify} className="w-8 mr-1" alt="" /> Netlify</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={vercel} className="w-8 mr-1" alt="" /> Vercel</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={firebase} className="w-8 mr-1" alt="" /> Firebase</span>
                                    <span className='flex items-center border rounded-2xl p-2 hover:bg-white hover:text-black transition ease-in duration-300'> <img src={vscode} className="w-8 mr-1" alt="" /> VS Code</span>

                              </p>
                        </div>


                  </div>
            </section>
      );
};

export default Skills;