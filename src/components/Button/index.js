import React from "react";
import './index.style.scss';


function Button ( { handleSubmit } ) {

  function handleclick () {
    handleSubmit();
  }

  return (
    <div className="button-container">
      <button type="submit" className="form_submit" onClick={handleclick}>Submit</button>
    </div>
  );
}

export default Button;