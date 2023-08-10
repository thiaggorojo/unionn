import React from 'react';
import './Movingword.css';

const MovingWord = ({ word }) => {
  return (
    <div className="moving-word-container">
      <div className="moving-word">$ La cuota mas baja del mercado $ {word}</div>
    </div>
  );
};

export default MovingWord;
