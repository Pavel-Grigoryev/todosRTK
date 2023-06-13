import React, { ChangeEvent, FC, memo, useState } from "react";
import TextField from "@mui/material/TextField";

type EditableSpanPropsType = {
  value: string;
  onChange: (newValue: string) => void;
  spanStyle?: StylesType;
  styleSX?: StylesType;
};

export const EditableSpan: FC<EditableSpanPropsType> = memo(
  ({ value, onChange, spanStyle, styleSX }) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(value);

    const activateEditMode = () => {
      setEditMode(true);
      setTitle(value);
    };
    const activateViewMode = () => {
      setEditMode(false);
      onChange(title);
    };
    const onChangeSetLocalTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value);
    };

    return editMode ? (
      <TextField
        id="standard-basic"
        label="Text"
        variant="standard"
        value={title}
        autoFocus
        onBlur={activateViewMode}
        onChange={onChangeSetLocalTitle}
        sx={styleSX}
      />
    ) : (
      <span onDoubleClick={activateEditMode} style={spanStyle}>
        {value}
      </span>
    );
  }
);

//Types

type StylesType = {
  flexGrow?: string;
};
