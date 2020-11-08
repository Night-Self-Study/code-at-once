import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    padding: theme.spacing(2, 4),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.5rem',
    flexGrow: 1,
  },
  logo: {
    margin: theme.spacing(0, 1),
  },
}));

export default function Header() {
  const classes = useStyles();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const onClickLogo = () => {
    history.push('/');
  };

  return (
    <AppBar position='static' color='primary'>
      <Toolbar className={classes.toolbar}>
        <Button color='inherit' onClick={onClickLogo}>
          <img
            className={classes.logo}
            src='/images/logo_transparent.png'
            alt='logo'
            width='64'
          />
          <Typography variant='h1' className={classes.title}>
            Code at Once
          </Typography>
        </Button>
        <RightPanel
          isLoggedIn={isLoggedIn}
          setLoggedIn={setLoggedIn}
          history={history}
        />
      </Toolbar>
    </AppBar>
  );
}

const RightPanel = ({ isLoggedIn, setLoggedIn, history }) => (
  <div>
    {' '}
    {isLoggedIn ? (
      <>
        <Button
          color='inherit'
          onClick={() => {
            history.push('/mypage');
          }}
        >
          <Typography>MyPage</Typography>
        </Button>
        <Button
          color='inherit'
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          <Typography>Logout</Typography>
        </Button>
      </>
    ) : (
      <>
        <Button
          color='inherit'
          onClick={() => {
            setLoggedIn(true);
          }}
        >
          <Typography>Login</Typography>
        </Button>
        <Button
          color='inherit'
          onClick={() => {
            history.push('/register');
          }}
        >
          <Typography>Register</Typography>
        </Button>
      </>
    )}
  </div>
);
