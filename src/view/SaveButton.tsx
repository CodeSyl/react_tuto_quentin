import { DefaultButton } from "@fluentui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../infrastructure/GlobalContext";

const SaveButton = () => {
  const { onSave }: any = useContext(GlobalContext);

  return (
    <DefaultButton
      className="test"
      text="Save tasks to file"
      onClick={onSave}
    />
  );
};

export default SaveButton;
