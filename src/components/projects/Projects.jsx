import React from 'react';
import "./projects.css";
import DocBooker from './Frontend';
import CareerHub from './Backend';


const Projects = () => {
  return (
    <section className="skills section" id='projects'>
        <h2 className='section_title'>Projects</h2>
        <span className='section_subtitle'></span>

        <div className='skills_containe container grid'>
            <DocBooker/>
            <CareerHub />
        </div>
    </section>
  )
}

export default Projects