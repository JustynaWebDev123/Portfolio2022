import React from 'react';




function Form() {



   
  
    
    

    return (
        
    <div>
<div className='form-container'>

    <div className='justynaQuote-container'>

    <blockquote className='justynaQuote'>
    <p> " I'd like to make the world a better place...<br></br>but they won't give me the source code. "</p>
    <figcaption>
        <cite>Justyna</cite>
    </figcaption>
    </blockquote>

    </div>

 
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-filed">
    
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
       

    
</div>
</div>
    )
}

export default Form;
