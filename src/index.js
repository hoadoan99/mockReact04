/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ReposProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
import storeData from "./Reducers/store";
import { Provider } from "react-redux";
import { Data } from "./Reducers/reducer";
// 9wPb8PvBlz8nRC3NeeYGYV79kKBkSIJa
// dev-9q9ohwzs.us.auth0.com
storeData.dispatch(Data);
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-9q9ohwzs.us.auth0.com"
      clientId="9wPb8PvBlz8nRC3NeeYGYV79kKBkSIJa"
      redirectUri={window.location.origin}>
      <Provider storeData>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
