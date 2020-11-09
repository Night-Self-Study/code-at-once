import React from 'react';
import { makeStyles, CardActionArea } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '1.5rem',
  },
  pos: {
    fontSize: '0.75rem',
    marginBottom: '1rem',
  },
});

export default function ProblemCard({
  id = -1,
  title = 'title',
  content = 'content',
  category = 'category',
  level = 'level',
}) {
  const classes = useStyles();
  const history = useHistory();

  const onClickCard = () => {
    history.push(`/problem/${id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onClickCard}>
        <CardContent>
          <Typography className={classes.title} color='textSecondary'>
            {title}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            {category}, {level}
          </Typography>
          <Typography variant='body2'>{content}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
