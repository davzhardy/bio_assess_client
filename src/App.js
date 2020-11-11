import './App.css';
import React, { useState, useEffect } from 'react';
import ApiService from './ApiService'

function App() {

  // const [output, setOutput] = useState([]);

  // function createInstructions (string) {
  //   ApiService.getMazeOutput({
  //     instructions: string
  //   })
  //   .then(result => setOutput(result))
  // }

  // useEffect(() => {
  //   createInstructions('n,w')
  // },[]);

  return (
    <div>
      Test
      {/* {output} */}
    </div>
  );
}

export default App;
