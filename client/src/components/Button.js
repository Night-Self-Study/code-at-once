import styled from "styled-components";
import palette from "lib/styles/palette";

const Button = styled.button`
  display: block;
  background: ${(props) =>
    props.background ? props.color : palette.pastelBlue};
  color: ${(props) => (props.color ? props.color : palette.white)};

  font-size: 1em;
  margin: 20px 0px;
  padding: 20px 0px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export default Button;
