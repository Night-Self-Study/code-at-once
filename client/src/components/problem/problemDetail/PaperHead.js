import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import LanguageController from './LanguageController';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between',
  },
  underline: {
    fontSize: '2rem',
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
  },
  right: {
    display: 'flex',
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

export default function PaperHead({ title }) {
  const classes = useStyles();
  const history = useHistory();

  const onClickSubmit = () => {
    history.push(`${history.location.pathname}/result`);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.underline} variant='h1'>
        {title}
      </Typography>
      <div className={classes.right}>
        <LanguageController />
        <Button
          className={classes.button}
          color='primary'
          variant='contained'
          onClick={onClickSubmit}
        >
          제출
        </Button>
      </div>
    </div>
  );
}
