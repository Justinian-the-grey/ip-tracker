import React, { useState } from 'react'

function CustomDiv (params) {
  const [text, setText] = useState('Initial Text')
  const [label, setLabel] = useState(params.buttonLabel)
  function onTextChange () {
    if (text === 'Initial Text') {
      setText('New Text')
    } else {
      setText('Initial Text')
    }
    if (label === params.buttonLabel) {
      setLabel('Active')
    } else {
      setLabel(params.buttonLabel)
    }
  }

  return (
    <div>
      <h3>
        {params.title}
      </h3>
      <p>{text}</p>
      <div className='custom-btn'>
        <button onClick={onTextChange}>
          {label}
        </button>
      </div>
    </div>
  )
}

export default CustomDiv
