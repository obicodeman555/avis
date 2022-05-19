import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/sass/reset.scss";
import "./styles/sass/base.scss";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/modal_context";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
