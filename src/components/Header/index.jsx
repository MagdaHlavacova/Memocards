import React from 'react';
import './style.css';
import brainImg from './img/brain-ai.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="logo-brain">
          <img src={brainImg} alt="ilustrace mozku" />
        </div>
        <div className="hlubina">
          Hlubina <br /> myšlení
        </div>
      </div>
    </header>
  );
};

export default Header;
