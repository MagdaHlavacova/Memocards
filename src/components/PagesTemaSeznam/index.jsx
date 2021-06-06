import React from 'react';
import Header from '../Header';
import { cards } from '../../cards';
import './style.css';
import { Link } from 'react-router-dom';

const PagesTemaSeznam = () => {
  return (
    <>
      <Header />
      <div className="obal-temata">
        <div className="tlacitka">
          <div className="tlacitka-vyber-tema">
            {cards.map((card) => {
              return (
                <Link key={card.topic} to={`/PagesTemaVybrane/${card.id}`}>
                  <button className="button2">{card.topic}</button>
                </Link>
              );
            })}

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
