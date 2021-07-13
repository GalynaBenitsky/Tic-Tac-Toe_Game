import React from "react";

import { Row } from "./common";
import Board from "./Board";
import { useGameState } from "./GameState";

function Layout() {
  const { current, xIsNext, winner, handleClick } = useGameState();

  return (
    <div>
      <h1>
        {winner ? `Winner 🥳 ${winner} ` : `Next Player ${xIsNext ? "X" : "O"}`}
      </h1>

      <Row>
        <Board board={current} onClick={handleClick} />
      </Row>
    </div>
  );
}
export default Layout;
