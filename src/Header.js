import React from 'react';
import { BsGem } from "react-icons/bs";

function Header() {
    return (
        <header>
            <h1 className='logo'><BsGem/></h1>
            <nav className='nav-container'>
                <ul>
                <li><a href="https://justyna-about-me.netlify.app" target="_blank" rel="noopener noreferrer">About me</a></li>
                <li><a href="#form">Contact</a></li>
                </ul>
            </nav>           
        </header>
        )}

export default Header;
