import React from 'react';
import './Divider.css';
function Divider({ borderStyle = 'solid' }) {
  return <p className={borderStyle}></p>;
}

export default Divider;
