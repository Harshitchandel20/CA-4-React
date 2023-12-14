import React, {useState} from 'react'
import './Result.css'




const Result = (props) => {
    console.log(props)
    const [darkTheme, setDarkTheme] = useState(false);
    const handleDarkTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme)
    }

  return (
    <div className={`result-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>

       <div id='bg-chg-btn'><button id='chg-btn' onClick={handleDarkTheme} style={{backgroundColor:darkTheme ? "white" : "black" , color:darkTheme ? "black" : "white"}}>{darkTheme ? "Light" : "Dark"}</button></div>

       <div className='score-container'>

        <h1> SCORE : {props.score}</h1>
        <h2>{props.score} Out Of 5 Is Correct - <span>{(props.score/5)*100}%</span></h2>
        <div><button className='play-btn' onClick={props.onSmash}>PLAY AGAIN</button></div>

       </div>

    </div>
  )
}

export default Result
