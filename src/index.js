import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { datadogRum } from '@datadog/browser-rum';


// datadogRum.init({
//   applicationId: 'b9cd6fec-322b-448b-9985-a147f856383c',
//   clientToken: 'pub4bbbf22a70bea2d20dc2776e4877c30d',

//   site: 'us5.datadoghq.com',
//   service: 'motion-blogs',
//   env: 'prod',

//   sessionSampleRate: 100,
//   sessionReplaySampleRate: 20,
//   trackUserInteractions: true,
//   trackResources: true,
//   trackLongTasks: true,
//   defaultPrivacyLevel: 'mask-user-input',
// });
//datadogRum.startSessionReplayRecording();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
