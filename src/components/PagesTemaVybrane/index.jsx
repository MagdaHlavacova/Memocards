import React from 'react';
import Header from '../Header';
import './style.css';
import { Link } from 'react-router-dom';

const PagesTemaVybrane = () => {
  return (
    <>
      <Header />
      <div className="obal-temata">
        <div className="nadpis-stranky">
          <h2>Kosti:</h2>
        </div>
        <div className="tlacitka">
          <div className="tlacitka-tema">
            <button className="button1">Začít procvičovat</button>
            <button className="button1">Jak na to?</button>
            <button className="button1">Smazat téma</button>
            <Link to="/PagesTemaSeznam">
              <button className="button1">Zpět na seznam témat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesTemaVybrane;
