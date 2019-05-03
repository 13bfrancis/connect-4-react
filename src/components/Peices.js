import React from 'react';
import styled from 'styled-components';

import Peice from './Peice';

const Peices = ({ board, dropPiece, isOver }) => {
  const peices = board.map((row, i) => {
    return row.map((peice, j) => (
      <Peice
        drop={() => {
          dropPiece(j);
        }}
        color={board[i][j]}
        col={j}
        row={i}
        key={i * j + j}
        isOver={isOver}
      />
    ));
  });
  return <>{peices}</>;
};

export default Peices;
