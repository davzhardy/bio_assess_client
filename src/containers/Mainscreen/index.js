import React from "react";
import './index.style.scss';
import OutputMessage from '../../components/OutputMessage'
import Button from '../../components/Button'
import Form from '../../components/Form'
import Header from '../../components/Header'


function MainScreen () {

  return (
    <div>
      <Header/>
      <Form/>
      <Button/>
      <OutputMessage/>
    </div>
  );
};

export default MainScreen;