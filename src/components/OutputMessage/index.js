import React from 'react';

function OutputMessage ( {output, showOutput} ) {

  if (showOutput) {
    return (
      <div>
        {output}
      </div>
    );  
  } else {
    return (
      <div>
      </div>
    );
  }
};

export default OutputMessage;
