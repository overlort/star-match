import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
