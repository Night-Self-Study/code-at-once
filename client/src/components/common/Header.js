import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  AppBar,
  Typography,
  Button,
  Container,
} from '@material-ui/core';
import { useUserContext } from '#/contexts/UserContext';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.5rem',
    flexGrow: 1,
  },
  logo: {
    width: 64,
    margin: theme.spacing(0, 1),
  },
}));

export default function Header() {
  const classes = useStyles();
  const { isLoggedIn, setUser } = useUserContext();
  const history = useHistory();

  const onClickLogo = () => {
    history.push('/');
  };

  return (
    <AppBar position='static' color='primary'>
      <Container className={classes.container} maxWidth='lg'>
        <Button color='inherit' onClick={onClickLogo}>
          <img className={classes.logo} src='/images/logo.png' alt='logo' />
          <Typography variant='h1' className={classes.title}>
            Code at Once
          </Typography>
        </Button>
        <RightPanel
          isLoggedIn={isLoggedIn}
          history={history}
          setUser={setUser}
        />
      </Container>
    </AppBar>
  );
}

const RightPanel = ({ isLoggedIn, setUser, history }) => (
  <div>
    {' '}
    {isLoggedIn ? (
      <>
        <Button
          color='inherit'
          onClick={() => {
            setUser(null);
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
            history.push('/auth');
          }}
        >
          <Typography>Login</Typography>
        </Button>
        <Button
          color='inherit'
          onClick={() => {
            history.push('/auth/register');
          }}
        >
          <Typography>Register</Typography>
        </Button>
      </>
    )}
  </div>
);
