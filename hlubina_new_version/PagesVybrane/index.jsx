import React from 'react';
import Header from '../../src/components/Header';
import './style.css';

const PagesVybrane = () => {
  return (
    <>
      <Header />
      <div className="obal-temata">
        <div className="tlacitka">
          <div className="tlacitka-vyber-tema">
            {cards.map((card) => {
              return (
                <button className="button2" key={card.topic}>
                  {card.topic}
                </button>
              );
            })}

            <button className="button1">Zpět na hlavní stranu</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesVybrane;
