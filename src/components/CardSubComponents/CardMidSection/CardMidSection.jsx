import React from 'react';
import HotelPic from '../../../assets/hotelRoom.jpeg';

import './CardMidSection.css';
import StarRating from '../../../reusableComponents/StarRatingComponents.jsx/StarRating';
import Text from '../../../reusableComponents/Text/Text';
import { IoLocationOutline } from 'react-icons/io5';
function CardMidSection() {
  return (
    <section className='mid_container'>
      <section className='description'>
        <img className='hotel_Image' src={HotelPic} alt='hotel room pic' />
        <section clasName='desc_details'>
          <section className='rating'>
            <StarRating />
            <Text textType='bold'>
              Ramadha By Wyndam Singapore at Zhongshan Park
            </Text>
            <section className='hotel_details'>
              <IoLocationOutline />
              <Text textType='small'>16 Ah Hood Rd, Singapore 329982</Text>
            </section>
            <section className='distance hotel_details'>
              <Text textType='small'>27 May</Text>
              <Text textType='small'>28 May</Text>
              <Text textType='small'>
                <li>12km from the serached location</li>
              </Text>
            </section>
          </section>
        </section>
      </section>
      <section className='ratings'>
        <Text textType='small'>4/5 ratings</Text>
        <Text textType='small'>48 reviews</Text>
      </section>
      <section clasName='price'>
        <Text textType='large'>4,512 INR</Text>
        <Text textType='small'>2,256 INR per night</Text>
        <Text textType='small' style={{ color: 'red' }}>
          Outside Policy
        </Text>
      </section>
    </section>
  );
}

export default CardMidSection;
