import React, { useState } from 'react';
import './style.css';
import brainImg from './img/brain-ai.png';
import Vkladani from '../Vkladani';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFileExport, faFileImport } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const [ukazModal, setUkazModal] = useState(false);

  const otevrit = () => {
    setUkazModal(true);
  };

  const zavrit = () => {
    setUkazModal(false);
  };

  return (
    <div className="obal">
      <div className="karta-responzivni-obal">
        <div className="obrazek">
          <img src={brainImg} alt="ilustrace mozku" />
        </div>
        <div className="texty">
          <h1>Hlubina myšlení</h1>
          <div className="oAplikaci">
            <p>
              Memokarty na míru. Při jejich tvoření se látku naučíte a
              pravidelným opakováním pak zafixujete. <br /> Dle typu paměti či
              potřeb probírané látky můžete vkládat texty, obrázky či zvukovou
              stopu.
            </p>
          </div>

          <div className="tlacitka-homepage">
            <button onClick={otevrit} className="button1">
              <FontAwesomeIcon icon={faFileImport} />
              {'   '}Vkládání
            </button>
            <Link to="/PagesTemaSeznam" className="button1">
              Procvičování{'   '}
              <FontAwesomeIcon icon={faFileExport} />
            </Link>
          </div>
        </div>
        {ukazModal ? <Vkladani zavrit={zavrit} /> : null}
      </div>
    </div>
  );
};

export default Main;
