import React, { useContext } from "react";
import { Dialog, DialogType, DialogFooter } from "@fluentui/react/lib/Dialog";
import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button";
import { hiddenContentStyle, mergeStyles } from "@fluentui/react/lib/Styling";
import { Toggle } from "@fluentui/react/lib/Toggle";
import { ContextualMenu } from "@fluentui/react/lib/ContextualMenu";
import { useId, useBoolean } from "@fluentui/react-hooks";
import { GlobalContext } from "./infrastructure/GlobalContext";

const dialogStyles = { main: { maxWidth: 450 } };

const dialogContentProps = {
  type: DialogType.normal,
  title: "Remove Element",
  closeButtonAriaLabel: "Close",
  subText: "Do you really want to remove this element?",
};

const ConfirmDeletion = () => {
  const {
    hiddenDialog,
    selectedElementToDelete,
    deleteElement,
    cancelDeletion,
  }: any = useContext(GlobalContext);

  return (
    <Dialog
      hidden={hiddenDialog}
      onDismiss={() => null}
      dialogContentProps={dialogContentProps}
      modalProps={{
        styles: dialogStyles,
      }}
    >
      <DialogFooter>
        <DefaultButton onClick={cancelDeletion} text="Cancel" />
        <PrimaryButton
          onClick={() => deleteElement(selectedElementToDelete)}
          text="Delete"
        />
      </DialogFooter>
    </Dialog>
  );
};

export default ConfirmDeletion;
