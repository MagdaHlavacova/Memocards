import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Card from './components/Card';

const App = () => (
  <div className="container">
    <Card />
    <main></main>
    <footer></footer>
  </div>
);

render(<App />, document.querySelector('#app'));
