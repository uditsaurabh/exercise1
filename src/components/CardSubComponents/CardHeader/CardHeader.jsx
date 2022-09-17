import React from 'react';
import CardHeaderBottom from './CardHeaderBottom/CardHeaderBottom';
import CardHeaderTop from './CardHeaderTop/CardHeaderTop';

import './CardHeader.css';
function CardHeader() {
  return (
    <>
      <CardHeaderTop />
      <CardHeaderBottom />
    </>
  );
}

export default CardHeader;
