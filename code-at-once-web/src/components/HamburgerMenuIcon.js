import React from 'react';
import styled from 'styled-components';

const HamburgerMenuIcon = ({ onClick }) => {
  return (
    <HamburgerMenuIconWrapper onClick={onClick}>
      <div id="line-wrapper">
        <div className="line"> </div>
        <div className="line"> </div>
        <div className="line"> </div>
      </div>
    </HamburgerMenuIconWrapper>
  );
};

const HamburgerMenuIconWrapper = styled.div`
  width: 40px;
  padding: 4px 0px;
  display: flex;
  align-itmes: center;

  #line-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
  }

  .line {
    background: #ffffff;
    margin-top: 3px;
    margin-bottom: 3px;
    width: 80%;
    height: 5px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    position: relative;
  }
`;
export default HamburgerMenuIcon;
