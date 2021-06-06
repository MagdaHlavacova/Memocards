import React, { useState } from 'react';
import Header from '../Header';
import ButtonsCard from '../ButtonsCard';
import Card from '../Card';
/* import { cards } from '../../cards';
 */

const cards = [
  {
    id: 1,
    question: {
      type: 'text',
      content: 'Hlavní město Francie?',
    },
    answer: {
      type: 'text',
      content: 'Paříž',
    },
  },

  {
    id: 2,
    question: {
      type: 'text',
      content: 'Hlavní město Jihoafrické republiky',
    },
    answer: {
      type: 'text',
      content: 'Pretoria',
    },
  },
];

const PagesOtazka = () => {
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
    /*     indexKarty === 0 ? button disabled=true
     */
  };

  const handleDalsi = () => {
    setIndexKarty(indexKarty + 1);
    /*      indexKarty>cards.lenght ?
     */
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
