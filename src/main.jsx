import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store.js";

import HttpApi from 'i18next-http-backend';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'ru'],
        fallbackLng: "en",
        detection: {
            order: [ 'htmlTag', 'localStorage', 'path', 'subdomain'],
        },
        backend:{
            loadPath: '/assets/locales/{{lng}}/translation.json'
        },
        react: { useSuspense: false }
    });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <React.StrictMode>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </React.StrictMode>
  </Provider>
)
