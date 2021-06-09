import React from 'react';
import './style.css';

const Vkladani = (props) => {
  return (
    <div className="vkladani-kontejner">
      <div className="vkladani">
        <button onClick={otevrit} className="button1">
          Zde budete moci vytvářet vlastní karty. <br />
          Tuto možnost se chystáme udělat po skončení Digitální akademie. STAY
          TUNED.
        </button>
      </div>
    </div>
  );
};

export default Vkladani;
