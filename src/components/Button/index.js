import React from "react";
import './index.style.scss';


function Button ( { handleSubmit } ) {

  return (
    <div>
      <button type="submit" className="form_submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Button;