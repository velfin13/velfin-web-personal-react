import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next';

import global_es from './language/es/global.json';
import global_en from './language/en/global.json';

i18n.init({
  resources: {
    lng: "en",
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  },
  interpolation: {
    escapeValue: false,
  },

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
)
