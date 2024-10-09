import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./components/App";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./provider/theme-provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        {
          <Provider store={store}>
            <App />
          </Provider>
        }
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
