import React, { useState, useEffect } from 'react';
import ApiService from '../../ApiService';

function OutputMessage () {

  const [output, setOutput] = useState([]);

  function createInstructions (string) {
    ApiService.getMazeOutput({
      instructions: string
    })
    .then(result => setOutput(result))
  }

  useEffect(() => {
    createInstructions('n,w')
  },[]);

  return (
    <div>
      {output}
    </div>
  );
};

export default OutputMessage;
