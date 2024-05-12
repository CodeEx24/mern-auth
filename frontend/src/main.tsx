import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { CONFIG } from './shared/config/config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <GoogleOAuthProvider clientId={CONFIG.GOOGLE_CLIENT_ID}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </GoogleOAuthProvider>
);
