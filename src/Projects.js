import React from 'react';
import Aos from 'aos';
import { useEffect } from 'react';
import {VscGithub} from 'react-icons/vsc';


function Projects() {

    useEffect(()=>{
        Aos.init({
        duration:2000
          });
    });

return (
        <div>

            <div className='work-title'>
            <h1>Work</h1></div>
            <div className='projects-container'>

            <div data-aos="flip-left" className='hexagon1'>
            <h5>
            <a href='https://justyna-travel.netlify.app/'target="_blank" rel="noopener noreferrer">Travel Web</a>
            </h5>
            <small>Bootstrap</small>
            <a className='github' href='https://github.com/JustynaWebDev123/TravelWeb' target="_blank" rel="noopener noreferrer">
            <VscGithub/>
            </a>
            </div>
     
            <div data-aos="fade-right" className='hexagon2'>
            <h5>
            <a href='https://justyna-fab-quiz-app.netlify.app/'target="_blank" rel="noopener noreferrer">
            Quiz App</a>
            </h5>
            <small>React JS</small>
            <a className='github' href='https://github.com/JustynaWebDev123/QuizApp' target="_blank" rel="noopener noreferrer">
            <VscGithub/>
            </a>
            </div>

            <div data-aos="fade-left" className='hexagon3'>
            <h5><a href='https://justyna-delicious-food-app.netlify.app/'target="_blank" rel="noopener noreferrer">
            Food App</a>
            </h5>
            <small>React JS</small>
            <a className='github' href='https://github.com/JustynaWebDev123/Food-App' target="_blank" rel="noopener noreferrer">
            <VscGithub/>
            </a>
            </div>

            <div data-aos="fade-down" className='hexagon4'>
            <h5>Projects</h5>
            <a className='github' href='https://github.com/JustynaWebDev123/Portfolio2022'><VscGithub/>
            </a>
           </div>

            <div data-aos="fade-right" className='hexagon5'>
            <h5><a href='https://justyna-shopping-card.netlify.app/'target="_blank" rel="noopener noreferrer">
            Shopping Card</a>
            </h5>
            <small>React JS</small>
            <a className='github' href='https://github.com/JustynaWebDev123/ShoppingCard' target="_blank" rel="noopener noreferrer">
            <VscGithub/>
            </a>
            </div>

            <div data-aos="fade-left" className='hexagon6'>
            <h5><a href='https://justyna-calculator-tip123.netlify.app/'target="_blank" rel="noopener noreferrer">
            Tip Calculator</a>
            </h5>
            <small>Java Script</small>
            <a className='github' href='https://github.com/JustynaWebDev123/CalculatorTip' target="_blank" rel="noopener noreferrer">
            <VscGithub/>
            </a>
            </div>

            <div data-aos="fade-up" className='hexagon7'>
            <h5><a href='https://justyna-bulb-website.netlify.app/'target="_blank" rel="noopener noreferrer">
            Electricity Website</a>
            </h5>
            <small>Java Script</small>
            <a className='github' href='https://github.com/JustynaWebDev123/Electricity-Bulb' target="_blank" rel="noopener noreferrer">
            <VscGithub/>
            </a>
            </div>
            
        </div>
        </div>
    )
}

export default Projects;
