import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board'
import App from './App';
import UserMap from './Map/UserMap'
import MapType from './MapType/MapType'

//import './index.css'
//import './App.css'//
import * as serviceWorker from './serviceWorker';





ReactDOM.render(<App/>, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
