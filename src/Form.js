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
            
    <form 
      method='POST' 
      name='contactform' 
      className='contactForm'>

      <input 
        type='text' 
        name='name' 
        placeholder='Enter your name' />

      <input 
        type='email' 
        name='email' 
        placeholder='Enter your email' />

      <textarea 
        name='message' 
        placeholder='Messaage'></textarea>

      <button type='submit'>Submit</button>

    </form>


</div>
</div>
    )
}

export default Form;
