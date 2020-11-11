import React, { useState, useEffect } from "react";
import './index.style.scss';
import OutputMessage from '../../components/OutputMessage'
import Button from '../../components/Button'
import Form from '../../components/Form'
import Header from '../../components/Header'
import ApiService from '../../ApiService';

function MainScreen () {

  const [output, setOutput] = useState([]);
  const [instructions, setInstructions] = useState('n, e');

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
    <div className="main-container">
      <Header/>
      <div>
        <h2>Instructions</h2>
        <p>Simply type in movements below and hit the submit button.</p>
        <p>Accepted Movements</p>
        <ul>
          <li>n for north or up</li>
          <li>s for south or down</li>
          <li>e for east or right</li>
          <li>w for west or left</li>
        </ul>
      </div>
      <Form
        instructions={instructions}
        setInstructions={setInstructions}
      />
      <Button
        output={output}
      />
      <OutputMessage/>
    </div>
  );
};

export default MainScreen;