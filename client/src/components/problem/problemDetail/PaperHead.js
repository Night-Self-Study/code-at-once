import React, { useMemo } from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import LanguageController from './LanguageController';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { QUERIES } from '#/modules/ApolloClient';
import { useCodeContext } from '#/contexts/CodeContext';
import { useUserContext } from '#/contexts/UserContext';

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
  const match = useRouteMatch();
  const { code, language } = useCodeContext();
  const { user } = useUserContext();

  const problemId = useMemo(() => match.params.id, [match]);

  const [submitCode] = useMutation(QUERIES.SUBMIT_PROBLEM, {
    onCompleted: (d) => {
      history.push({
        pathname: `${match.url}/result`,
        state: { data: d.markUserCode },
      });
    },
  });

  const onClickSubmit = () => {
    const { id } = user;
    submitCode({
      variables: {
        userInput: {
          userId: 'solidw',
          problemId: 1,
          sourceCode: code,
          language: 'java',
        },
      },
    });
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
