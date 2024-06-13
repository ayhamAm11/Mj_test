import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from './redux/store.js'
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./component/Providers/AuthProviders";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <AuthProvider>
      <App />
      </AuthProvider>
      </Provider>
      <ToastContainer/>
    </Router>
  </React.StrictMode>
);
