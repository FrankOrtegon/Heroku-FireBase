import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from "./store/Store";
import {Provider} from "react-redux";
import "./utils/style.css";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
