import React from "react";

import { StyledSquare } from "./common";
import { Value } from "./GameState";

export type SquareProps = {
  value: Value;
  onClick: () => void;
};

export function Square(props: SquareProps) {
  return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
}
