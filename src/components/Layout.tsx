import React from "react";

import { Row, Column } from "./common";
import Board from "./Board";
import Log from "./Log";
import { useGameState } from "./GameState";

function Layout() {
  const { gameState, current, xIsNext, winner, handleClick, jumpTo } =
    useGameState();
  return (
    <div>
      <Row gap={20}>
        <Column gap={20}>
          <div>
            {winner ? `Winner ${winner}` : `Next Player ${xIsNext ? "X" : "O"}`}
          </div>
          <Board board={current} onClick={handleClick} />
        </Column>
        <Log />
      </Row>
    </div>
  );
}
export default Layout;
