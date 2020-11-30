import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div>
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/phar.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Category'
              path='/services'
            />
            <CardItem
              src='images/phar.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Category'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
    <div className='cards2'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/phar.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Category'
              path='/services'
            />
            <CardItem
              src='images/phar.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Category'
              path='/products'
            />
            <CardItem
              src='images/phar.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Category'
              path='/sign-up'
            />
            <CardItem
              src='images/phar.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Category'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
