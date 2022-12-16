import React from 'react';
import { Link } from 'react-router-dom';

const ShowProjects = ({ project }) => {
      const { name, type, technology, features, img, id, server, client, live } = project;

      console.log(server)
      return (

            <div className="hero text-white backdrop-blur-sm bg-black/30 mb-5 rounded-lg" data-aos="fade-down">
                  <div className="hero-content flex-col lg:flex-row">
                        <img src={img} alt={name} className="w-full lg:w-1/4  rounded-lg shadow-2xl" />
                        <div>
                              <h1 className="text-4xl font-bold">{name}</h1>
                              <p className="py-6">{features}</p>
                              <div className='flex flex-wrap gap-3'>
                                    <a href={server} target="_blank" rel='noreferrer'><button className="btn glass">Server Repo</button></a>
                                    <a href={client} target="_blank" rel='noreferrer'><button className="btn glass">Client Repo</button></a>
                                    <a href={live} target="_blank" rel='noreferrer'><button className="btn glass">Live Site</button></a>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ShowProjects;