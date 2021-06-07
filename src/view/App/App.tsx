import React, { useContext } from "react";
import "./App.css";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import ConfirmDeletion from "../ConfirmDeletion";
import ToDo from "../ToDo";
import { useForm, FormProvider, Controller } from "react-hook-form";
import {
  GlobalContext,
  GlobalProvider,
} from "../../infrastructure/GlobalContext";
import { DefaultButton, TextField } from "@fluentui/react";
import TopBar from "../TopBar";
import Footer from "../Footer";
import SaveButton from "../SaveButton";
initializeIcons();

function App() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <GlobalProvider>
        <TopBar />
        <div className="App">
          <header className="App-header">
            <div className="Title">
              <h1>ToDo List</h1>
            </div>
            {/* <Text variant="large">ToDo List</Text> */}
          </header>
          <div className="container">
            <Controller
              name="newFileName"
              control={methods.control}
              render={(props) => {
                return (
                  <TextField
                    value={props.value}
                    className="New-element-input"
                    name="newFileName"
                    placeholder="File name"
                    onChange={props.onChange}
                  />
                );
              }}
            />
          </div>
          <br />
          <ToDo />
          <br />
          <SaveButton />
          <ConfirmDeletion />
        </div>
        <Footer />
      </GlobalProvider>
    </FormProvider>
  );
}

export default App;
