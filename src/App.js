import React, { useState } from 'react';
const App = () => {

  const player1 = "❌";   // enter your symbol here 
  const player2 = "⭕";  // enter your symbol here 
  const emptyPlace = ""; // write content for showing empty space

  const [activePlayer, setActivePlayer] = useState(player1);
  const [nineArr, setNineArr] = useState(new Array(9).fill(emptyPlace));
  const gameComplete = !nineArr.some((ele) => ele === emptyPlace);

  const winPossible =
    (nineArr[0] === nineArr[1] && nineArr[1] === nineArr[2] && nineArr[1] !== emptyPlace) ||
    (nineArr[3] === nineArr[4] && nineArr[4] === nineArr[5] && nineArr[4] !== emptyPlace) ||
    (nineArr[6] === nineArr[7] && nineArr[7] === nineArr[8] && nineArr[7] !== emptyPlace) ||
    (nineArr[0] === nineArr[3] && nineArr[3] === nineArr[6] && nineArr[3] !== emptyPlace) ||
    (nineArr[1] === nineArr[4] && nineArr[4] === nineArr[7] && nineArr[4] !== emptyPlace) ||
    (nineArr[2] === nineArr[5] && nineArr[5] === nineArr[8] && nineArr[5] !== emptyPlace) ||
    (nineArr[0] === nineArr[4] && nineArr[4] === nineArr[8] && nineArr[4] !== emptyPlace) ||
    (nineArr[2] === nineArr[4] && nineArr[4] === nineArr[6] && nineArr[4] !== emptyPlace)

  const handleClick = (index) => {
    if (activePlayer === player1) {
      setActivePlayer(player2);
    } else if (activePlayer === player2) {
      setActivePlayer(player1);
    }
    const updatedArray = [...nineArr];
    updatedArray[index - 1] = activePlayer;
    setNineArr(updatedArray);
  };

  const handleRestart = () => {
    setNineArr(new Array(9).fill(emptyPlace));
    setActivePlayer(player1)
  }

  return (
    <div style={{ height: "100dvh", width: "100vdw" }} className='bg-dark text-white d-flex justify-content-center align-items-center'>
      <div>

        {/* header */}
        <div className="d-flex align-items-center justify-content-center">
          <h1>Tic Tac Toe |</h1>
          <h4 className='ml-1'>{`Palyer ${activePlayer}'s turn`}</h4>
        </div>
        <hr className='border' />

        {/* game body */}
        <div
          style={{ height: '400px', width: '400px' }}
          className='game-body d-flex flex-wrap justify-content-between align-items-center p-2' >
          {nineArr.map((ele, index) => (
            <span
              disabled={winPossible}
              key={index}
              onClick={() => ele === emptyPlace && handleClick(index + 1)}
              style={{ height: '30%', width: '30%' }}
              className='game-body-sub-div d-flex justify-content-center border align-items-center shadow bg-dark cursor-pointer '
            >
              <h1>{ele}</h1>
            </span>
          ))}
        </div>

        {/* footer */}
        <div className="d-flex align-items-center justify-content-center">
          {winPossible &&
            <div>
              <span>Winner is {activePlayer === player1 ? player2 : player1}
                <button className='btn btn-danger ml-2' onClick={handleRestart}>Restart Game</button>
              </span>
            </div>}

          {gameComplete && !winPossible &&
            <div>
              <span>Game Draw
                <button className='btn btn-danger ml-2' onClick={handleRestart}>Restart Game</button>
              </span>
            </div>}
        </div>

      </div>
    </div >
  );
};


export default App;
