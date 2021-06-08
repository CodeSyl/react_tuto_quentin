import React, { useContext } from "react";
import "./App.css";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import ConfirmDeletion from "../ConfirmDeletion";
import ToDo from "../ToDo";
import { useForm, FormProvider } from "react-hook-form";
import { GlobalProvider } from "../../infrastructure/GlobalContext";
import TopBar from "../TopBar";
import Footer from "../Footer";
import SaveButton from "../SaveButton";
import FileNameField from "../FileNameField";
initializeIcons();

const App = () => {
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
          <FileNameField />
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
};

export default App;
