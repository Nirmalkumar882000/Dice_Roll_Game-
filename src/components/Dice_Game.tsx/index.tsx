import React, { useEffect, useState } from 'react'
import "./dice.css"

function Dice_Game() {

  
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (!isRolling) {
      setIsRolling(true);
      // Simulate dice rolling with random values after a delay
      setTimeout(() => {
        const newDiceOne = Math.floor(Math.random() * 6) + 1;
        const newDiceTwo = Math.floor(Math.random() * 6) + 1;
        setDiceOne(newDiceOne);
        setDiceTwo(newDiceTwo);
        setIsRolling(false);
      }, 1000); // Adjust the delay as needed
    }
  };

  // Display a message based on the dice values
  const getResultMessage = () => {
    const total = diceOne + diceTwo;
    if (total === 7) {
      return 'You win!';
    } else {
      return 'Try again!';
    }
  };
  return (
    <div className="game">
    <div className="container">
      <h1>{diceOne}</h1>
      <div id='dice1' className={`dice diceone ${diceOne}`}>
        <div id="dice-one-side-one" className='side one'>
          <div className="dot one-1"></div>
        </div>
        <div id="dice-one-side-two" className='side two'>
          <div className="dot two-1"></div>
          <div className="dot two-2"></div>
        </div>
        <div id="dice-one-side-three" className='side three'>
          <div className="dot three-1"></div>
          <div className="dot three-2"></div>
          <div className="dot three-3"></div>
        </div>
        <div id="dice-one-side-four" className='side four'>
          <div className="dot four-1"></div>
          <div className="dot four-2"></div>
          <div className="dot four-3"></div>
          <div className="dot four-4"></div>
        </div>
        <div id="dice-one-side-five" className='side five'>
          <div className="dot five-1"></div>
          <div className="dot five-2"></div>
          <div className="dot five-3"></div>
          <div className="dot five-4"></div>
          <div className="dot five-5"></div>
        </div>
        <div id="dice-one-side-six" className='side six'>
          <div className="dot six-1"></div>
          <div className="dot six-2"></div>
          <div className="dot six-3"></div>
          <div className="dot six-4"></div>
          <div className="dot six-5"></div>
          <div className="dot six-6"></div>
        </div>
      </div>
   </div>
    <div className="container">
    <h1>{diceTwo}</h1>
      <div id='dice2' className={`dice dicetwo ${ diceTwo}`}>
        <div id="dice-two-side-one" className='side one'>
          <div className="dot one-1"></div>
        </div>
        <div id="dice-two-side-two" className='side two'>
          <div className="dot two-1"></div>
          <div className="dot two-2"></div>
        </div>
        <div id="dice-two-side-three" className='side three'>
          <div className="dot three-1"></div>
          <div className="dot three-2"></div>
          <div className="dot three-3"></div>
        </div>
        <div id="dice-two-side-four" className='side four'>
          <div className="dot four-1"></div>
          <div className="dot four-2"></div>
          <div className="dot four-3"></div>
          <div className="dot four-4"></div>
        </div>
        <div id="dice-two-side-five" className='side five'>
          <div className="dot five-1"></div>
          <div className="dot five-2"></div>
          <div className="dot five-3"></div>
          <div className="dot five-4"></div>
          <div className="dot five-5"></div>
        </div>
        <div id="dice-two-side-six" className='side six'>
          <div className="dot six-1"></div>
          <div className="dot six-2"></div>
          <div className="dot six-3"></div>
          <div className="dot six-4"></div>
          <div className="dot six-5"></div>
          <div className="dot six-6"></div>
        </div>
      </div> 
   </div>
   <button id="roll" onClick={rollDice} disabled={isRolling}>
   {isRolling ? 'Rolling...' : 'Roll Dice'}
    </button>

   <div>
        <h1>Dice Game</h1>
        <p>{getResultMessage()}</p>
      </div>
  </div> 
  )
}

export default Dice_Game
