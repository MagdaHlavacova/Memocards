import React from 'react';
import './style.css';

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
        <button className="button1">Zpět k tématům</button>
      </div>
    </>
  );
};

export default ButtonsCard;
