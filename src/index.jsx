import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import ButtonsCard from './components/ButtonsCard';
import './style.css';

const App = () => (
  <div className="container">
    <Header />
    <ButtonsCard />
    <footer></footer>
  </div>
);
render(<App />, document.querySelector('#app'));
