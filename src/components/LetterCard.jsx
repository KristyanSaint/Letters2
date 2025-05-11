import React from 'react';

const LetterCard = ({ title, content }) => (
  <div className="letter-card">
    {title && <h3>{title}</h3>}
    <p>{content}</p>
  </div>
);

export default LetterCard;
