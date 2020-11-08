import React from 'react';
import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';

import CustomForm from '#/components/auth/CustomForm';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickLogin = () => {
    history.push('/');
  };

  const onClickRegister = () => {
    history.push('/auth/register');
  };

  return (
    <Container className={classes.root} maxWidth='md'>
      <div>
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
      </div>
    </Container>
  );
};

export default LoginPage;
