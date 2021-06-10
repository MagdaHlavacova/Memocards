import React from 'react';
import './style.css';

const Vkladani = (props) => {
  return (
    <div className="vkladani-kontejner">
      <div className="vkladani">
        <button onClick={otevrit} className="button1">
          Zde si bude uživatel moci vytvářet vlastní memokarty. <br />
          Na této části budeme pracovat po skončení DA. STAY TUNED.
        </button>
      </div>
    </div>
  );
};

export default Vkladani;
