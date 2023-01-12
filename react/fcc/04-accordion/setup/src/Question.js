import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {
  const [expanded, setExpanded] = useState(false)
  
  const MoreInfo = () => {
    return expanded ? <AiOutlineMinus /> : <AiOutlinePlus />
  }
  const Text = () => {
    return expanded ? <p>{info}</p> : <p></p>
  }
  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={toggleExpand}>
          <MoreInfo />
        </button>
      </header>
      <Text />
    </div>
  )
};

export default Question;
