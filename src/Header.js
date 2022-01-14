import React from 'react'
import { GiAbstract065 } from 'react-icons/gi';

function Header() {
    return (
        <header>
            
            <h1 className='logo'><GiAbstract065/></h1>
            
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
