import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss";
import App from './components/app';
import 'file-loader?name=[name].[ext]!./index.html';

import {
  siteName
} from './resources/configs';

ReactDOM.render(
  <div>
    <App title = {siteName}/>
  </div>
  , document.querySelector('#hook')
);
