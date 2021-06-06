import React from 'react';
import Header from '../Header';
import './style.css';
import { Link } from 'react-router-dom';

const PagesTemaSeznam = () => {
  return (
    <>
      <Header />
      <div className="obal-temata">
        <div className="tlacitka">
          <div className="tlacitka-vyber-tema">
            <button className="button2">Téma 1</button>
            <button className="button2">Téma 2</button>
            <button className="button2">Téma 1</button>
            <button className="button2">Téma 1</button>
            <Link to="/">
              <button className="button1">Zpět na hlavní stranu</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesTemaSeznam;
