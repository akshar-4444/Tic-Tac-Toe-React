import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [activePlayer, setActivePlayer] = useState("X");
  const [nineArr, setNineArr] = useState(["", "", "", "", "", "", "", "", ""]);


  const winPossible =
    (nineArr[0] === nineArr[1] && nineArr[1] === nineArr[2] && nineArr[1] !== "") ||
    (nineArr[3] === nineArr[4] && nineArr[4] === nineArr[5] && nineArr[4] !== "") ||
    (nineArr[6] === nineArr[7] && nineArr[7] === nineArr[8] && nineArr[7] !== "") ||
    (nineArr[0] === nineArr[3] && nineArr[3] === nineArr[6] && nineArr[3] !== "") ||
    (nineArr[1] === nineArr[4] && nineArr[4] === nineArr[7] && nineArr[4] !== "") ||
    (nineArr[2] === nineArr[5] && nineArr[5] === nineArr[8] && nineArr[5] !== "") ||
    (nineArr[0] === nineArr[4] && nineArr[4] === nineArr[8] && nineArr[4] !== "") ||
    (nineArr[2] === nineArr[4] && nineArr[4] === nineArr[6] && nineArr[4] !== "")

  const gameComplete = !nineArr.some((ele) => ele === "");

  const handleClick = (index) => {
    if (activePlayer === "X") {
      setActivePlayer("O");
    } else if (activePlayer === "O") {
      setActivePlayer("X");
    }
    const updatedArray = [...nineArr];
    updatedArray[index - 1] = activePlayer;
    setNineArr(updatedArray);
  };

  const handleRestart = () => {
    setNineArr(["", "", "", "", "", "", "", "", ""])
    setActivePlayer("X")
  }
  return (
    <div className='full-screen'>
      <div>
        <div className='header-footer-div'>
          <h1>Tic Tac Toe |</h1>
          <h4>{`Palyer ${activePlayer}'s turn`}</h4>

        </div>
        <hr></hr>
        <div className='game-body' >
          {nineArr.map((ele, index) => (
            <button
              disabled={winPossible}
              key={index}
              onClick={() => ele === "" && handleClick(index + 1)}
              className='game-body-sub-div'
            >
              <h1>{ele}</h1>
            </button>
          ))}


        </div>
        <div className='header-footer-div'>
          {winPossible &&
            <div>
              <span>Winner is {activePlayer === "X" ? "O" : "X"} &nbsp;
                <button className='header-footer-button' onClick={handleRestart}>Restart Game</button>
              </span>
            </div>}

          {gameComplete && !winPossible &&
            <div>
              <span>Game Draw &nbsp;
                <button className='header-footer-button' onClick={handleRestart}>Restart Game</button>
              </span>
            </div>}
        </div>
      </div>
    </div >
  );
};


export default App;
