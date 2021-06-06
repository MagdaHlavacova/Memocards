import React from 'react';
import './style.css';

const PagesNavod = (props) => {
  return (
    <div className="modal-kontejner">
      <div className="modal">
        <ul className="navod-text">
          <li>1. Vyberte si téma, jaké se chcete učit.</li>
          <li>2. Začněte procvičovat.</li>
          <li>3. Otáčejte kartou.</li>
          <li>4. Přejděte na další kartu.</li>
        </ul>
        <button onClick={props.zavrit} className="tlacitko-navod">
          Zavřít návod
        </button>
      </div>
    </div>
  );
};

export default PagesNavod;
