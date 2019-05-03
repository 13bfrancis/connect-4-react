import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';

import { createBoard } from './board';
import Peices from './components/Peices';

const ConnectFour = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(7, minmax(25px, 1fr));
  grid-template-columns: repeat(7, minmax(25px, 1fr));
  overflow-x: auto;
`;
const Header = styled.header`
  grid-column: 1 / -1;
  box-sizing: border-box;
  justify-self: center;
  align-self: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border-bottom: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
  }
`;

const App = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [board, setBoard] = useState(createBoard());

  const dropPeice = col => {
    let color = isBlack ? 'black' : 'red';
    let newBoard = [...board];
    for (let i = 5; i >= 0; i--) {
      if (!board[i][col]) {
        newBoard[i][col] = color;
        checkWin(i, col, color);
        setIsBlack(!isBlack);
        break;
      }
    }
    setBoard(newBoard);
  };

  const checkWin = (currRow, currCol, color) => {
    let vertCount = 0;
    let rightCount = 0;
    let leftCount = 0;
    let diagOne = 0;
    let diagTwo = 0;
    let diagThree = 0;
    let diagFour = 0;
    //vertical
    let row = currRow + 1;
    let col = currCol;
    while (
      row > -1 &&
      col > -1 &&
      row < 6 &&
      col < 7 &&
      board[row][col] === color
    ) {
      console.log(board[row][col]);
      vertCount++;
      row++;
    }
    //horizontal left
    row = currRow;
    col = currCol - 1;
    while (
      row > -1 &&
      col > -1 &&
      row < 6 &&
      col < 7 &&
      board[row][col] === color
    ) {
      leftCount++;
      col--;
    }
    //horizontal right
    row = currRow;
    col = currCol + 1;
    while (
      row > -1 &&
      col > -1 &&
      row < 6 &&
      col < 7 &&
      board[row][col] === color
    ) {
      rightCount++;
      col++;
    }

    //diag down right
    row = currRow + 1;
    col = currCol + 1;
    while (
      row > -1 &&
      col > -1 &&
      row < 6 &&
      col < 7 &&
      board[row][col] === color
    ) {
      diagOne++;
      row++;
      col++;
    }
    //diag up left
    row = currRow - 1;
    col = currCol - 1;
    while (
      row > -1 &&
      col > -1 &&
      row < 6 &&
      col < 7 &&
      board[row][col] === color
    ) {
      diagTwo++;
      row--;
      col--;
    }

    //diag down left
    row = currRow + 1;
    col = currCol - 1;
    while (
      row > -1 &&
      col > -1 &&
      row < 6 &&
      col < 7 &&
      board[row][col] === color
    ) {
      diagThree++;
      row++;
      col--;
    }
    //diag up right
    row = currRow - 1;
    col = currCol + 1;
    while (
      row > -1 &&
      col > -1 &&
      row < 6 &&
      col < 7 &&
      board[row][col] === color
    ) {
      diagFour++;
      row--;
      col++;
    }
    if (
      leftCount + rightCount + 1 >= 4 ||
      vertCount + 1 >= 4 ||
      diagOne + diagTwo + 1 >= 4 ||
      diagThree + diagFour + 1 >= 4
    ) {
      console.log(`${color} wins!!`);
    }
  };

  return (
    <ConnectFour>
      <Header>
        <h1 onClick={checkWin}>Connect 4</h1>
      </Header>
      <Peices dropPiece={dropPeice} board={board} />
    </ConnectFour>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
