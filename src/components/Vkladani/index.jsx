import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Vkladani = (props) => {
  return (
    <div className="vkladani-kontejner">
      <div className="vkladani">
        <div className="vkladani-text">
          <p>
            Zde si bude uživatel moci vytvářet vlastní memokarty. <br />
            Na této části budeme pracovat po skončení DA. STAY TUNED.
          </p>
        </div>
        <button onClick={props.zavrit} className="tlacitko-navod">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default Vkladani;
