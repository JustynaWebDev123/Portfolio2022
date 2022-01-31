import React from 'react'
import Header from './Header'
import BackgroundVideo from './BackgroundVideo'
import "./index.css"
import Projects from './Projects'
import Intro from './Intro'
import Form from './Form'

function App() {
return (
    <div>
    <Header/>
    <BackgroundVideo/>
    <Intro/> 
    <div>
    <Projects/>
    </div>
    <Form/>
    </div>
    )
}

export default App;
