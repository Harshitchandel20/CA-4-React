import React from 'react'

function Option({option,onSmash}) {
  return (
    <div className='options' onClick={(e) => onSmash(e)} iscorrect={option.isCorrect.toString()}>{option.text}</div>
  )
}

export default Option