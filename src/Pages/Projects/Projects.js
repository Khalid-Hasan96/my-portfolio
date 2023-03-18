import React, { useEffect, useState } from 'react';
import ShowProjects from './ShowProjects';
import './Projects.css'
import Footer from '../Footer/Footer';

const Projects = () => {
      const [projects, setProjects] = useState([]);
      useEffect(() => {
            fetch('projects.json')
                  .then(res => res.json())
                  .then(data => setProjects(data))
      }, [])

      return (
            <section className='pt-10  bg-gradient-to-r from-indigo-800 via-blue-800 to-violet-800'>
                  <h2 className='text-center text-2xl text-gray-200 font-semibold project-underline'>Projects</h2>
                  <div className=''>
                        <div className='mt-5'>
                              {
                                    projects.map(project => <ShowProjects key={project.id} project={project}></ShowProjects>)
                              }
                        </div>
                  </div>
                  <Footer></Footer>
            </section>
      );
};

export default Projects;