import React, { useState } from 'react';
import Header from '../Header';
import ButtonsCard from '../ButtonsCard';
import { useParams } from 'react-router-dom';
import Card from '../Card';
import { cards as karty } from '../../cards';

const PagesOtazka = () => {
  let { id } = useParams();

  const temata = karty.filter((card) => card.id === id);
  /*   console.log(temata);
  console.log(id); */

  const tema = temata[0];
  console.log(tema);

  const cards = tema.cards;

  /*   console.log(cards); */

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
  };

  const handleDalsi = () => {
    setIndexKarty(indexKarty + 1);
  };

  const blokujZpet = indexKarty === 0 ? true : false;

  const blokujDalsi = indexKarty === cards.length - 1 ? true : false;

  return (
    <>
      <Header />
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
      />
    </>
  );
};

export default PagesOtazka;
