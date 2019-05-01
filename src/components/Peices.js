import React from 'react';
import styled from 'styled-components';

const Piece = styled.div`
  width: calc((100vmin / 7) - 10px);
  height: calc((100vmin / 7) - 10px);
  background: white;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;

const Peices = ({ board }) => {
  const peices = board.map((row, i) => {
    return row.map((peice, j) => <Piece key={i * j + j} />);
  });
  console.log(peices);
  return <>{peices}</>;
};

export default Peices;
