import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app';
import 'bootstrap/dist/css/bootstrap.css';

const jsxElement = <h1>Flashcard App</h1>;
console.log(jsxElement);

ReactDOM.render(<App />, document.getElementById('root'));