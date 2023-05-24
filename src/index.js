import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import { JobContextProvider } from './context/jobs.context';
import { BrowserRouter } from 'react-router-dom';
import { LoginContextProvider } from './context/login.context';
import { UserContextProvider } from './context/user.context';
import { ErrorContextProvider } from './context/error.context';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorContextProvider>
        <JobContextProvider>
          <LoginContextProvider>
            <UserContextProvider>
              <App />
            </UserContextProvider>
          </LoginContextProvider>
        </JobContextProvider>
      </ErrorContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

serviceWorkerRegistration.register();
