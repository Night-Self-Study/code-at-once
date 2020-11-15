import React from 'react';
import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import CustomForm from '#/components/auth/CustomForm';
import { useUserContext } from '#/contexts/UserContext';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { setUser } = useUserContext();

  const onClickLogin = () => {
    history.push('/');
    setUser({
      id: 'solidw',
      password: 'p4ssword',
      name: 'taewan',
      email: 'asdf@asdf.com',
    });
  };

  const onClickRegister = () => {
    history.push('/auth/register');
  };

  return (
    <Container className={classes.root} maxWidth='sm'>
      <Typography variant='h3'>로그인</Typography>
      <CustomForm data={['ID', 'Password']} />
      <Box py={2}>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          onClick={onClickLogin}
        >
          로그인
        </Button>
        <Button
          fullWidth
          variant='contained'
          color='secondary'
          onClick={onClickRegister}
        >
          회원가입
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
