import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from './components/redux/reducers/store'

//context providers
import AuthProvider from "./contexts/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider> 
       </AuthProvider>
  </Router>
);
