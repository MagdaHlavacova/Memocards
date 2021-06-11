import React, { useState } from 'react';
import Header from '../Header';
import './style.css';
import { Link, useParams } from 'react-router-dom';
import { cards } from '../../cards';
import PagesNavod from '../PagesNavod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

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
        <div
          className="karta-responzivni-obal"
          style={{ backgroundColor: temata[0].backgroundColor }}
        >
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
              <div className="zpet">
                <Link to="/PagesTemaSeznam" className="button1 button1-zpet">
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  {'    '}Zpět na seznam témat
                </Link>
              </div>
            </div>
          </div>
        </div>
        {ukazModal ? <PagesNavod zavrit={zavrit} /> : null}
      </div>
    </>
  );
};

export default PagesTemaVybrane;
