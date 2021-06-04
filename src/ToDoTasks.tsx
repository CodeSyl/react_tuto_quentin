import React, { useEffect } from "react";
import { IconButton } from "@fluentui/react";
import { Text, ITextProps } from "@fluentui/react/lib/Text";

export interface IToDoTasks {
  index: number;
  elementValue: string;
  deleteElement(index: number): void;
}

const ToDoTasks = ({
  index,
  elementValue,
  deleteElement,
}: IToDoTasks): JSX.Element => {
  useEffect(() => {
    console.log(elementValue);
  }, []);
  return (
    <div key={index}>
      <Text variant="medium">{elementValue}</Text>
      <IconButton
        iconProps={{ iconName: "Cancel" }}
        title="Cancel"
        ariaLabel="Cancel"
        onClick={() => deleteElement(index)}
      />
    </div>
  );
};
export default ToDoTasks;
