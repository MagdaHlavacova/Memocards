import React from 'react';
import Header from '../Header';
import ButtonsCard from '../ButtonsCard';
import Card from '../Card';

const PagesOtazka = () => {
  return (
    <>
      <Header />
      <Card type="audio" content="assets/Humoreska.ogg" />
      <ButtonsCard />
    </>
  );
};

export default PagesOtazka;
