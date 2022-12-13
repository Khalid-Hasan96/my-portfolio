import React, { useEffect, useState } from 'react';
import ShowProjects from './ShowProjects';
import './Projects.css'

const Projects = () => {
      const [projects, setProjects] = useState([]);
      useEffect(() => {
            fetch('projects.json')
                  .then(res => res.json())
                  .then(data => setProjects(data))
      }, [])

      return (
            <section className='py-14 projects-bg'>
                  <h2 className='text-center text-2xl text-gray-200 font-semibold'>Projects</h2>
                  <div className='max-w-screen-xl mx-auto'>
                        <div className='mt-5'>
                              {
                                    projects.map(project => <ShowProjects key={project.id} project={project}></ShowProjects>)
                              }
                        </div>
                  </div>
            </section>
      );
};

export default Projects;