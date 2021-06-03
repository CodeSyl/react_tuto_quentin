import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Text, ITextProps} from '@fluentui/react/lib/Text';
import { DefaultButton, TextField } from '@fluentui/react';

function App() {
  const[newElement, setNewElement] = useState<string>();

  const clickFunction = (event: any) => {
    console.log(event);
    alert(newElement);
  }

  const onChange = (event: any) => {
    console.log(event);
    setNewElement(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Text variant="large">ToDo List</Text>
        <br />
        <TextField 
        name="newElement" 
                   label="Task Name" 
                   placeholder="Add a new task to do" onChange={onChange}/>
        <DefaultButton text="Add new element" onClick={clickFunction} />
      </header>
    </div>
  );
}

export default App;
