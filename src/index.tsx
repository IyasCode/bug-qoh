import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { createStore, combineReducers } from "redux";
// import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import authReducer from "./store/reducer/authReducer";
// import userReducer from "./store/reducer/userReducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
// });

// const store = createStore(rootReducer);

ReactDOM.render(
  // <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
  // </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
