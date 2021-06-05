import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import './style.css';
import Mainpage from './components/Main-page';
import Card from './components/Card';

const App = () => (
  <div className="container">
    <Card />
    <Header />
    <Mainpage />
    <main></main>
    <footer></footer>
  </div>
);

render(<App />, document.querySelector('#app'));
