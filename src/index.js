import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from './styles/resetStyle.js';
import GlobalStyle from "./styles/globalStyled.js";
import AuthProvider from './Context/AuthProvider.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>
);