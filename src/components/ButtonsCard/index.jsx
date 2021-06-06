import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const ButtonsCard = ({
  handleOtoceni,
  handleKartaZpet,
  handleKartaDalsi,
  zablokovaneDalsi,
  zablokovaneZpet,
}) => {
  return (
    <>
      <div className="tlacitka">
        <div className="tlacitko-strana">
          <button onClick={handleOtoceni} className="button1">
            Řešení
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
        <Link to="/PagesTemaSeznam">
          <button className="button1">Zpět k tématům</button>
        </Link>
      </div>
    </>
  );
};

export default ButtonsCard;
