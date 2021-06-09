import React, { useState } from 'react';
import Header from '../Header';
import './style.css';
import { Link, useParams } from 'react-router-dom';
import { cards } from '../../cards';
import PagesNavod from '../PagesNavod';

const PagesTemaVybrane = () => {
  let { id } = useParams();

  const temata = cards.filter((card) => card.id === id);
  console.log(temata[0].topic);

  const [ukazModal, setUkazModal] = useState(false);

  const otevrit = () => {
    setUkazModal(true);
  };

  const zavrit = () => {
    setUkazModal(false);
  };

  return (
    <>
      <div className="obal">
        <div className="karta-responzivni-obal">
          <Header />
          <div className="nadpis-stranky">
            <h2>{temata[0].topic}</h2>
          </div>
          <div className="tlacitka">
            <div className="tlacitka-tema">
              <Link to={`/PagesOtazka/${id}`} className="button1">
                Začít procvičovat
              </Link>
              <button onClick={otevrit} className="button1">
                Jak na to?
              </button>
              <button className="button1">Smazat téma</button>
              <Link to="/PagesTemaSeznam" className="button1">
                Zpět na seznam témat
              </Link>
            </div>
          </div>
        </div>
        {ukazModal ? <PagesNavod zavrit={zavrit} /> : null}
      </div>
    </>
  );
};

export default PagesTemaVybrane;
