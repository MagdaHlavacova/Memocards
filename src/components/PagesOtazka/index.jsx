import React, { useState } from 'react';
import Header from '../Header';
import ButtonsCard from '../ButtonsCard';
import { useParams } from 'react-router-dom';
import Card from '../Card';
import { cards as karty } from '../../cards';
import './style.css';

const PagesOtazka = () => {
  let { id } = useParams();

  const temata = karty.filter((card) => card.id === id);

  const tema = temata[0];

  const cards = tema.cards;

  const [strana, setStrana] = useState('question');
  const [indexKarty, setIndexKarty] = useState(0);

  const handleClick = () => {
    if (strana === 'question') {
      setStrana('answer');
    } else {
      setStrana('question');
    }
  };

  const handleZpet = () => {
    setIndexKarty(indexKarty - 1);
    setStrana('question');
  };

  const handleDalsi = () => {
    setIndexKarty(indexKarty + 1);
    setStrana('question');
  };

  const blokujZpet = indexKarty === 0 ? true : false;

  const blokujDalsi = indexKarty === cards.length - 1 ? true : false;

  return (
    <div className="obal">
      <div
        className="karta-responzivni-obal"
        style={{ backgroundColor: temata[0].backgroundColor }}
      >
        <Header />
        <div className="responzivni-obal-poradiKarty">
          <div className="obal-poradiKarty">
            <div className="poradiKarty">
              {indexKarty + 1}/{cards.length}
            </div>
          </div>
        </div>
        <Card
          type={cards[indexKarty][strana].type}
          content={cards[indexKarty][strana].content}
        />
        <ButtonsCard
          handleKartaZpet={handleZpet}
          handleKartaDalsi={handleDalsi}
          handleOtoceni={handleClick}
          zablokovaneZpet={blokujZpet}
          zablokovaneDalsi={blokujDalsi}
          otazka={strana}
        />
      </div>
    </div>
  );
};

export default PagesOtazka;
