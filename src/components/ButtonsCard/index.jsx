import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { cards } from '../../cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faListAlt,
} from '@fortawesome/free-solid-svg-icons';

const ButtonsCard = ({
  handleOtoceni,
  handleKartaZpet,
  handleKartaDalsi,
  zablokovaneDalsi,
  zablokovaneZpet,
  otazka,
}) => {
  return (
    <>
      <div className="tlacitka">
        <div className="tlacitko-strana">
          <button onClick={handleOtoceni} className="button1">
            {otazka === 'question' ? 'Ukaž odpověď' : 'zpět na otázku'}
          </button>
        </div>
      </div>
      <div className="tlacitka-navigace">
        <button
          onClick={handleKartaZpet}
          className="button-sipka-vlevo"
          disabled={zablokovaneZpet}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Předchozí karta
        </button>
        <button
          onClick={handleKartaDalsi}
          className="button-sipka-vpravo"
          disabled={zablokovaneDalsi}
        >
          Další karta <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
      <div className="tlacitko-zpet">
        <Link to="/PagesTemaSeznam" className="button1 button1-zpet">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Zpět k tématům
        </Link>
      </div>
    </>
  );
};

export default ButtonsCard;
