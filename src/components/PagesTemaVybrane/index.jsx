import React from 'react';
import Header from '../Header';
import './style.css';
import { Link, useParams } from 'react-router-dom';
import { cards } from '../../cards';

const PagesTemaVybrane = () => {
  let { id } = useParams();
  console.log(id);

  const temata = cards.filter((card) => card.id === id);
  console.log(temata[0].topic);

  return (
    <>
      <Header />
      <div className="obal-temata">
        <div className="nadpis-stranky">
          <h2>{temata[0].topic}</h2>
        </div>
        <div className="tlacitka">
          <div className="tlacitka-tema">
            <button className="button1">Začít procvičovat</button>
            <button className="button1">Jak na to?</button>
            <button className="button1">Smazat téma</button>
            <Link to="/PagesTemaSeznam">
              <button className="button1">Zpět na seznam témat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesTemaVybrane;
