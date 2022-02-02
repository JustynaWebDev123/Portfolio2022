import React from 'react';


function Intro() {
  
  const copy = async () => {
    await navigator.clipboard.writeText("justyna.smaga1992@gmail.com");
    alert(`Justyna's email has been copied to clipboard`);
      }

  return (
    <main>
      <div className="myIntro">
      <h1>I am Justyna,</h1>
      <p> a web designer and front-end developer based in Edinburgh. I specialise in resolving web design issues, creating smart user-friendly interfaces and capturing useful interactions. When not working or futzing around with code, I explore cultures and new parts of the world.</p>
            
      <div className='myIntro-Btn'>
            
        <div onClick={copy} className='btn'>
        <a href="#a"> Copy my email directly...</a>
        </div>

      </div>
        
        </div>
        
    </main>
    )
}

export default Intro;

