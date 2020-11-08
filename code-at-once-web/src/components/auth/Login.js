import React from 'react';
import { Button, Container, Box, Typography } from '@material-ui/core';

import CustomForm from '#/components/CustomForm';

export default function Login() {
  return (
    <Box p={3}>
      <Container>
        <Typography variant='h4'>로그인</Typography>
        <CustomForm data={['ID', 'Password']} />
        <Box py={3}>
          <Button fullWidth={true} variant='contained' color='primary'>
            로그인
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
