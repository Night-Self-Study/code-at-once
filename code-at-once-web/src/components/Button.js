import styled from "styled-components";
import palette from "lib/styles/palette";

const Button = styled.button`
  background: ${(props) =>
    props.background ? props.background : palette.pastelBlue};
  color: ${(props) => (props.color ? props.color : palette.white)};

  font-size: 1em;
  margin: ${(props) => props.margin || "0px 0px"};
  padding: ${(props) => props.padding || "20px 10px"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export default Button;
