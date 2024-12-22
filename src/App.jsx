import { useState } from 'react'
import './App.css'

  const choices = ["rock", "paper", "scissors"];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  
  const playGame = (userSelection) => {
    setUserChoice(userSelection);
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerSelection);
    setResult(determineWinner(userSelection, computerSelection));
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return "draw";
    if (
        (user === "rock" && computer === "scissors")||
        (user === "paper" && computer === "rock")||
        (user === "scissors" && computer === "paper")
    ) {
      alert("ผลคือออ!");
      return "คุณชนะ!";
  } else {
      alert("ผลคือออ!");
      return "คุณแพ้!";
  }
  }; 

  return (
    <>
      <h1>เกมเป่ายิงฉุบ</h1>
      <button onClick={() => playGame('rock')}>หิน</button>
      <button onClick={() => playGame('paper')}>กระดาษ</button>
      <button onClick={() => playGame('scissors')}>กรรไกร</button>

      { userChoice && computerChoice && (
        <div>
          <h2>ผลการเเข่งขัน</h2>
          <p>คุณเลือก: {userChoice}</p>
          <p>บอทเลือก: {computerChoice}</p>
          <h2>ผล: {result}</h2>
        </div>
      )}
    </>
  )
}

export default App
