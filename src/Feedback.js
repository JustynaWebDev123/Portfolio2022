import React, {useState} from "react";
import { BsStar } from 'react-icons/bs';
import Collapsible from 'react-collapsible';

const colors={
  orange:"#53024d",
  grey: "#a9a9a9"
}

function Feedback() {
    const [count,setCount]=useState(0);
    const [ hoverCount,setHoverCount]=useState(undefined);
    const stars = Array(5).fill(0);
    
    const handleClick=value =>{
      setCount(value)
    };
    
    const handleMouseOver = newHoverValue => {
      setHoverCount(newHoverValue)
    };
    
    const handleMouseLeave = () => {
      setHoverCount(undefined)
    };

  return (
    <div className="feedback-container">
 <Collapsible trigger="Feedback">

 <div className="stars-form" >

 <div className="stars">
 {stars.map((_,index)=>{
   return(
 <BsStar
 key={index}
 size={30}
 onClick={()=>handleClick(index + 1)}
 onMouseOver={()=>handleMouseOver(index + 1)}
 onMouseLeave={handleMouseLeave}
 color={(hoverCount || count) > index ? colors.orange : colors.grey}
 style={{cursor:"pointer"}}
 />
 )})};
 </div>
 
 <form className="feedback-form"autoComplete="off" name="feedback-form" data-netlify="true" method="POST" id="form">
 <input type="hidden" name="form-name" value="feedback-form" />
 <textarea
     placeholder="Please share your thoughts..."
     className="message-feedback"
     name="feedback-message"
    
 />
 
 <button 
     className='form-btn'
     name="submit" 
     type="submit" 
     id="contact-submit">Submit</button>
 
 </form>
 
 </div>
 
 </Collapsible>
 </div>
  
   );
 };



export default Feedback;