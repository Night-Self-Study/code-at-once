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
        data={[
          { label: 'ID', variableName: 'id' },
          { label: 'Password', variableName: 'password' },
          { label: 'Password 확인', variableName: 'passwordConfirm' },
          { label: '이름', variableName: 'name' },
          { label: '이메일', variableName: 'email' },
        ]}
        type='register'
      />
    </Container>
  );
}
