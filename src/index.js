import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
