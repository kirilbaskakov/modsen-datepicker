import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import globalStyles from './constants/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as ReactDOM.Container);

root.render(React.createElement(React.StrictMode, {}, React.createElement(App), React.createElement(globalStyles)));
