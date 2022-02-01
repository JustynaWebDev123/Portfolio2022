import React,{useState} from 'react'

function Form() {
    
    const [inputs, setInputs] = useState({});
    const [textarea,setTextarea]=useState();

const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
}

const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Please fill out this form:)");
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
            

<form autoComplete="off" onSubmit={handleSubmit} id='form' name="contact" method="POST" data-netlify="true">

    <h2>Contact me</h2> 

<div className="name">

<input
     type="text"
     placeholder='First name'
     name="firstName"
     value={inputs.firstName ||''}
     onChange={handleChange}
     className="firstName"
     tabIndex="1"
/>

<input
     type="text"
     placeholder='Last name'
     name="lastName"
     value={inputs.lastName ||''}
     onChange={handleChange}
     className="lastName"
     tabIndex="2"
/>


<input
     type="email"
     name="email"
     id="email"
     value={inputs.email ||''}
     onChange={handleChange}
     className="email"
     placeholder="example@corp.com"
     tabIndex="3"
/>

<textarea
  placeholder="Start typing..."
  className="message"
  name="message"
  value={textarea}
  onChange={e => setTextarea(e.target.value)}
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
