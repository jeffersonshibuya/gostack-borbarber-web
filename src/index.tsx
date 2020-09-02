import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import App from './App';

Sentry.init({
  dsn:
    'https://0fe0c9215e46469aa17bcf3bb33750c4@o442611.ingest.sentry.io/5414864',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
