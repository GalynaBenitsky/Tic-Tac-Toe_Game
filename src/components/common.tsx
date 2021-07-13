import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSquare = styled.button`
  width: 200px;
  height: 200px;
  background: #fff;
  border: 2px solid #3c6562;
  padding: 0;
  font-size: 5em;
  color: rgb(62, 151, 139);
  font-weight: bold;
  box-shadow: 10px 10px 5px 0px rgb(62, 151, 139);
  -webkit-box-shadow: 10px 10px 5px 0px rgb(0, 53, 69);
  -moz-box-shadow: 10px 10px 5px 0px rgb(0, 53, 69);
`;
