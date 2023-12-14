import { useState } from 'react'
import './App.css'
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import data from "./questions"


function App() {
  const[count,setCount] = useState(0)
  const[score,setScore] = useState(0)

  const handleClick = (e) => {
    console.log(e.target.attributes)
    setCount(prevCount => prevCount +1)
    if(e.target.attributes.iscorrect.value === "true"){
      setScore(prevScore => prevScore+1)
    }
  } 


  const restHandle = () =>{
    setCount(0)
    setScore(0)
  }


  const [currentView, setCurrentView] = useState("Home")

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };



  return (
    <>

    { currentView == "Home" && <Home onStartQuiz={handleStartQuiz} />}

    {(count!=5)?(<Quiz data={data[count]} count={count} handleClick={handleClick} />) : (<Result score={score} onSmash = {restHandle}/>)}
    </>
  )
}

export default App
