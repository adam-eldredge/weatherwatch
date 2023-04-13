import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import image from "./photo/wallpaperflare.com_wallpaper.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{backgroundImage:`url(${image})`, margin:0}}> 
    <React.StrictMode>

      <Auth0Provider
        domain="dev-rbh55tcb1jt0r6eo.us.auth0.com"
        clientId="8rU9ck6gstmsdmR33cZ5k59YxOeqGMfd"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >

      <App />

    </Auth0Provider>

    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
