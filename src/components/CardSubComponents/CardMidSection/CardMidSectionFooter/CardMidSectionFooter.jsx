import React from 'react';
import Text from '../../../../reusableComponents/Text/Text';
import { FiThumbsUp } from 'react-icons/fi';
import './CardMidSectionFooter.css';

function CardMidSectionFooter() {
  return (
    <section className='main'>
      <section className='left'>
        <section className='thumbsup'>
          <FiThumbsUp />
          <Text textType='small'>15+ colleagues</Text>
        </section>

        <Text textType='small'>Breakfast Included</Text>
        <Text textType='small'>itllite Fare</Text>
        <Text textType='small'>GST Assured</Text>
        <Text textType='small'>15+ colleagues</Text>
        <Text textType='small' style={{ color: 'green' }}>
          safe++
        </Text>
        <Text textType='small' style={{ color: 'red' }}>
          quality unclear
        </Text>
      </section>
      <section className='right'>
        <Text textType='small' style={{ color: 'blue' }}>
          Cancellation Policy
        </Text>
      </section>
    </section>
  );
}

export default CardMidSectionFooter;
