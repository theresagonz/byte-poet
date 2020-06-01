import React from 'react';
import styled from 'styled-components';
import WordTray from './WordTray';

const StyledBoard = styled.div`
  background-color: white;
  margin: 0 auto;
  padding: 20px;
  width: 80vw;
  height: calc(85vh - 100px);
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: flex-end;
  position: relative; // indicates droppable area for Draggable library
`;

const Board: React.FC = () => {
  return (
    <StyledBoard id="board">
      <WordTray />
    </StyledBoard>
  );
};

export default Board;
