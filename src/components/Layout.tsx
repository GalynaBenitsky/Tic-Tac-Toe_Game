import React from "react";

import { Row, Column } from "./common";
import Board from "./Board";
import Log from "./Log";

function Layout() {
  return (
    <div>
      <Row gap={20}>
        <Column gap={20}>
          <div>Status</div>
          <Board />
        </Column>
        <Log />
      </Row>
    </div>
  );
}
export default Layout;
