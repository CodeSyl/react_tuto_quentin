import { DefaultButton } from "@fluentui/react";
import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { GlobalContext } from "../infrastructure/GlobalContext";

const SaveButton = () => {
  const { handleSubmit } = useFormContext();
  const { onSave, onError }: any = useContext(GlobalContext);

  return (
    <DefaultButton
      className="test"
      text="Save tasks to file"
      onClick={handleSubmit(onSave, onError)}
    />
  );
};

export default SaveButton;
