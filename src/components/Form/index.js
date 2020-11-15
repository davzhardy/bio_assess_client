import React from "react";
import './index.style.scss';


function Form ( { instructions, setInstructions, setShowOutput } ) {

  function handleChange (e) {
    e.preventDefault();
    setInstructions(e.target.value);
    setShowOutput(false);
  }

  return (
    <div>
      <input 
        type="text" 
        className="form_input" 
        name="instructions" 
        value={instructions} 
        onChange={handleChange} 
        placeholder="Type your instructions..."/>
    </div>
  );
}

export default Form;