import React, { ChangeEvent, FC, KeyboardEvent, memo, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import s from "./AddItemForm.module.css";

type AddItemFormPropsType = {
  addItem: (title: string) => void;
  label: string;
  sx?: StylesType;
};

export const AddItemForm: FC<AddItemFormPropsType> = memo(
  ({ addItem, sx, label }) => {
    let [title, setTitle] = useState("");
    let [error, setError] = useState<string | null>(null);
    const addTask = () => {
      if (title.trim() !== "") {
        addItem(title);
        setTitle("");
      } else {
        setError("Title is required");
      }
    };
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value);
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (error) {
        setError(null);
      }
      if (e.charCode === 13) {
        addTask();
      }
    };

    return (
      <div className={s.block}>
        <TextField
          id="standard-basic"
          value={title}
          size={"small"}
          label={label}
          variant="outlined"
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          sx={sx}
          color={"secondary"}
        />

        <IconButton onClick={addTask}>
          <AddIcon />
        </IconButton>
        {error && <div className={s.errorMessage}>{error}</div>}
      </div>
    );
  }
);

//Types

type StylesType = {
  width?: string;
  focused: {
    borderColor: string;
  };
};

export type AddItemFormSubmitHelperType = {
  setError: (errorr: string | null) => void;
  setTitle: (title: string) => void;
};
