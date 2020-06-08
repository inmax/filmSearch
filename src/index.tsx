import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./data/store";
import { Provider } from "react-redux";
import 'normalize.css';
import './theme/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("output")
);