import React from 'react';
import Header from '../Header';
import { cards } from '../../cards';
import './style.css';
import { Link } from 'react-router-dom';

const PagesTemaSeznam = () => {
  return (
    <>
      <div className="obal">
        <div className="karta-responzivni-obal">
          <Header />

          <div className="obal-temata">
            <h2>Vyber téma:</h2>
            <div className="tlacitka">
              <div className="tlacitka-vyber-tema">
                {cards.map((card) => {
                  return (
                    <Link
                      key={card.topic}
                      to={`/PagesTemaVybrane/${card.id}`}
                      className="button2"
                    >
                      {card.topic}
                    </Link>
                  );
                })}
              </div>
              <Link to="/" className="button1">
                Zpět na hlavní stranu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesTemaSeznam;
