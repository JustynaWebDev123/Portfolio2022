import React from 'react'
import Aos from 'aos';
import { useEffect } from 'react/cjs/react.development';
import {VscGithub } from 'react-icons/vsc';


function Projects() {


    useEffect(()=>{
        Aos.init({
duration:2000
          });
    })

    
    return (
        <div >

<div className='work-title'><h1>Work</h1></div>
        <div className='projects-container'>
     
            <div data-aos="fade-down" className='hexagon1'>
                <h5> Weather App </h5>
                <small>Java Script</small>
                <a className='github' href='https://github.com/JustynaWebDev123' target="_blank" rel="noopener noreferrer"><VscGithub/></a> 
            </div>

            <div data-aos="fade-right" className='hexagon2'>
            <h5> Quiz App </h5>
            <small>React JS</small>
            <a className='github' href='https://github.com/JustynaWebDev123' target="_blank" rel="noopener noreferrer"><VscGithub/></a>
            </div>

            <div data-aos="fade-left" className='hexagon3'>
            <h5> Food App  </h5>
            <small>React JS</small>
            <a className='github' href='https://github.com/JustynaWebDev123' target="_blank" rel="noopener noreferrer"><VscGithub/></a>
            </div>

            <div data-aos="flip-left" className='hexagon4'>
            <h5>Travel Web </h5>
            <small>Java Script</small>
            <a className='github' href='https://github.com/JustynaWebDev123' target="_blank" rel="noopener noreferrer"><VscGithub/></a>
            </div>

            <div data-aos="fade-right" className='hexagon5'>
            <h5> Shopping Card </h5>
            <small>React JS</small>
            <a className='github' href='https://github.com/JustynaWebDev123' target="_blank" rel="noopener noreferrer"><VscGithub/></a>
            </div>

            <div data-aos="fade-left" className='hexagon6'>
            <h5>Tip Calculator</h5>
            <small>Java Script</small>
            <a className='github' href='https://github.com/JustynaWebDev123' target="_blank" rel="noopener noreferrer"><VscGithub/></a>
            </div>

            <div data-aos="fade-up" className='hexagon7'>
            <h5>Electricity Website</h5>
            <small>Java Script</small>
            <a className='github' href='https://github.com/JustynaWebDev123' target="_blank" rel="noopener noreferrer"><VscGithub/></a>
            </div>
            
        </div>



        </div>
    )
}

export default Projects;
