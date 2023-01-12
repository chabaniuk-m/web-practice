import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const checkNumber = (number) => {
    if (number >= people.length) {
      return 0
    } else if (number < 0) {
      return people.length - 1
    } else {
      return number
    }
  }

  const nextPerson = () => setIndex(index =>  checkNumber(index + 1))
  const prevPerson = () => setIndex(index => checkNumber(index - 1))
  const randomPerson = () => setIndex(index => {
    const randIndex = Math.floor(Math.random() * people.length)
    return randIndex == index ? checkNumber(index + 1) : randIndex
  })

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </article>
  )
};

export default Review; 
