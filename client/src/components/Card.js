import React from "react";
import styled from "styled-components";
import palette from "../lib/styles/palette";

const Card = ({ cardWidth }) => {
  return <CardWrapper cardWidth={cardWidth}>CARD</CardWrapper>;
};

const CardWrapper = styled.div`
  width: ${(props) => props.cardWidth}vw;
  padding: 7vh;

  text-align: center;

  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
export default Card;
