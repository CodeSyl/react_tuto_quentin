import { DefaultButton, TextField } from "@fluentui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../infrastructure/GlobalContext";
import ToDoTasks from "./ToDoTasks";

const ToDo = () => {
  const { newElement, newList, onChange, onClick, deleteElement }: any =
    useContext(GlobalContext);

  return (
    <section className="App-header">
      <div
        style={{
          border: "solid 1px black",
          padding: "1em",
          borderRadius: "15px",
        }}
      >
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
          {newList.map((elementValue: string, index: number) => {
            return (
              <ToDoTasks
                key={index}
                index={index}
                elementValue={elementValue}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToDo;
