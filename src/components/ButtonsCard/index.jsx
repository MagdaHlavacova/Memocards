import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { cards } from '../../cards';

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
          Předchozí karta
        </button>
        <button
          onClick={handleKartaDalsi}
          className="button-sipka-vpravo"
          disabled={zablokovaneDalsi}
        >
          Další karta
        </button>
      </div>
      <div className="tlacitko-zpet">
        <span class="dekor-buttonu"></span>
        <Link to="/PagesTemaSeznam">
          <button className="button1">Zpět k tématům</button>
        </Link>
      </div>
    </>
  );
};

export default ButtonsCard;
