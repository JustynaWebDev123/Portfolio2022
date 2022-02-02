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

    <form autoComplete="off" name="contact-form" data-netlify="true" method="POST" id="form">
    <input type="hidden" name="form-name" value="contact-form" />

    <h2>Contact me</h2> 

    <div className="name">
         
<input
     type="text"
     placeholder='First name'
     name="name"
     className="firstName"
     tabIndex="1"
     />

<input
     type="text"
     placeholder='Last name'
     name="name"
     className="firstName"
     tabIndex="2"
     />


<input
     type="email"
     name="email"
     className="email"
     placeholder="example@corp.com"
     tabIndex="3"
/>   
         
<textarea
    placeholder="Start typing..."
    className="message"
    name="message"
    tabIndex="4"
/>
</div>
         
<div>

<button 
    className='form-btn'
    name="submit" 
    type="submit" 
    id="contact-submit">Submit</button>

</div>

</form>
</div>
</div>
    )
}

export default Form;
