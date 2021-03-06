import { Row, Column } from "./common";
import { BoardState } from "./GameState";
import { Square, SquareProps } from "./StyledSquare";

type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};

function Board({ board, onClick }: BoardProps) {
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Column>
        <Row>
          <Square {...createProps(0)} />
          <Square {...createProps(1)} />
          <Square {...createProps(2)} />
        </Row>
        <Row>
          <Square {...createProps(3)} />
          <Square {...createProps(4)} />
          <Square {...createProps(5)} />
        </Row>
        <Row>
          <Square {...createProps(6)} />
          <Square {...createProps(7)} />
          <Square {...createProps(8)} />
        </Row>
      </Column>
    </div>
  );
}
export default Board;
