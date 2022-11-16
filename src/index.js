import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { JobContextProvider } from './context/jobs.context';
import { BrowserRouter } from 'react-router-dom';
import { LoginContextProvider } from './context/login.context';
import { UserContextProvider } from './context/user.context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <BrowserRouter>
      <JobContextProvider>
        <LoginContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </LoginContextProvider>
      </JobContextProvider>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
