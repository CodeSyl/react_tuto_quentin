import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }: any) => {
  const [newElement, setNewElement] = useState<string>("");
  const [newList, setNewList] = useState<string[]>([]);
  const [hiddenDialog, setHiddenDialog] = useState<boolean>(true);
  const [selectedElementToDelete, setSelectedElementToDelete] =
    useState<number>();

  useEffect(() => {
    console.log("init");
    setNewList(["test", "test1", "test2", "test3", "test4"]);
  }, []);

  useEffect(() => {
    console.log(newElement);
  }, [newElement]);

  const onClick = (event: any) => {
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
    cancelDeletion();
  };

  const confirmDeletion = (index: number) => {
    setHiddenDialog(false);
    setSelectedElementToDelete(index);
  };

  const cancelDeletion = () => {
    setHiddenDialog(true);
    setSelectedElementToDelete(undefined);
  };

  return (
    <GlobalContext.Provider
      value={{
        newElement,
        newList,
        onChange,
        onClick,
        deleteElement,
        hiddenDialog,
        confirmDeletion,
        selectedElementToDelete,
        cancelDeletion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
