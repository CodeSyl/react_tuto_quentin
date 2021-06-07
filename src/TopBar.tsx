import React, { useContext } from "react";
import { GlobalContext } from "./infrastructure/GlobalContext";

const TopBar = () => {
  const { newList }: any = useContext(GlobalContext);
  return (
    <div>
      <h1>Test</h1>
      <h2>
        <span>Number of elements: {newList.length}</span>
      </h2>
    </div>
  );
};

export default TopBar;
