import React from "react";
import './index.style.scss';


function Form ( { instructions, setInstructions } ) {

  function handleChange (e) {
    if (e.target.name === 'instructions') setInstructions(e.target.value);
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
};

export default Form;