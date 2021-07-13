import { returnStatement } from "@babel/types";
import React from "react";
import styled from "styled-components";

import Board from "./Board";
import Log from "./Log";

type LayoutProps = {
  gap: number;
};

const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

function Layout() {
  return (
    <>
      <Row gap={20}>
        <Column gap={20}>
          <div>Status</div>
          <Board />
        </Column>
        <Log />
      </Row>
    </>
  );
}
export default Layout;
