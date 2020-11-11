import React from "react";
import './index.style.scss';
import OutputMessage from '../../components/OutputMessage'
import Button from '../../components/Button'
import Form from '../../components/Form'
import Header from '../../components/Header'


function MainScreen () {



  return (
    <div className="main-container">
      <Header/>
      <div>
        <h2>Instructions</h2>
        <p>Simply type in movements below and hit submit.</p>
        <p>Accepted Movements</p>
        <ul>
          <li>n for north or up</li>
          <li>s for south or down</li>
          <li>e for east or right</li>
          <li>w for west or left</li>
        </ul>
      </div>
      <Form/>
      <Button/>
      <OutputMessage/>
    </div>
  );
};

export default MainScreen;