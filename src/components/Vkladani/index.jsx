import React from 'react';
import './style.css';

const Vkladani = (props) => {
  const [ukazModal, setUkazModal] = useState(false);

  const otevrit = () => {
    setUkazModal(true);
  };

  const zavrit = () => {
    setUkazModal(false);
  };

  return (
    <div className="vkladani-kontejner">
      <div className="vkladani">
        <button onClick={otevrit} className="button1">
          Zde si bude uživatel moci vytvářet vlastní memokarty. <br />
          Na této části budeme pracovat po skončení DA. STAY TUNED.
        </button>
      </div>
      {ukazModal ? <Vkladani zavrit={zavrit} /> : null}
    </div>
  );
};

export default Vkladani;
