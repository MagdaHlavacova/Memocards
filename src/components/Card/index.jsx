import React from 'react';
import './style.css';

const Card = (props) => {
  if (props.type === 'image') {
    return (
      <div className="obal-karta">
        <div className="karta-obrazek">
          <img src={props.content} />
        </div>
      </div>
    );
  } else if (props.type === 'text') {
    return (
      <div className="obal-karta">
        <div className="karta">
          <p>{props.content}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="obal-karta">
        <div className="karta">
          <audio controls>
            <source src={props.content} />
          </audio>
        </div>
      </div>
    );
  }
};

export default Card;
