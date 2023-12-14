// import React, { useState } from 'react'
import './Quiz.css'
import Option from './Option'
import { useState } from 'react'

const Quiz = (props) => {
    const [highlight, setHighlight] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);
    const handleHighlight = () => {
        setHighlight(!highlight);
    }
    const handleDarkTheme = () => {
        setDarkTheme(!darkTheme)
    }
  return (
    <div className={`quiz-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>

        <div id='bg-chg-btn'><button id='chg-btn' onClick={handleDarkTheme} style={{backgroundColor:darkTheme ? "white" : "black" , color:darkTheme ? "black" : "white"}}>{darkTheme ? "Light" : "Dark"}</button></div>

        <div className='ques-container'>
        <h1> Question: <span>{props.count+1}</span> of 5 </h1>


        <h2 style={{color: highlight ? 'red' : 'black'}}>{props.data.text}</h2>

          <div id='option'>
            {props.data.options.map((item,index) => (<Option option={item} key={index} onSmash={props.handleClick}/>))}

          </div>

          <div id='highlight'><button id='lightbtn' onClick={handleHighlight}>{highlight ? 'Remove highlight' : 'Highlight'}</button></div>

        </div>
          {/* <div id='remove-highlight'><button id='remove-lightbtn'>Remove HIGHLIGHT</button></div> */}
    </div>
  )
}

export default Quiz

