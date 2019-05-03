import React from 'react';
import styled from 'styled-components';

const PeiceStyle = styled.div`
  width: calc((100vmin / 7) - 10px);
  height: calc((100vmin / 7) - 10px);
  background: ${props => (props.color ? props.color : 'white')};
  border-radius: 50%;
  justify-self: center;
  align-self: center;
  transition: background 0.3s linear;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5) inset;
  &:hover {
    cursor: pointer;
  }
`;

const Peice = ({ color, drop, row, col, isOver }) => (
  <PeiceStyle
    disabled={isOver}
    onClick={() => {
      drop(row, col);
    }}
    color={color}
  />
);

export default Peice;
