import React from 'react';
import './Contact.css';
import location from '../../assets/contact/placeholder.png';
import whatsapp from '../../assets/contact/whatsapp.png';
import gmail from '../../assets/contact/gmail.png';
import Footer from '../Footer/Footer';
import emailjs from 'emailjs-com';

const Contact = () => {

      const sendEmail = event => {
            event.preventDefault();

            emailjs.sendForm('service_py8ra3n', 'template_frygkio', event.target, 'dMu7PjuF0yfqvrfN5')
                  .then((result) => {
                        console.log(result.text);
                  }, (error) => {
                        console.log(error.text);
                  });
            event.target.reset()
      }

      return (
            <div className='pt-14 contact-bg'>
                  <h2 className='text-center text-2xl text-gray-200 font-semibold contact-underline'>Contact Me</h2>
                  <div className='sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto mt-5 mb-10 flex flex-col lg:flex-row justify-center items-center backdrop-blur-sm bg-black/30 rounded-lg'>
                        <div className='w-full lg:w-1/2 p-10' data-aos="zoom-in-right">
                              <span className='text-white flex items-center gap-5'><img src={location} className="w-8" alt="" /> Dhaka, Bangladesh</span>
                              <span className='text-white flex items-center gap-5 my-5'><img src={whatsapp} className="w-8" alt="" /> +880 1625178628</span>
                              <span className='text-white flex items-center gap-5'><img src={gmail} className="w-8" alt="" /> kh747266@gmail.com</span>
                        </div>
                        <div className='text-black p-5 w-full lg:w-1/2' data-aos="zoom-in-left">
                              <form onSubmit={sendEmail}>
                                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full text-black" />
                                    <input name='email' type="email" placeholder="example@gmail.com" className="input input-bordered w-full text-black my-5" />
                                    <textarea name='message' className="textarea textarea-bordered w-full text-black" placeholder="Message"></textarea>
                                    <button type='submit' className='btn btn-accent text-white mt-4'>
                                          <div class="svg-wrapper-1">
                                                <div class="svg-wrapper">
                                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                                      </svg>
                                                </div>
                                          </div>
                                          <span>Send</span>
                                    </button>
                              </form>
                        </div>
                  </div>
                  <Footer></Footer>
            </div>
      );
};

export default Contact;