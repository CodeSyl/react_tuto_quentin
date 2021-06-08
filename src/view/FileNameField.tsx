import React, { useMemo } from "react";
import { TextField } from "@fluentui/react";
import { Controller, useFormContext } from "react-hook-form";

const FileNameField = () => {
  const { control, errors } = useFormContext();

  const displayErrorMessage = useMemo(() => {
    return errors.newFileName && "Field is required";
  }, [errors]);

  return (
    <div className="container">
      <Controller
        name="newFileName"
        control={control}
        rules={{
          required: true,
        }}
        render={(props) => {
          return (
            <TextField
              value={props.value}
              className="New-element-input"
              name="newFileName"
              placeholder="File name"
              onChange={props.onChange}
              required={true}
              errorMessage={displayErrorMessage}
            />
          );
        }}
      />
    </div>
  );
};

export default FileNameField;
