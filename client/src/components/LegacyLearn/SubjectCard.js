import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Avatar, CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },
  actionArea: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  details: {
    padding: '16px 16px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    display: 'block',
  },
}));

export default function SubjectCard({ subject = '알고리즘' }) {
  const classes = useStyles();
  const history = useHistory();

  const onClickCard = (path) => {
    history.push(path);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.actionArea}
        onClick={() => {
          onClickCard(subject.path);
        }}
      >
        <Avatar src={subject.img} variant='square' />
        <div className={classes.details}>
          <Typography align='center' component='h5' variant='h5'>
            {subject.title}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}
