// REACT
import React from "react";
import ReactDOM from "react-dom/client";
// R-R-D-6
import { BrowserRouter } from "react-router-dom";
// JS
import App from "./components/App.tsx";
// STYLES
import "./style/reset.css";
import "./style/index.css";
// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";
import { storeReducer } from "./components/storeReducer.tsx";
// MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
//
// CODE
export const store = configureStore(
  {
    reducer: { storeReducer },
  },
  composeWithDevTools(applyMiddleware(thunk))
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#61dafb",
    },
    secondary: {
      main: "#da61bf",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
