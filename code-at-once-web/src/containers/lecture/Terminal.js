import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';

const Terminal = () => {
  const inputRef = useRef();
  return (
    <TerminalWrapper onClick={() => inputRef.current.focus()}>
      <P>test@code-at-once:~$ </P> <input ref={inputRef} />
    </TerminalWrapper>
  );
};

const TerminalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  input {
    display: inline-block;
    margin-left: 3px;
    outline: none;
    background: black;
    color: ${palette.jade};
    &:focus {
      border: none;
    }
  }
`;

const P = styled.p`
  display: inline-block;
  padding: 8px;
  color: ${palette.jade};
`;
export default Terminal;
