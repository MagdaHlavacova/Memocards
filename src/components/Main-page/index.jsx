import React from 'react';
import './style.css';
import brainImg from './img/brain-ai.png';
import { Link } from 'react-router-dom';

const Main = () => {
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
            <button className="button1">Vkládání</button>
            <Link to="/PagesTemaSeznam" className="button1">
              Procvičování
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
