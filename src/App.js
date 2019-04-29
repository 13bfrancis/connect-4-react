import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const TestDiv = styled.div`
  width: 100px;
  height: 100px;
  background: limegreen;
`;

const App = () => {
  return (
    <>
      <TestDiv />
      <h1>Hello Connect 4</h1>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
