import React from 'react';
import Header from '../Header';
import './style.css';

const PagesVybrane = () => {
  return (
    <>
      <Header />
      <div class="obal-temata">
        <div class="tlacitka">
          <div class="tlacitka-vyber-tema">
            <button class="button2">Téma 1</button>
            <button class="button2">Téma 2</button>
            <button class="button2">Téma 1</button>
            <button class="button2">Téma 1</button>

            <button class="button1">Zpět na hlavní stranu</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesVybrane;
