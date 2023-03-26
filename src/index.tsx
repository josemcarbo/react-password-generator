import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./common/redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./common/themes/theme";
import '@fontsource/poppins';

const container = document.getElementById("root") ?? document.body;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
