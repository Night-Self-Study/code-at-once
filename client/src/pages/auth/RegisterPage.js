import React from 'react';
import {
  Button,
  Container,
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';

import CustomForm from '#/components/auth/CustomForm';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
});

export default function RegisterPage() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth='sm'>
      <Typography variant='h3'>회원가입</Typography>
      <CustomForm
        data={['ID', 'Password', 'Password 확인', '이름', 'E-Mail']}
      />
      <Box py={2}>
        <Button fullWidth variant='contained' color='secondary'>
          회원가입
        </Button>
      </Box>
    </Container>
  );
}
