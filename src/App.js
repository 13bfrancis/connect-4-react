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
  justify-self: center;
  align-self: center;
  text-align: center;
  width: 100%;
  border-bottom: 3px solid black;
`;

const App = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [board, setBoard] = useState(createBoard());

  return (
    <ConnectFour>
      <Header>
        <h1>Connect 4</h1>
      </Header>
      <Peices board={board} />
    </ConnectFour>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
