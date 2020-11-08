import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export default function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link component={RouterLink} color='inherit' to='/'>
        Code at Once
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
