import * as React from "react";
import { useGameState } from "./components/GameState";
import Layout from "./components/Layout";

function App() {
  const { gameState, current, xIsNext, winner, handleClick, jumpTo } =
    useGameState();

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
