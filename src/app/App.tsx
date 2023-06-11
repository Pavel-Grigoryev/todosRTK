import { PATH } from "common/constants/routes";
import React from "react";
import s from "./App.module.css";
import { NotFound } from "app/pages/404";
import Container from "@mui/material/Container";
import { Navigate, Route, Routes } from "react-router-dom";
import { Todos } from "features/todos";
import { Header } from "app/Header";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Container className={s.container}>
        <Routes>
          <Route path={PATH.TODOS} element={<Todos />} />
          <Route path={PATH.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={PATH.NOT_FOUND} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
