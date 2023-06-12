import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import App from "app/App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const container = document.getElementById("root")!;
const root = createRoot(container);

const theme = createTheme({
  palette: {
    primary: {
      main: "#eeeeee",
    },
    secondary: {
      main: "#888B8D",
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ThemeProvider>
);
