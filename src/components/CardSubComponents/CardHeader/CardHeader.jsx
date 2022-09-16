import React from 'react';

import './CardHeader.css';
import CardHeaderBottom from './CardHeaderBottom/CardHeaderBottom';
import CardHeaderTop from './CardHeaderTop/CardHeaderTop';

function CardHeader() {
  return (
    <>
      <CardHeaderTop />
      <CardHeaderBottom />
    </>
  );
}

export default CardHeader;
