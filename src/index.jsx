import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import ButtonsCard from './components/ButtonsCard';
import './style.css';
import Mainpage from './components/Main-page';
import Card from './components/Card';

const App = () => (
  <div className="container">
    <Card />
    <Header />
<<<<<<< HEAD
    <Mainpage />
    <main></main>
=======
    <ButtonsCard />
>>>>>>> 193b54b4864c128a7b4580821d3baa186d961a4f
    <footer></footer>
  </div>
);

render(<App />, document.querySelector('#app'));
