import React from 'react';
import { FcBusinessman } from 'react-icons/fc';
import Text from '../../../../reusableComponents/Text/Text';

import './CardHeaderBottom.css';

function CardHeaderBottom() {
  return (
    <section className='bottom'>
      <section className='bottom_left'>
        <section className='no_colleagues'>
          <FcBusinessman />
          <Text textType='small'>3 Colleagues on flight</Text>
        </section>
        <Text textType='small'>Early Departure</Text>
        <Text textType='small'>Cheapest Flight</Text>
        <Text textType='small'>Corporate Fare</Text>
        <Text textType='small'>Cabbin Baggage Only</Text>
      </section>
      <section className='bottom_right'>
        <Text textType='small' style={{ color: 'rgb(84, 106, 195)' }}>
          Flight Details
        </Text>
      </section>
    </section>
  );
}

export default CardHeaderBottom;
