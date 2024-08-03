import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from './services/store';

import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  );
}