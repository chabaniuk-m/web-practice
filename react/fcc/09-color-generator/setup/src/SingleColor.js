import React, { useState, useEffect } from 'react'

const SingleColor = ({weight, index, hex}) => {
  const [alert, setAlert] = useState(false)
  const hexCode = '#' + hex
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
  
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])
  
  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `${hexCode}`}} onClick={() => {
      navigator.clipboard.writeText(hexCode)
      setAlert(true)
    }}>
      <p className='percent-value'>
        {weight}%
      </p>
      <p className='color-value'>{hexCode}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
