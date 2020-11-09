import React from 'react';
import { Container, Box } from '@material-ui/core';

export default function MyContainer({ maxWidth = 'lg', children = null }) {
  return (
    <Container maxWidth={maxWidth}>
      <Box py={3}>{children}</Box>
    </Container>
  );
}
