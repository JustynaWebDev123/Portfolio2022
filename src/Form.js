import React,{useState} from 'react';


const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
  }

function Form() {



    const [state, setState] = useState({name: '', email: '', message: '' })

    const handleChange = e =>
      setState({...state, [e.target.name]: e.target.value })
  
    const handleSubmit = e => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contactForm', ...state })
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error))
      e.preventDefault()
    }
  
    
    

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
      className='contactForm' 
      onSubmit={handleSubmit}>

      <input 
        type='text' 
        name='name' 
        value={state.name}
        placeholder='Enter your name'
        onChange={handleChange} />

      <input 
        type='email' 
        name='email' 
        value={state.email}
        placeholder='Enter your email'
        onChange={handleChange} />

      <textarea 
        name='message' 
        placeholder='Messaage'
        value={state.message}
        onChange={handleChange}></textarea>
      <button type='submit'>Submit</button>
    </form>
  

</div>
</div>
    )
}

export default Form;
