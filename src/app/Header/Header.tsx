import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import s from "./Header.module.css";
export const Header = () => {
  return (
    <AppBar className={s.appbar}>
      <Toolbar className={s.toolbar}>todos</Toolbar>
    </AppBar>
  );
};
