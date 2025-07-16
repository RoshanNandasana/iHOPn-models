import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import 'src/assets/styles/global.css';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App>
      <div id="root-content"></div>
    </App>
  </I18nextProvider>,
  document.getElementById('root')
);