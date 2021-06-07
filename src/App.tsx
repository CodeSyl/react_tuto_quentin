import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Text, ITextProps } from "@fluentui/react/lib/Text";
import { DefaultButton, IconButton, TextField } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import ToDoTasks from "./ToDoTasks";
import { GlobalContext } from "./infrastructure/GlobalContext";
initializeIcons();

function App() {
  const { newElement, newList, onChange, onClick, deleteElement }: any =
    useContext(GlobalContext);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">
          <h1>ToDo List</h1>
        </div>
        {/* <Text variant="large">ToDo List</Text> */}
      </header>
      <section className="App-header">
        <br />
        <div className="container">
          <TextField
            value={newElement}
            className="New-element-input"
            name="newElement"
            placeholder="Add a new task"
            onChange={onChange}
          />
          <DefaultButton
            className="Add-new-element"
            text="Add"
            onClick={onClick}
          />
        </div>
        <br />
        <div className="To-Do-Elements" id="toDoContent">
          <div>
            {newList.map((elementValue: string, index: number) => {
              return (
                <ToDoTasks
                  key={index}
                  index={index}
                  elementValue={elementValue}
                  deleteElement={deleteElement}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
