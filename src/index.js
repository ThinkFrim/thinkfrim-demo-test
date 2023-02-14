import React from 'react';
import ReactDOM from 'react-dom/client';
// import '.././src/styles/global.module.css'
import '../src/styles/global.css'
// import '../src/styles/debuggin.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

