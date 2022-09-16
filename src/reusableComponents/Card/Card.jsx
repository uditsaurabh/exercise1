import React from 'react';
import CardHeader from '../../components/CardSubComponents/CardHeader/CardHeader';
import CardMidSection from '../../components/CardSubComponents/CardMidSection/CardMidSection';
import './Card.css';
function Card() {
  return (
    <section className='card'>
      <CardHeader />
      <CardMidSection />
    </section>
  );
}

export default Card;
