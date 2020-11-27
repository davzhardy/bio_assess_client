import React from "react";
import './index.style.scss';


function Button ( { handleSubmit } ) {

  return (
    <div className="button-container">
      <button type="submit" className="form_submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Button;