import React from 'react';
import './Home.css';

const Home = ({ onStartQuiz }) => {
  return (
    <div className='bg-container'>
      <h1 className='main-heading'>Quizard</h1>
      <button className='main-button' onClick={onStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
}

export default Home;