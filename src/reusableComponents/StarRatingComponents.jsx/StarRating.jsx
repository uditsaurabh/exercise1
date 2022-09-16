import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './StarRating.css';
function StarRating() {
  return (
    <section className='star'>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </section>
  );
}

export default StarRating;
