import React from 'react';
import Text from '../../../reusableComponents/Text/Text';
import './CardFooter.css';

function CardFooter() {
  return (
    <section className='mainFooter'>
      <section className='mainFooter_left'>
        <section>
          <Text textType='small'>Your Reward</Text>
          <Text textType='large'>690 INR</Text>
        </section>
        <section>
          <Text textType='small'>Savings</Text>
          <Text textType='large'>1200 INR</Text>
        </section>
      </section>
      <section className='mainFooter_right'>
        <section>
          <Text textType='small'>Total price</Text>
          <Text textType='large'>8,478 INR</Text>
        </section>
      </section>
    </section>
  );
}

export default CardFooter;
