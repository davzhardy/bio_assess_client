import React, { useState } from "react";
import './index.style.scss';
import OutputMessage from '../../components/OutputMessage';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Header from '../../components/Header';
import History from '../History';
import ApiService from '../../ApiService';

function MainScreen () {

  const [output, setOutput] = useState('');
  const [instructions, setInstructions] = useState('');
  const [userHistory, setUserHistory] = useState([]);
  const [showOutput, setShowOutput] = useState(false);

  function createInstructions (string) {
    ApiService.getMazeOutput(string)
      .then(result => setOutput(result));
  }

  function handleSubmit (e) {
    e.preventDefault();
    setShowOutput(true);
    const badinputs = instructions.replace(/[, nwes]+/ig, "");
    if (badinputs.length) {
      setOutput('Please only submit the following characters "n", "w", "e", "s"');
    } else if (instructions.length) {
      const formattedInstructions = instructions.split('').join(' ');
      const serverInput = formattedInstructions.replace(/[, ]+/g, ",").trim();
      createInstructions(serverInput);
      setUserHistory([...userHistory, serverInput]);
      setInstructions('');
    }
    else setOutput('Please enter instructions before submitting');
  }

  function handleKeydown (e) {
    if(e.key === 'Enter' && e.shiftKey === false) {
      handleSubmit(e)
    }
  }

  return (
    <div className="main-container">
      <Header/>
      <div className="instructions-container">
        <h2>Instructions</h2>
        <p>Simply type in movements below and hit the submit button.</p>
        <p>Accepted Movements:</p>
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
        setShowOutput={setShowOutput}
        handleKeydown={handleKeydown}
      />
      <History
        userHistory={userHistory}
      />
      <Button
        handleSubmit={handleSubmit}
      />
      <OutputMessage
        output={output}
        showOutput={showOutput}
      />
    </div>
  );
}

export default MainScreen;