import React from 'react';
import CardFooter from '../../components/CardSubComponents/CardFooter/CardFooter';
import CardHeader from '../../components/CardSubComponents/CardHeader/CardHeader';
import CardMidSection from '../../components/CardSubComponents/CardMidSection/CardMidSection';
import { TiTickOutline } from 'react-icons/ti';
import './Card.css';
import Divider from '../Divider/Divider';
import HalfCircle from '../HalfCircle/HalfCircle';
function Card() {
  return (
    <section className='card'>
      <HalfCircle position={{ bottom: '46px', left: '-2px' }} />
      <HalfCircle
        position={{
          bottom: '46px',
          right: '-2px',
          transform: 'rotate(180deg)',
        }}
      />
      <p className='triangle'>
        <TiTickOutline className='tick' />
      </p>
      <CardHeader className='header' />
      <Divider />
      <CardMidSection />
      <Divider borderStyle='dashed' />
      <CardFooter />
    </section>
  );
}

export default Card;
