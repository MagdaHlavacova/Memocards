import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.css';

const PagesNavod = (props) => {
  return (
    <div className="modal-kontejner">
      <div className="modal">
        <button onClick={props.zavrit} className="tlacitko-navod">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="navod-text">
          <li>1. Vyberte si téma, jaké se chcete učit.</li>
          <li>2. Klikněte na PROCVIČOVAT.</li>
          <li>3. Stiskněte OTOČ KARTU pro zobrazení druhé strany karty.</li>
          <li>4. Stiskněte DALŠÍ KARTA pro zobrazení další karty.</li>
        </ul>
      </div>
    </div>
  );
};

export default PagesNavod;
