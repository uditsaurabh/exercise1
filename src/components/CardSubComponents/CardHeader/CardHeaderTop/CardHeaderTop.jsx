import React from 'react';
import Text from '../../../../reusableComponents/Text/Text';

import './CardHeaderTop.css';

function CardHeaderTop() {
  return (
    <section className='top'>
      <main className='main'>
        <section className='details main_flight_name'>
          <Text textType='bold'>Air India</Text>
          <Text textType='small'>6EF233</Text>
          <Text textType='small'>Business Class</Text>
        </section>

        <section className='details main_flight_arrival'>
          <section className='time'>
            <Text textType='bold'>06:16</Text>
            <Text textType='small'>hrs</Text>
          </section>
          <Text textType='small'>BLR</Text>
          <Text textType='small'>26 May</Text>
        </section>

        <section className='details main_flight_duration'>
          <Text textType='small'>2h 40m</Text>
          <p className='flight_stopline' />
          <Text textType='small'>Non Stop</Text>
        </section>

        <section className=' details main_flight_depature'>
          <section className='time'>
            <Text textType='bold'>08:36</Text>
            <Text textType='small'>hrs</Text>
          </section>

          <Text textType='small'>DLH</Text>
          <Text textType='small'>26 May</Text>
        </section>

        <section className=' details main_flight_price'>
          <Text textType='large'>2,256 INR</Text>
          <Text textType='small' style={{ color: 'red' }}>
            Outside Policy
          </Text>
        </section>
      </main>
    </section>
  );
}

export default CardHeaderTop;
