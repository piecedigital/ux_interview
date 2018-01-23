import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LocalSearch from './LocalSearch';

window["LocalSearch"] = new LocalSearch();

ReactDOM.render(<App />, document.getElementById('root'));
