import React from 'react'
import { BsGem } from "react-icons/bs";

function Header() {
    return (
        <header>
            
            <h1 className='logo'><BsGem/></h1>
            
            <nav className='nav-container'>

<ul>
<li><a href="about.asp">Work</a></li>
  <li><a href="about.asp">About</a></li>
  <li><a href="#form">Contact</a></li>
 
</ul>
</nav>           

        </header>
    )
}

export default Header
