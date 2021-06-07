import React, { useContext, useEffect } from "react";
import { IconButton } from "@fluentui/react";
import { Text, ITextProps } from "@fluentui/react/lib/Text";
import { GlobalContext } from "../infrastructure/GlobalContext";

export interface IToDoTasks {
  index: number;
  elementValue: string;
}

const ToDoTasks = ({ index, elementValue }: IToDoTasks): JSX.Element => {
  const { confirmDeletion }: any = useContext(GlobalContext);

  useEffect(() => {
    console.log(elementValue);
  }, []);

  return (
    <div>
      <Text variant="medium">{elementValue}</Text>
      <IconButton
        iconProps={{ iconName: "Cancel" }}
        title="Cancel"
        ariaLabel="Cancel"
        onClick={() => confirmDeletion(index)}
      />
    </div>
  );
};
export default ToDoTasks;
