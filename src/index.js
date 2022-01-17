import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root.js';
import { worker } from 'mock/browsers';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
