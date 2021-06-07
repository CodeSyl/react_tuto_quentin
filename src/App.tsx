import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Text, ITextProps } from "@fluentui/react/lib/Text";
import { DefaultButton, IconButton, TextField } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import ToDoTasks from "./ToDoTasks";
initializeIcons();

function App() {
  const [newElement, setNewElement] = useState<string>("");
  const [newList, setNewList] = useState<string[]>([]);

  useEffect(() => {
    console.log("init");
    setNewList(["test", "test1", "test2", "test3", "test4"]);
  }, []);

  useEffect(() => {
    console.log(newElement);
  }, [newElement]);

  const clickFunction = (event: any) => {
    const updatedList = [...newList, newElement];

    setNewList(updatedList);
    setNewElement("");
  };

  const onChange = (event: any) => {
    setNewElement(event.target.value);
  };

  const deleteElement = (index: number) => {
    //contentList.splice(index, 1);

    setNewList((prevState) => {
      const filter: string[] = prevState.filter(
        (element, filterIndex) => index !== filterIndex
      );
      console.log(filter);
      return filter;

      // let contentList: string[] = [...prevState];
      // contentList.splice(index, 1);
      // return contentList;
    });
  };

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
            onClick={clickFunction}
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
