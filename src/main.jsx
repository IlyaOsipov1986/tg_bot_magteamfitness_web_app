import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import "/firebase.js";
import "./assets/style/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
