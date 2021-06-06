import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const ButtonsCard = () => {
  return (
    <>
      <div className="tlacitka">
        <div className="tlacitko-strana">
          <button className="button1">Otoč kartu</button>
        </div>
      </div>
      <div className="tlacitka-navigace">
        <button className="button-sipka-vlevo"> Zpět na kartu</button>
        <button className="button-sipka-vpravo">Další karta</button>
      </div>
      <div className="tlacitko-zpet">
        <Link to="/PagesTemaSeznam">
          <button className="button1">Zpět k tématům</button>
        </Link>
      </div>
    </>
  );
};

export default ButtonsCard;
