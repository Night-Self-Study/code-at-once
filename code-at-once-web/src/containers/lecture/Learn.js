import React from 'react';
import styled from 'styled-components';

const Learn = ({ title, src }) => {
  return <LearnWrapper title={title} src={src} />;
};

const LearnWrapper = styled.iframe`
  display: block;
  width: 100%;
  height: 100%;
`;
export default Learn;
