import { Row, Column } from "./common";
import Squre from "./StyledSquare";

function Board() {
  return (
    <div>
      <Column gap={0}>
        <Row gap={0}>
          <Squre />
          <Squre />
          <Squre />
        </Row>
        <Row gap={0}>
          <Squre />
          <Squre />
          <Squre />
        </Row>
        <Row gap={0}>
          <Squre />
          <Squre />
          <Squre />
        </Row>
      </Column>
    </div>
  );
}
export default Board;
