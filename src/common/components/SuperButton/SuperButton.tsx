import { FC, memo } from "react";
import Button from "@mui/material/Button";

export type SuperButtonType = {
  variant: "text" | "outlined" | "contained";
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onclick: () => void;
  title: string;
  sx?: any;
};

export const SuperButton: FC<SuperButtonType> = memo(
  ({ variant, color, onclick, title, sx }) => {
    return (
      <Button
        onClick={onclick}
        variant={variant}
        color={color}
        size={"small"}
        sx={sx}
        disableElevation
      >
        {title}
      </Button>
    );
  }
);
