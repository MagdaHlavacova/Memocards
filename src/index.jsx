import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import './style.css';

const App = () => (
  <div className="container">
    <Header />
    <main></main>
    <footer></footer>
  </div>
);
render(<App />, document.querySelector('#app'));
