import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "lib/styles/palette";

const NoDecorationLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-weight: 200;
  color: ${(props) => (props.color ? props.color : palette.black)};
`;

export default NoDecorationLink;
