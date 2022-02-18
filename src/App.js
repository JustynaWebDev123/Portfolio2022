import React from 'react';
import Header from './Header';
import BackgroundVideo from './BackgroundVideo';
import "./index.css";
import Projects from './Projects';
import Intro from './Intro';
import Form from './Form';
import Feedback from './Feedback';

function App() {
return (
    <div>
    <Header/>
    <BackgroundVideo/>
    <Intro/> 
    <Projects/>
    <Form/>
    <Feedback/>
   
</div>
    )
}

export default App;
